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

// const BASE_URL =
//   "https://my-json-server.typicode.com/wahitom/phase-2-tour-project/db";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/availablepackages" element={<Availablepackages />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/userform" element={<Userform />} />
        <Route path="/morepackages/:id" element={<PackagesCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
