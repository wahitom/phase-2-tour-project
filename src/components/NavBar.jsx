import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "4",
    margin: "6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
function NavBar() {
  return (
        <div>
          <NavLink to="/"exact style={linkStyles}> Home </NavLink>
          <NavLink to="/destination"exact style={linkStyles}> Destination </NavLink>
          <NavLink to="/activities"exact style={linkStyles}>AvailablePackages </NavLink>
          <NavLink to="/offers"exact style={linkStyles}> Offers </NavLink>
        </div>
  )
}

export default NavBar