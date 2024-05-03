import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { ICONS } from "../constants/icons";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        {/* <h1 className = "navbar-logo">Volunteer Connection</h1> */}
        {/* <img alt="icon-logo" class="icon" src={ICONS.logo} /> */}
        {/* <div className="frameWrapper"> */}
        {/* <div className="liveLearnGrowParent"> */}
        {/* <h1 className="liveLearnGrow">Live, Learn, Grow</h1> */}
        {/* <div className="connectWrapper"> */}
        {/* <h1 className="connect">{`& CONNECT`}</h1> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        <img  className="frameItem" alt="icon-logo" src={ICONS.logo} />
          <div className="frameWrapper">
            <div className="liveLearnGrowParent">
              <h1 className="liveLearnGrow">Live, Learn, Grow</h1>
              <div className="connectWrapper">
                <h1 className="connect">{`& CONNECT`}</h1>
              </div>
            </div>
          </div>
        <div className="menu-icons"></div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}>
                  </i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;