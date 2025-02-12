class FormValidator {
  constructor(formElement, formValidity) {
    this.formElement = formElement;
    this.formValidity = formValidity;
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.formValidity.inputErrorClass);
    errorElement.classList.add(this.formValidity.errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("input_type-error");
    errorElement.classList.remove("input-error_active");
    errorElement.textContent = "";
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInputInvalid(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInputInvalid(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._formValidity.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._formValidity.inactiveButtonClass);
    }
  }
}

const formSelector = document.querySelector(".form");
const inputSelector = document.querySelector(".input-form");
const submitButtonSelector = document.querySelector(".button-form");
const inactiveButtonClass = document.querySelector(".button-form_disabled");
const inputErrorClass = document.querySelector(".input_type-error");
const errorClass = document.querySelector(".input-error_active");

const settings = {
  formSelector,
  inputSelector,
  inputErrorClass,
  submitButtonSelector,
  inactiveButtonClass,
  errorClass,
};
