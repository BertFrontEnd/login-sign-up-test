export const resetPassword = () => {
  const passwordInput = document.querySelector('.box__p-name');
  const confirmPasswordInput = document.querySelector('.box__c-name');

  passwordInput.addEventListener('click', (e) => {
    e.currentTarget.value = '';
    confirmPasswordInput.value = '';
  });

  confirmPasswordInput.addEventListener('click', (e) => {
    e.currentTarget.value = '';
  });
};
