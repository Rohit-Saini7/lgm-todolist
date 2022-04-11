import React, { useState } from "react";
import styled from "styled-components";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import { v4 as uuid } from "uuid";

function Additem({ todolist, setTodolist }) {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState("false");
  const [priority, setPriority] = useState("1");

  const handlePriority = () => {
    if (priority === "1") {
      setPriority("2");
    } else if (priority === "2") {
      setPriority("3");
    } else {
      setPriority("1");
    }
  };
  const handleSubmit = () => {
    let item = {
      id: uuid(),
      name: name,
      priority: priority,
      done: false,
    };
    let newArray = [...todolist, item];
    setTodolist(newArray);
    setName("");
    setToggle("false");
  };
  return (
    <React.Fragment>
      <AddNew toggle={toggle}>
        <Prioritycircle
          priority={priority}
          onClick={handlePriority}
          toggle={toggle}
        />
        <Input
          type={toggle === "false" ? "hidden" : "text"}
          placeholder="Add new task..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          toggle={toggle}
        />
        <TickIcon toggle={toggle} onClick={handleSubmit} />
        <CloseIcon
          onClick={() => {
            toggle === "true" ? setToggle("false") : setToggle("true");
          }}
          toggle={toggle}
        />
      </AddNew>
    </React.Fragment>
  );
}

export default Additem;

const AddNew = styled.div`
  position: relative;
  top: 470px;
  width: ${({ toggle }) => (toggle === "true" ? "400px" : "70px")};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ toggle }) => (toggle === "true" ? "transparent" : "#fff")};
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  svg {
    font-size: 2.5rem;
  }
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.7rem;
  font-weight: 700;
  border-radius: 5rem;
  background: ${({ toggle }) => (toggle === "true" ? "transparent" : "#fff")};
  color: ${({ toggle }) => (toggle === "true" ? "#000" : "transparent")};

  &::placeholder {
    background: ${({ toggle }) => (toggle === "true" ? "transparent" : "#fff")};
    color: ${({ toggle }) => (toggle === "true" ? "#000" : "transparent")};
  }
`;

const TickIcon = styled(DoneRoundedIcon)`
  position: absolute;
  top: 10px;
  right: 60px;
  corsor: pointer;
  color: ${({ toggle }) => (toggle === "true" ? "#000" : "transparent")};
`;
const CloseIcon = styled(AddRoundedIcon)`
  position: absolute;
  transition: 0.75s;
  ${({ toggle }) =>
    toggle === "true"
      ? "top: 10px; right: 10px; transform: rotate(315deg);"
      : ""}
  font-size: 3rem;
  corsor: pointer;
`;

const Prioritycircle = styled(CircleTwoToneIcon)`
  position: relative;
  color: ${({ toggle, priority }) => {
    if (toggle === "true") {
      if (priority === "1") {
        return "red";
      } else if (priority === "2") {
        return "yellow";
      } else {
        return "green";
      }
    } else {
      return "transparent";
    }
  }};
`;
