import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Availablepackages from "./components/Availablepackages";
import Offers from "./components/Offers";
import Destination from "./components/Destination";
import Home from "./components/Home";
import PackagesCard from "./components/PackagesChild/PackagesCard";
import Footer from "./components/Footer";
import Userform from "./components/Userform";
import "./App.css";

const BASE_URL = "https://my-json-server.typicode.com/daveobat8/phase-2-tour-project/travels"

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination BASE_URL={BASE_URL} />} />
        <Route path="/availablepackages" element={<Availablepackages />} />
        <Route path="/offers" element={<Offers BASE_URL={BASE_URL} />} />
        <Route path="/userform" element={<Userform BASE_URL={BASE_URL} />} />
        <Route path="/morepackages/:id" element={<PackagesCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
