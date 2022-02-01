import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

//context
import { useWallet } from "context/WalletContext";

//assets

import ICImage from "assets/png/IC.png";

//styled component

import {
  WalletLayout,
  WalletButton,
  ImageContainer,
  Backdiv,
  MobileLayout,
  ItemLayout,
  MobileImageContainer,
} from "./WallectConnect.styled";

import { StoicIdentity } from "ic-stoic-identity";

// interface myStoicIdentity {
//   load(host): any,
//   connect(host): any,
//   disconnect(): any
// }

// const StoicIdentity = dynamic(() =>
//   import("ic-stoic-identity").then((module) => module.StoicIdentity)
// );

const WalletConnect: React.FC<{ type: number }> = ({ type }) => {
  const { principleId, setPrincipleId } = useWallet();

  const login = () => {
    if (principleId == "") {
      if (typeof window !== "undefined") {
        StoicIdentity.load().then(async (identity: any) => {
          if (identity !== false) {
          } else {
            identity = await StoicIdentity.connect();
            console.log({ identity });
          }
          setPrincipleId(identity.getPrincipal().toText());
          StoicIdentity.disconnect();
        });
      }
    }
  };

  return (
    <div>
      {type == 1 && typeof window !== "undefined" ? (
        <>
          <WalletLayout>
            <WalletButton flag={principleId} onClick={() => login()}>
              {principleId != "" ? (
                principleId.substr(0, 15) + "..."
              ) : (
                <ImageContainer>
                  <Image src={ICImage.src} layout="fill" alt="No Image"></Image>
                </ImageContainer>
              )}
            </WalletButton>
            <Backdiv />
          </WalletLayout>
        </>
      ) : (
        ""
      )}
      {type == 2 && typeof window !== "undefined" ? (
        <MobileLayout onClick={() => login()}>
          {principleId != "" ? (
            principleId.substr(0, 15) + "..."
          ) : (
            <>
              <MobileImageContainer>
                <Image src={ICImage.src} layout="fill" alt="No Image"></Image>
              </MobileImageContainer>
              Wallet Connect
            </>
          )}
        </MobileLayout>
      ) : (
        ""
      )}
      {type == 3 && typeof window !== "undefined" ? (
        <ItemLayout onClick={() => login()}>
          {principleId != "" ? principleId.substr(0, 9) + "..." : "Log In"}
        </ItemLayout>
      ) : (
        ""
      )}
    </div>
  );
};

export default WalletConnect;
