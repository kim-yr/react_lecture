import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { BrowserRouter, Router, Route } from "react-router-dom";
//routing : get("/people")
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Contents />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

