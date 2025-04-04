import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
  const { email } = useContext(UserContext);

  if (email) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
