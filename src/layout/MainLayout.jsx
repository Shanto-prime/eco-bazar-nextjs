import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import React from "react";

const MainLayout = ({children}) => {

    return (
        <>
            <Nav/>
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
