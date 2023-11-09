import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
//import Availablepackages from "./components/Availablepackages";
import Offers from "./components/Offers";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Userform from "./components/Userform";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/availablepackages" element={<Availablepackages />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
