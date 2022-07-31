export const setSnakeX = () => {
  const container = document.querySelector('.submit__complete');
  container.classList.add('shake-x');
  setTimeout(() => container.classList.remove('shake-x'), 1000);
};
