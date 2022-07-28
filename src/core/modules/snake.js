export const setSnakeX = () => {
  const button = document.querySelector('.complete__button');

  button.addEventListener('click', () => {
    const container = document.querySelector('.submit__complete');
    container.classList.add('shake-x');
    setTimeout(() => container.classList.remove('shake-x'), 2000);
  });
};
