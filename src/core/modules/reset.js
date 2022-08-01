export const resetPassword = () => {
  const passwordInput = document.querySelector('.box__p-name');
  const confirmPasswordInput = document.querySelector('.box__c-name');

  const confirmPasswordError = document.querySelector('.box__c-line');

  const message = document.querySelector('.message__text');

  passwordInput.addEventListener('click', (e) => {
    e.currentTarget.value = '';
    confirmPasswordInput.value = '';
    confirmPasswordError.classList.remove('line-error');
    message.classList.add('message-error');
  });

  confirmPasswordInput.addEventListener('click', (e) => {
    e.currentTarget.value = '';
    message.classList.add('message-error');
  });
};
