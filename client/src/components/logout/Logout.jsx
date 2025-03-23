import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";

export default function Logout() {
  const { isLoggedOut } = useLogout();
  console.log(isLoggedOut);
  
  return (
    <>
      {/* {isLoggedOut} ? <Navigate to='/login'/> ? <Spinner/> */}
      {isLoggedOut} ? <Navigate to="/login" /> ? <Spinner />
    </>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center mt-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  );
}
