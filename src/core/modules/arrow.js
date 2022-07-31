export const arrowRotate = () => {
  const arrows = document.querySelectorAll('.arrow');
  const nationalityArea = document.querySelector('.box__n-name');
  const dayArea = document.querySelector('.select__d-name');
  const monthArea = document.querySelector('.select__m-name');
  const yearArea = document.querySelector('.select__y-name');
  const selectArray = [nationalityArea, dayArea, monthArea, yearArea];

  for (let area of selectArray) {
    area.addEventListener('click', (e) => {
      e.stopPropagation();

      area.nextElementSibling.classList.toggle('arrow-active');
    });
  }

  document.querySelector('body').addEventListener('click', () => {
    for (let arrow of arrows) {
      if (arrow.classList.contains('arrow-active')) {
        arrow.classList.remove('arrow-active');
      }
    }
  });
};
