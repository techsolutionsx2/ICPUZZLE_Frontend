
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Buffer "mo:base/Buffer";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Text "mo:base/Text";

import Admins "../Admins";
import Types "types";


module {

    public class Assets (state : Types.State) {
        //  ┌─────────────┐
        //  │  INTERNALS  │
        //  └─────────────┘

        /// Writes a new asset to state, including the denormalized index
        private func _addAsset (record : Types.Record) : Result.Result<(), Text> {
            switch (files.get(record.meta.filename)) {
                case (?i) {
                    // Add asset to state
                    assets.put(i, record);
                    #ok();
                };
                case _ {
                    // Store a denormalized index of filename to asset index
                    files.put(record.meta.filename, assets.size());
                    // Add asset to state
                    assets.add(record);
                    #ok();
                };
            };
        };

        /// Determine whether an asset has a given tag.
        private func _assetHasTag (
            asset   : Types.Record,
            tag     : Text,
        ) : Bool {
            for (t in asset.meta.tags.vals()) {
                if (t == tag) return true;
            };
            return false;
        };

        //  ┌─────────┐
        //  │  STATE  │
        //  └─────────┘

        
        // The upload buffer, for adding additional assets.
        private let buffer : Buffer.Buffer<Blob> = Buffer.Buffer(0);

        // A denormalized hashmap for looking up assets.
        private let files : HashMap.HashMap<Text, Nat> = HashMap.HashMap(0, Text.equal, Text.hash);

        /// We store assets in a buffer, where each asset has some metadata and an asset payload.
        /// Assets are retrieved from the buffer by searching on their metadata.
        private let assets : Buffer.Buffer<Types.Record> = Buffer.Buffer(0);

        /// Provision assets from stable state.
        for (asset in state.assets.vals()) {
            ignore _addAsset(asset);
        };

        public func toStable () : [Types.Record] {
            return assets.toArray();
        };

        //  ┌─────────────┐
        //  │  UTILITIES  │
        //  └─────────────┘

        /// Find the first asset with a given tag.
        public func _findTag (tag : Text) : ?Types.Record {
            Array.find<Types.Record>(assets.toArray(), func (asset : Types.Record) {
                _assetHasTag(asset, tag);
            });
        };

        /// Find the first asset with all given tag.
        public func _findTags (tags : [Text]) : ?Types.Record {
            Array.find<Types.Record>(assets.toArray(), func (asset : Types.Record) {
                for (tag in tags.vals()) {
                    if (_assetHasTag(asset, tag) == false) return false;
                };
                return true;
            });
        };


        //  ┌──────────────┐
        //  │  PUBLIC API  │
        //  └──────────────┘

        public func getAll() : [Types.Record] {
            return assets.toArray();
        };

        /// Retrieve an asset.
        public func getAssetByName (
            filename : Text,
        ) : ?Types.Record {
            switch (files.get(filename)) {
                case (?index) ?assets.get(index);
                case _ null;
            };
        };

        /// Retrieve the asset manifest.
        public func getManifest () : [Types.Record] {
            assets.toArray();
        };


        //  ┌─────────────┐
        //  │  ADMIN API  │
        //  └─────────────┘

        /// Upload bytes into the buffer.
        /// @auth: admin
        public func upload(caller: Principal, bytes: Blob) : () {
            assert(state._Admins._isAdmin(caller));
            /* for (byte in bytes.vals()) { */
            buffer.add(bytes);
            /* } */
        };

        /// Finalize the upload buffer into an asset.
        /// @auth: admin
        public func uploadFinalize(caller: Principal, contentType: Text, meta: Types.Meta) : Result.Result<(), Text> {
            assert(state._Admins._isAdmin(caller));
            switch (
                _addAsset({
                    asset = {
                        contentType = contentType;
                        payload = buffer.toArray();
                    };
                    meta;
                })
            ) {
                case (#err(msg)) return #err(msg);
                case _ {
                    buffer.clear();
                    return #ok();
                }
            };
        };

        /// Clear the upload buffer
        /// @auth: admin
        public func uploadClear(caller: Principal) : () {
            assert(state._Admins._isAdmin(caller));
            buffer.clear();
        };

    };

};

