import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="homepage">
     
      <div className="content">
        <h1>Welcome To</h1>
        <NavLink className="Link" to="/destination">
                  Explore Our Destinations
                </NavLink>
      </div>
    </div>
 )
}

export default Home