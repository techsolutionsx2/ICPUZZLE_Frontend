import React from "react";

// styled component
import { AppLayoutContainer } from "./app-layout.styled";

// types
interface LayoutProps {
  children: React.ReactNode;
}

// layouts

import { Header } from "layouts/Header";
import { Footer } from "layouts/Footer";

// -----------------------------------------------------------

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <AppLayoutContainer>
      <Header />
      {children}
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
