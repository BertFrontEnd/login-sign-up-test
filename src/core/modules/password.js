export const setValidationPassword = () => {
  const passwordInput = document.querySelector('.box__p-name');
  const confirmPasswordInput = document.querySelector('.box__c-name');

  const passwordError = document.querySelector('.box__p-line');
  const confirmPasswordError = document.querySelector('.box__c-line');

  const message = document.querySelector('.message__text');

  const validationInput = (selectorInput, selectorLine) => {
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let numbers = /[0-9]/g;
    if (
      selectorInput.value.match(lowerCaseLetters) &&
      selectorInput.value.match(upperCaseLetters) &&
      selectorInput.value.match(numbers) &&
      selectorInput.value.length >= 8
    ) {
      selectorLine.classList.remove('line-error');
      message.classList.remove('message-error');
    } else {
      selectorLine.classList.add('line-error');
      message.classList.add('message-error');
    }
  };

  const passwordMatch = () => {
    if (!confirmPasswordInput.value == '') {
      if (confirmPasswordInput.value == passwordInput.value) {
        confirmPasswordError.classList.remove('line-error');
      } else {
        confirmPasswordError.classList.add('line-error');
      }
    }
  };

  const confirmPasswordMatch = () => {
    if (!passwordInput.value == '') {
      if (passwordInput.value == confirmPasswordInput.value) {
        confirmPasswordError.classList.remove('line-error');
      } else {
        confirmPasswordError.classList.add('line-error');
      }
    }
  };

  passwordInput.addEventListener('input', () => {
    validationInput(passwordInput, passwordError);
    passwordMatch();
  });

  confirmPasswordInput.addEventListener('input', () => {
    validationInput(confirmPasswordInput, confirmPasswordError);
    confirmPasswordMatch();
  });
};
