import React from "react";
import {
  FaBook,
  FaBookReader,
  FaCalculator,
  FaCalendarAlt,
  FaFileAlt,
  FaInfoCircle,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";
import {
  SidebarHead,
  SidebarWrapper,
  SidebarContainer,
  SideBarMenu,
  SidebarItem,
} from "./SidebarElements";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { navToggle, handleToggle } = props;

  return (
    <SidebarContainer
      navToggle={navToggle}
      onClick={() => (window.innerWidth <= 992 ? handleToggle() : "")}
    >
      <SidebarHead>
        <Link to="/">LMS PRO</Link>
        {navToggle ? (
          <span
            navToggle={navToggle}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <FaTimes />
          </span>
        ) : (
          <input type="radio" />
        )}
      </SidebarHead>
      <SidebarWrapper>
        <SideBarMenu>
          <SidebarItem>
            <Link to="/dashboard/news/1">
              <AiFillDashboard
                className="sideIcon"
                style={{ fontSize: "20px" }}
              />
              <span>Dashboard</span>
            </Link>
          </SidebarItem>
          <SidebarItem></SidebarItem>
          <SidebarItem className="sidebar-title">TALABA</SidebarItem>
          <SidebarItem>
            <Link to="/student/subject">
              <FaBook className="sideIcon" />
              <span>Fan tanlov</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/my-course">
              <FaBookReader className="sideIcon" />
              <span>Mening fanlari</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/schedule">
              <FaCalendarAlt className="sideIcon" />
              <span>Dars jadvali</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/retake">
              <FaCalculator className="sideIcon" />
              <span>Qayta o'qish</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/finals">
              <FaQuestionCircle className="sideIcon" />
              <span>Yakuniy</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/study-plan">
              <FaFileAlt className="sideIcon" />
              <span>Induvidual shaxsiy reja</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/student/info">
              <FaInfoCircle className="sideIcon" />
              <span>Ma'lumot</span>
            </Link>
          </SidebarItem>
        </SideBarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
