import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi"

export default function Logout() {
    const {isLoggedOut} = useLogout()
    return (
        <>
        {/* {isLoggedOut} ? <Navigate to='/login'/> ? <Spinner/> */}
        {isLoggedOut} ? <Navigate to='/login'/> ? <Spinner/>
        </>
    )
}

function Spinner () {
    return (
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  };
