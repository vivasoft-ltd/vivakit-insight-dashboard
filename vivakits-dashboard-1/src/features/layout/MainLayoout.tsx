import { VKFlex, VKLayout, VKNotifications } from "@vivakits/react-components";
import React from "react";
import NavBar from "./partial/NavBar";
import SideBar from "./partial/SideBar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <VKLayout>
      <VKNotifications />
      <NavBar />
      <VKFlex className="z-0 w-full h-[calc(100%-3rem)] mt-[calc(4rem)]">
        <SideBar />
        <VKFlex className="ml-48 p-8 w-full h-full">
        {children}
        </VKFlex>
      </VKFlex>
    </VKLayout>
  );
};

export default MainLayout;
