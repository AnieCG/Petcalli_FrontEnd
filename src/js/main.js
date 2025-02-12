import { FormValidator } from "../pages/formulario/Form.js";

const formSelector = ".form";
const inputSelector = ".input-form";
const submitButtonSelector = ".button-form";
const inactiveButtonClass = "button-form_disabled";
const inputErrorClass = "input_type-error";
const errorClass = "input-error_active";

const settings = {
  formSelector,
  inputSelector,
  inputErrorClass,
  submitButtonSelector,
  inactiveButtonClass,
  errorClass,
};

const formContactUs = document.forms.contact;
const contactUs = new FormValidator(formContactUs, settings);
contactUs.enableValidation();
