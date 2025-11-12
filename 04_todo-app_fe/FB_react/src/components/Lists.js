import React from "react";
import "../App.css";
import { Droppable } from "react-beautiful-dnd";
import List from "./List";

function Lists({ todoData, setTodoData }) {
  return (
    <Droppable droppableId="todoList">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {todoData.map((data, index) => (
            <List
              key={data.id}
              data={data}
              index={index}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default React.memo(Lists);