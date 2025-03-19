import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import NotFoundPage from "./components/not-found-page/NotFoundPage";

function App() {
  return (

      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          {/* <Home></Home> */}
          <NotFoundPage/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
