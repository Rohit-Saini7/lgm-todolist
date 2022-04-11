import React from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

function Showitem({ todolist, setTodolist }) {
  const handleToggle = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    let mapped = todolist.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : { ...item };
    });
    setTodolist(mapped);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    let filtered = todolist.filter((task) => {
      return task.id !== id;
    });
    setTodolist(filtered);
  };
  return (
    <React.Fragment>
      <ItemBox>
        {todolist.map((item) => (
          <Item key={item.id} done={item.done}>
            <Prioritycircle priority={item.priority} />
            {item.name}
            <TickIcon id={item.id} onClick={handleToggle}>
              <DoneRoundedIcon />
            </TickIcon>
            <DeleteIcon id={item.id} onClick={handleDelete}>
              <DeleteRoundedIcon />
            </DeleteIcon>
          </Item>
        ))}
      </ItemBox>
    </React.Fragment>
  );
}

export default Showitem;

const ItemBox = styled.div`
  position: absolute;
  top: 50px;
  left: 70px;
  z-index: 7;
`;

const Item = styled.div`
  width: 27vw;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 7px;
  background-color: rgba(2555, 255, 255, 0.3);
  border-radius: 15px;
  margin: 7px;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  svg {
    font-size: 2rem;
    &:nth-child(1) {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
`;

const Prioritycircle = styled(CircleTwoToneIcon)`
  color: ${(props) => {
    if (props.priority === "1") {
      return "red";
    } else if (props.priority === "2") {
      return "yellow";
    } else {
      return "green";
    }
  }};
`;

const TickIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: 0.5s;

  &:hover {
    color: green;
  }
  &:active {
    background: green;
  }
`;
const DeleteIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  margin-left: 10px;

  &:hover {
    color: red;
  }
  &:active {
    background: red;
  }
`;
