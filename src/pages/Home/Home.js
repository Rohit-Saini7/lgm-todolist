import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Additem from "./components/Additem";
import Showitem from "./components/Showitem";
import Squares from "./components/Squares";
import items from "./components/items";

function Home() {
  const [todolist, setTodolist] = useState(items);
  return (
    <React.Fragment>
      <Navbar />
      <Section>
        <Box className="box">
          <Squares />
          <Showitem todolist={todolist} setTodolist={setTodolist} />
          <Container>
            <Additem todolist={todolist} setTodolist={setTodolist} />
          </Container>
        </Box>
      </Section>
    </React.Fragment>
  );
}

export default Home;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Box = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  padding: 50px;
  width: 30vw;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: 7px;
    bottom: 7px;
    left: 7px;
    border-radius: 5px;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 2%
    );
  }
`;
