export const setValidationEmail = () => {
  const form = document.querySelector('.main__form');
  const email = document.querySelector('.box__e-name');
  const emailError = document.querySelector('.box__e-line');
  const emailValid = document.querySelector('.box__e-check');

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

  email.addEventListener('input', (e) => {
    if (email.validity.valid) {
      emailError.classList.remove('line-error');
      emailValid.classList.add('check-true');
    } else {
      showError();
    }
  });

  form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
};
