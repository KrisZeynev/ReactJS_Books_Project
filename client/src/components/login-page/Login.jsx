import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [isFailed, setIsFailed] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const { userLoginHandler } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = async (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 2000);
        const msg = await response.json();
        setErrMsg(msg.message);
        return;
      }

      const result = await response.json();
      userLoginHandler(result);
      navigate("/");
    } catch (error) {
      setErrMsg(error);
    }
  };

  return (
    <section
      id="login-page"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <form
        id="login"
        onSubmit={loginFunc}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <div className="flex flex-col items-center">
          {/* <div className="brand-logo w-16 h-16 bg-gray-300 rounded-full mb-4"></div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <h1 className="text-2xl font-bold mb-4">Login</h1>
        </div>

        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourEmail@gmail.com"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label
          htmlFor="login-password"
          className="block text-gray-700 font-medium"
        >
          Password:
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
          value="Login"
        />

        <p className="text-center text-gray-600 mt-4">
          If you don't have a profile, click{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            here
          </Link>
        </p>
        {isFailed && (
          <div className="mt-4 p-3 w-full max-w-xs text-center bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errMsg}
          </div>
        )}
      </form>
    </section>
  );
}
