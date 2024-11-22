import React from "react";
import { Container } from "react-bootstrap";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
const NavBar = ({ search }) => {
  const navigat = useNavigate();
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="logo p-10"
            src={logo}
            alt="logo"
            onClick={() => navigat("/movieproject")}
          />

          <div className="search">
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              className="form-control"
              placeholder="ابحث"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
