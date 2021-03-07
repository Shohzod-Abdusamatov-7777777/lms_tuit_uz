import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 81px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  user-select: none;
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  line-height: 30px;
  display: flex;
  align-items: center;
`;
export const NavLogo = styled.div`
  width: 280px;
  left: 0;
  top: 0;
  font-size: 18px;
  font-weight: 800;
  font-family: sans-serif;
  padding: 40px 40px 11px 40px;
  display: block;
  line-height: 30px;
  color: #0070e0 !important;
  background: #f7f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 992px) {
    transform: translateX(-280px);
    display: none;
  }
  & a {
    text-decoration: none;
    cursor: pointer;
  }
  & a:hover {
    color: #0070e0 !important;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #249;
  width: calc(100% - 280px);
  font-family: sans-serif;
  padding: 40px 40px 11px 30px;
  background: #f7f9fa;
  height: 100%;
  color: #666;
  font-size: 25px;
  line-height: 30px;
  & div {
    color: #666;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 40px 30px 11px 30px;
  }
`;
export const NavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 800;
  width: auto;
  & :nth-child(1),
  & :nth-child(2) {
    cursor: pointer;
    font-weight: bold;
  }
  & :nth-child(2) {
    margin: 0 1.5rem;
  }
  & :nth-child(3) {
    margin: 0 1.5rem;
    line-height: 30px;
    font-size: 18px;
    color: #0070e0 !important;
    display: none;
    text-decoration: none;
  }
  @media screen and (max-width: 992px) {
    & :nth-child(2) {
      display: none;
    }
    & :nth-child(3) {
      display: block;
    }
  }
`;
export const UserDetails = styled.ul`
  position: absolute;
  top: 85px;
  right: 20px;
  background: #ccc;
  display: flex;
  flex-direction: column;
  width: 160px;
  font-size: 14px;
  text-align: left;
  list-style: none;
  border-radius: 10px;
  padding: 10px;
  font-family: sans-serif;
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.4), 7px 15px 21px rgba(0, 0, 0, 0.2);

  opacity: ${(props) => (props.UserOpen ? "1" : "0")};
  display: ${(props) => (props.UserOpen ? "flex" : "none")};

  &::after {
    content: "";
    position: absolute;
    border: 8px solid transparent;
    top: -16px;
    left: calc(100% - 40px);
    border-bottom-color: #ccc;
  }
  @media screen and (max-width: 992px) {
    right: 15px;
    &::after {
      left: calc(100% - 35px);
    }
  }
  & span {
    line-height: 1.3;
    color: #444;
  }
  & > li {
    padding: 0.5rem;
    line-height: 1;
  }
  & > li > a {
    text-decoration: none;
    color: #555;
    transition: all 0.2s ease-in-out;
  }
  & > li > a:hover {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #222;
  }
`;
