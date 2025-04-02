import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import Login from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import BookDetails from "./components/book-details/BookDetails";

import { Routes, Route } from "react-router";

import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Logout from "./components/logout/Logout";
import Catalog from "./components/books/Catalog";
// import CreateBook from "./components/book-create/CreateBook";
import BookPreferences from "./components/book-preferences/BookPreferences";
import About from "./components/about-page/About";
import BookCreate from "./components/book-create/BookCreate";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import BookEdit from "./components/book-edit/BookEdit";

function App() {
  // const [authData, setAuthData] = useState({});

  const [authData, setAuthData] = useState(() => {
    const savedAuthData = localStorage.getItem("authData");
    return savedAuthData ? JSON.parse(savedAuthData) : {};
  });

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
    localStorage.setItem("email", resultData.email);
    localStorage.setItem("authData", JSON.stringify(resultData));
    // setAuthData(JSON.parse(localStorage.getItem("authData")));
  };

  const userLogoutHandler = () => {
    setAuthData({});
    localStorage.removeItem("email");
    localStorage.removeItem("authData");
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about-us" element={<About />} />

            <Route element={<AuthGuard />}>
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/catalog/preferences"
                element={<BookPreferences />}
              />
              <Route path="/catalog/create" element={<BookCreate />} />
              <Route path="/catalog/:id/edit" element={<BookEdit />} />
            </Route>

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/catalog/:id/details" element={<BookDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
  



}

export default App;
