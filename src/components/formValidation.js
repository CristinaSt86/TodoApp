export const validateForm = (taskTitle, taskDescription) => {
  let taskTitleErrorMessage = "";
  let taskDescriptionErrorMessage = "";
  let isFormValid = true;

  if (taskTitle.length === 0) {
    taskTitleErrorMessage = "This field is REQUIRED!";
    isFormValid = false;
  } else if (taskTitle.length < 4) {
    taskTitleErrorMessage = "This field should have at least 4 characters.";
    isFormValid = false;
  }

  if (taskDescription.length === 0) {
    taskDescriptionErrorMessage = "This field is REQUIRED!";
    isFormValid = false;
  } else if (taskDescription.length < 4) {
    taskDescriptionErrorMessage =
      "This field should have at least 4 characters.";
    isFormValid = false;
  }

  return {
    taskTitle: taskTitleErrorMessage,
    taskDescription: taskDescriptionErrorMessage,
    isValid: isFormValid,
  };
};
