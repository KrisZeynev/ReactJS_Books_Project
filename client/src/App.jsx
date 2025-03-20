import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import Login from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import BookDetails from "./components/book-details/BookDetails";

function App() {
  return (

      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          {/* <NotFoundPage/> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <Home/> */}
          <BookDetails/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
