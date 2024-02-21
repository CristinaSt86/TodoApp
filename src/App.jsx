import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";
import CreateTaskForm from "./createTaskForm/CreateTaskForm";
import MyTodos from "./components/myTodos/MyTodos";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TODOS_MOCK);
  const [completed, setCompleted] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxClick = (todoId, isChecked) => {
    setTaskData((prevTaskData) =>
      prevTaskData.map((task) =>
        task.id === todoId ? { ...task, completed: isChecked } : task
      )
    );
  };

  const onAddTask = (newTask) => {
    setTaskData((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `${prevState.length + 1}`,
        completed: false,
      },
    ]);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEditTodo = (todoId) => {
    const todoToEdit = taskData.find((todo) => todo.id === todoId);
    setTaskToEdit(todoToEdit);
    openModal();
  };

  const handleNewTaskAdd = (newTask) => {
    onAddTask(newTask);
    setIsOpen(false);
  };

  const deleteTodo = (id) => {
    setTaskData((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedData) => {
    setTaskData((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, ...updatedData } : todo
      )
    );
  };

  const completedTodos = (id) => {
    setCompleted((prevState) =>
      prevState.filter((todo) => todo.id === todo.completed)
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        <MyTodos
          dataFields={taskData}
          openModal={openModal}
          deleteTodo={deleteTodo}
          editTodo={handleEditTodo}
          completed={completedTodos}
          closeModal={closeModal}
          handleCheckboxClick={handleCheckboxClick}
        />
        <Modal isOpen={isOpen} onClose={closeModal}>
          <CreateTaskForm
            addTask={handleNewTaskAdd}
            onAddTask={onAddTask}
            editTodo={editTodo}
            taskToEdit={taskToEdit}
            closeModal={closeModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default App;
