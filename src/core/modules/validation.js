import { setSnakeX } from './snake.js';
import { requestToServer } from './request.js';

export const setValidation = () => {
  const form = document.querySelector('.main__form');
  const sendButton = document.querySelector('.complete__button');

  const email = document.querySelector('.box__e-name');
  const emailError = document.querySelector('.box__e-line');
  const emailValid = document.querySelector('.box__e-check');

  const firstName = document.querySelector('.box__f-name');
  const lastName = document.querySelector('.box__l-name');
  const firstNameError = document.querySelector('.box__f-line');
  const lastNameError = document.querySelector('.box__l-line');

  const passwordInput = document.querySelector('.box__p-name');
  const confirmPasswordInput = document.querySelector('.box__c-name');
  const passwordError = document.querySelector('.box__p-line');
  const confirmPasswordError = document.querySelector('.box__c-line');

  const message = document.querySelector('.message__text');

  const isEmpty = (selector, errorSelector) => {
    if (selector.value.length === 0) {
      errorSelector.classList.add('line-error');
    } else {
      errorSelector.classList.remove('line-error');
    }
  };

  const showError = () => {
    if (email.validity.valueMissing) {
      emailError.classList.add('line-error');
      emailValid.classList.remove('check-true');
    }

    if (email.validity.typeMismatch) {
      emailError.classList.add('line-error');
      emailValid.classList.remove('check-true');
    }

    if (email.validity.tooShort) {
      emailError.classList.add('line-error');
      emailValid.classList.remove('check-true');
    }
  };

  const setHandler = (e) => {
    if (
      firstName.value.length === 0 ||
      lastName.value.length === 0 ||
      !email.validity.valid ||
      passwordInput.value !== confirmPasswordInput.value ||
      passwordInput.value.length === 0 ||
      confirmPasswordInput.value.length === 0
    ) {
      e.preventDefault();
      setSnakeX();
      passwordError.classList.add('line-error');
      confirmPasswordError.classList.add('line-error');
      message.classList.add('message-error');
      passwordInput.value = '';
      confirmPasswordInput.value = '';
    } else {
      e.preventDefault();
      requestToServer();
    }
  };

  firstName.addEventListener('input', (e) => {
    isEmpty(e.currentTarget, firstNameError);
  });

  lastName.addEventListener('input', (e) => {
    isEmpty(e.currentTarget, lastNameError);
  });

  email.addEventListener('input', (e) => {
    if (email.validity.valid) {
      emailError.classList.remove('line-error');
      emailValid.classList.add('check-true');
    } else {
      showError();
    }
  });

  form.addEventListener('submit', (e) => {
    setHandler(e);
  });

  sendButton.addEventListener('click', (e) => {
    setHandler(e);
  });

  window.addEventListener('load', () => {
    if (email.value !== '') {
      emailValid.classList.add('check-true');
    }
  });
};
