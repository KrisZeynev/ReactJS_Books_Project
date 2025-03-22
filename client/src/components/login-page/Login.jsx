import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [error, setError] = useState(false)

  const loginFunc = async (data) => {
    const { email, password } = Object.fromEntries(data);

    try {
      const res = await login(email, password);
      if (res) {
        navigate("/");
      }
      console.log(res);
      // navigate("/");
    } catch (error) {
      setError(true)
      console.error("Login failed:", error.message);
    }
  };

  return (
    <section
      id="login-page"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <form
        id="login"
        action={loginFunc}
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
      </form>
     {error && 
      (<div className="mt-4 p-3 w-96 text-center bg-red-100 border border-red-400 text-red-700 rounded-lg">Login failed</div>)
     }
    </section>
  );
}