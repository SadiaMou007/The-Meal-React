import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
