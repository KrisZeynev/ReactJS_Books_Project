import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    // const { email } = useContext(UserContext)
    const email = localStorage.getItem("email");

    if (email) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}