import React from "react";
import Card from "../card/Card";
import TodoItem from "../todo-item/TodoItem";
import Button from "../button/Button";

const MyTodos = (props) => {
  return (
    <>
      <div className="App">
        <div className="app-container">
          <Card>
            <h2>Todo</h2>
            <Button onClick={props.openModal}>Add +</Button>
            <div className="list-container">
              {props.dataFields
                .filter((item) => {
                  return item.completed === false;
                })
                .map((item, index) => (
                  <TodoItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    completed={item.completed}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    handleCheckboxClick={props.handleCheckboxClick}
                  />
                ))}
            </div>

            <div className="separator"></div>

            <h2>Completed</h2>
            <div className="list-container">
              {props.dataFields
                .filter((item) => {
                  return item.completed === true;
                })
                .map((item, index) => (
                  <TodoItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    completed={item.completed}
                    toggleCompleted={props.toggleCompleted}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    closeModal={props.closeModal}
                    handleCheckboxClick={props.handleCheckboxClick}
                  />
                ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default MyTodos;
