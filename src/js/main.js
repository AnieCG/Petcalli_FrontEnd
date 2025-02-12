import { FormValidator } from "../pages/formulario/Form.js";
const formContactUs = document.forms.contact;

const contactUs = new FormValidator(formContactUs, settings);
contactUs.enableValidation();
