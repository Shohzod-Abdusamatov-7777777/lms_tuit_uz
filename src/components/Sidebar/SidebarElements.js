import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  position: fixed;
  width: 281px;
  z-index: 1000;
  top: 0;
  display: block;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 992px) {
    border-right: 1px solid #ccc;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.navToggle ? "translateX(0)" : "translateX(-280px)"};
  }
  .sideIcon {
    margin-right: 10px;
    font-size: 17px;
  }
  & a:hover {
    text-decoration: none;
  }
`;
export const SidebarHead = styled.div`
  height: 81px;
  font-size: 18px;
  font-weight: 800;
  font-family: sans-serif;
  padding: 40px 40px 11px 40px;
  line-height: 30px;
  color: #0070e0 !important;
  background: #e5e9ec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  @media screen and (max-width: 992px) {
    background: #ddd;
  }
`;
export const SidebarWrapper = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  line-height: 30px;
  color: #333;
  background: #e5e9ec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 992px) {
    background: #ddd;
  }
`;

export const SideBarMenu = styled.ul`
  padding-top: 8px;
  height: 100vh;
`;
export const SidebarItem = styled.li`
  list-style-type: none;
  padding: 6px 40px;
  transition: all 0.2s ease-in-out;
  transition: border 0s;
  &:nth-child(2) {
    width: 281px;
    margin: 10px 0;
  }
  &:nth-last-child(1) {
    width: 281px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 992px) {
    &:nth-child(2) {
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
    }
    &:nth-last-child(1) {
      border-bottom: 1px solid #ccc;
    }
  }

  &.sidebar-title {
    font-size: 10px;
    font-weight: 600;
    color: rgb(139, 150, 186);
    text-transform: uppercase;
    padding: 12px 40px 0;
  }
  & a {
    font-weight: 400;
    font-size: 14px;
    color: #596b8c;
    text-decoration: none;
  }
  & a:hover {
    color: #3d464c;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
`;
