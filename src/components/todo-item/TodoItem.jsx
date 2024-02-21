import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {

const handleCheckboxClick = (isChecked) => {
  props.handleCheckboxClick(props.id, !props.completed)
}

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={props.completed} onClick={handleCheckboxClick} id={props.id}/>
          <h4>{props.title}</h4>
        </div>
        <div>
          {props.completed === false && ( // Only show edit icon if the item is not completed
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              onClick={() => props.editTodo(props.id)}
            ></i>
          )}
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => props.deleteTodo(props.id)}
          ></i>
        </div>
      </div>
      <div className="separator"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
