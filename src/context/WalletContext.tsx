import React, { useContext, useState } from "react";

// Types
interface LayoutProps {
  children: React.ReactNode;
}

type Context = {
  principleId: string;
  setPrincipleId: React.Dispatch<React.SetStateAction<string>>;
};

//initialContext

const initialContext: Context = {
  principleId: "",
  setPrincipleId: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

//create context

const WalletContext = React.createContext<Context>(initialContext);

export const useWallet = () => {
  return useContext(WalletContext);
};

export const WalletProvider: React.FC<LayoutProps> = ({ children }) => {
  const [principleId, setPrincipleId] = useState("");

  return (
    <WalletContext.Provider value={{ principleId, setPrincipleId }}>
      {children}
    </WalletContext.Provider>
  );
};
