import "./App.css";
import "./scss/layout.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>열려라 화장실!</h1>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

