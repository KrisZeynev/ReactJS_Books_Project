import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

import { useSelector } from "react-redux";

export default function AuthGuard() {
  // const { email } = useContext(UserContext);
  const email = useSelector((state) => state.auth.email);

  if (!email) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
