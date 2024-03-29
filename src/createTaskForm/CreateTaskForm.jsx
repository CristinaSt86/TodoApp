import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import Input from "../components/input/Input";
import TextArea from "../components/input/TextArea";
import Button from "../components/button/Button";
import { validateForm } from "../components/formValidation";
import "./CreateTaskForm.css";

const CreateTaskForm = (props) => {
  const [taskId, setTaskId] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [formValidation, setFormValidation] = useState({
    taskTitle: "",
    taskDescription: "",
    isValid: true,
  });

  useEffect(() => {
    setFormValidation(validateForm(taskTitle, taskDescription));
  }, [taskTitle, taskDescription]);

  useEffect(() => {
    if (props.taskToEdit) {
      const { id, title, description, completed } = props.taskToEdit;
      setTaskId(id);
      setTaskTitle(title);
      setTaskDescription(description);
      setTaskCompleted(completed);
    } else {
      setTaskId("");
      setTaskTitle("");
      setTaskDescription("");
      setTaskCompleted(false);
    }
  }, [props.taskToEdit]);

  const handleTaskTitle = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleTaskCompleted = (event) => {
    setTaskCompleted(event.target.checked);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newTask = {
      id: taskId,
      title: taskTitle,
      description: taskDescription,
      completed: taskCompleted,
    };

    if (props.taskToEdit) {
      props.editTodo(props.taskToEdit.id, newTask);
      props.closeModal();
    } else {
      props.addTask(newTask);
      props.closeModal();
    }

    setTaskId("");
    setTaskTitle("");
    setTaskDescription("");
    setTaskCompleted(false);
  };

  // Check if either task title or task description is empty
  const isFormEmpty = () => {
    return !taskTitle.trim() || !taskDescription.trim();
  };

  return (
    <Card>
      <h2>{props.taskToEdit ? "Edit Todo" : "Create Todo"}</h2>
      <form onSubmit={handleSubmitForm}>
        <div className="form-row">
          <Input
            id="taskTitle"
            onChange={handleTaskTitle}
            placeholder="Title"
            type="text"
            value={taskTitle}
            completed={handleTaskCompleted}
            className={formValidation.taskTitle && "input-error"}
          />
          <p className="error-message">{formValidation.taskTitle}</p>
        </div>
        <div className="form-row">
          <TextArea
            id="taskDescription"
            onChange={handleTaskDescription}
            placeholder="Description"
            type="text"
            value={taskDescription}
            completed={handleTaskCompleted}
            className={formValidation.taskDescription && "input-error"}
          />
          <p className="error-message">{formValidation.taskDescription}</p>
        </div>
        <Button type="submit" disabled={isFormEmpty()}>
          {props.taskToEdit ? "Update" : "Create"}
        </Button>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
