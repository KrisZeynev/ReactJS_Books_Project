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
import CreateBook from "./components/book-create/CreateBook";

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {authData.email ? (
              <>
                <Route path="/logout" element={<Logout />} />
                <Route path="/catalog/:id/details" element={<BookDetails />} />
                <Route path="/catalog/create" element={<CreateBook />} /> {/* TODO: move above*/}
              </>
            ) : (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/books/preferences" element={<BookPreferences />} /> {/* TODO: move above*/}
                
              </>
            )}
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about-us" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* <BookDetails/> */}
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
