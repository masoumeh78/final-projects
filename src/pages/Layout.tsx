import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

// navbar
import TopMenu from '../components/Menu/TopMenu';

function Layout() {
    return (
        <>
            <TopMenu/>
            <main className="main" >
                <Outlet />
            </main>


            <footer className="footer">
                <small>Made by MAS</small>
            </footer>
        </>
    )
}

export default Layout;