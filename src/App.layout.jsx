import React from "react";
import Footer from "./layouts/footer/footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;
