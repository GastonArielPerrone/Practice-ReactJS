import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import "./Layout.css";

export const Layout =({ children }) => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}