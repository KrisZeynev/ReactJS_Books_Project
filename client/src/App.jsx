import Home from "./components/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {/* <Home></Home> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
