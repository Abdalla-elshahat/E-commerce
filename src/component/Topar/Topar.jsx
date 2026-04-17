import { LocalMall, Search, Store } from "@mui/icons-material";
import './Topar.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Topar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase().trim();
    if (value === "laptop") {
      navigate("/laptops");
    } else if (value === "phone") {
      navigate("/Phones");
    } else if (value === "playstation") {
      navigate("/Playstation");
    } else if (value === "home") {
      navigate("/Home");
    } else if (value === "shirt") {
      navigate("/Shirt");
    } else if (value === "sports") {
      navigate("/Sports");
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <div className="toparcontainer">
      <div className="toparleft">
        <Link to="/Home" className="mainlogo" onClick={closeMenu}>
          <Store className="logoicon" />
          <span className="logotext">Affiliate</span>
        </Link>
      </div>

      <div className="toparcenter">
        {/* Hamburger icon for mobile view */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`links ${open ? "show" : ""}`}>
          <NavLink to="/Home" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/laptops" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            laptops
          </NavLink>
          <NavLink to="/Phones" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Phones
          </NavLink>
          <NavLink to="/Playstation" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Playstation
          </NavLink>
          <NavLink to="/Shirt" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Shirt
          </NavLink>
          <NavLink to="/Sports" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Sports
          </NavLink>
        </nav>
      </div>

      <div className="toparright">
        <label className="theme-switch">
          <input type="checkbox" className="checkbox" />
          <div className="container" onClick={() => {
            document.querySelector('.toparcontainer').classList.toggle("light");
            let root = document.documentElement;
            if (document.querySelector(".toparcontainer").classList.contains("light")) {
              root.style.setProperty("--mainwhite", "black");
              root.style.setProperty("--mainblack", "white");
            } else {
              root.style.setProperty("--mainblack", "black");
              root.style.setProperty("--mainwhite", "white");
            }
          }}>
            <div className="circle-container">
              <div className="sun-moon-container">
                <div className="moon">
                  <div className="spot"></div>
                  <div className="spot"></div>
                  <div className="spot"></div>
                </div>
              </div>
            </div>
          </div>
        </label>

        <div className="Search">
          <Search className="searchicon" />
          <input
            type="text"
            placeholder="Search for products.."
            className="searchtext"
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            onBlur={handleSearch}
          />
        </div>

        <div className="loginbb">
          <Link to="/buy" onClick={closeMenu}>
            <LocalMall className="shoppingbag" />
          </Link>
          <Link to="/login" className="loginbtn" onClick={closeMenu}>
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topar;
