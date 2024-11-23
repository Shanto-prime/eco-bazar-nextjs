import Nav from "@/components/Nav";
import React from "react";

const MainLayout = ({children}) => {

    return (
        <>
            <Nav/>
            {children}
        </>
    );
};

export default MainLayout;
