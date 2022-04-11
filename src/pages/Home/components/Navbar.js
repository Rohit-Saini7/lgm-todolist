import React from "react";
import styled from "styled-components";

function Navbar(props) {
  return (
    <Container>
      <NavbarWrap className="navbarWrap">
        <Toolbar>
          <LogoBox>ToDo List</LogoBox>
        </Toolbar>
      </NavbarWrap>
    </Container>
  );
}
export default Navbar;

const Container = styled.header`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  position: absolute;
  top: 3%;
  left: 10%;
  border-radius: 10px;
`;

const NavbarWrap = styled.div`
  max-width: 80%;
  margin: auto;
  box-sizing: border-box;
`;
const Toolbar = styled.div`
  min-height: 64px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const LogoBox = styled.div`
  font-weight: 800;
  font-size: 2rem;
`;
