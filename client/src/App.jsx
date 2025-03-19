import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (

      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          {/* <Home></Home> */}
        </main>
        <Footer />
      </div>
  );
}

export default App;
