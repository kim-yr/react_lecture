import "./App.css";
import "./scss/layout.scss"; //npm i node-sass 설치하면 바로 써도 적용 가능
import Header from "./components/Header";
import Days from "./components/Days";
import Day from "./components/Day";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import UseRefComponent from "./components/UseRefComponent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/:day" element={<Day />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
          <Route path="/use" element={<UseRefComponent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

//json-server : 임시로 쓰는 백엔드 DB, 실질적으로 데이터가 저장되는 건 아니고,, 설치 해서 써야 함 (https://www.npmjs.com/package/json-server)
//글로벌로 설치하면 패키지.json/"dependencies"에 안뜸
/*
 npm install -g json-server
 json-server --watch db.json
*/

