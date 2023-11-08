import Availablepackages from "./components/Availablepackages";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";

function App() {
  return (
    <div >
     <NavBar/>
     <Home/>
     <Destination/>
     <Availablepackages/>
     <Offers/>
     <Footer/>
    </div>
  );
}

export default App;
