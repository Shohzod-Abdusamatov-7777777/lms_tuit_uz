import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavLogo,
  NavbarContainer,
  NavbarWrapper,
  NavMenu,
  NavIcons,
  UserDetails,
} from "./NavbarElements";
import { FaBars, FaUserTie, FaExpandAlt, FaCompressAlt } from "react-icons/fa";

const Navbar = (props) => {
  const { handleToggle, user, handleLogOut } = props;
  const [UserOpen, setUserOpen] = useState(false);
  const handleUserOpen = () => {
    setUserOpen(!UserOpen);
  };

  // fuulScreen window
  // open window
  const [fullScreen, setFullScreen] = useState(false);
  var elem = document.documentElement;
  const openFullscreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
    setFullScreen(!fullScreen);
  };
  // close window
  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavLogo>
          <Link to="/">LMS PRO</Link>
          <input type="radio" />
        </NavLogo>
        <NavMenu>
          <NavIcons>
            <span
              onClick={() => (window.innerWidth < 992 ? handleToggle() : true)}
            >
              <FaBars />
            </span>
            {fullScreen ? (
              <span onClick={closeFullscreen}>
                <FaCompressAlt />
              </span>
            ) : (
              <span onClick={openFullscreen}>
                <FaExpandAlt />
              </span>
            )}

            <Link to="/">LMS PRO</Link>
          </NavIcons>
          <div>
            <FaUserTie onClick={handleUserOpen} style={{ cursor: "pointer" }} />
            <UserDetails UserOpen={UserOpen}>
              <li>
                <span>Shohzod Abdusamatov</span>
              </li>
              <li></li>
              <li>
                <Link to="/">Profil sozlamalari</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogOut}>
                  Chiqish
                </Link>
              </li>
            </UserDetails>
          </div>
        </NavMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
