export const setSelectItem = () => {
  window.addEventListener('load', () => {
    let nationality = document.querySelectorAll('.n-name__value');
    nationality.forEach((el) => {
      if (el.value == 'American') {
        el.setAttribute('selected', 'selected');
      }
    });

    let dates = document.querySelectorAll('.d-name__value');
    dates.forEach((el) => {
      if (el.value == '21') {
        el.setAttribute('selected', 'selected');
      }
    });

    let months = document.querySelectorAll('.m-name__value');
    months.forEach((el) => {
      if (el.value == 'December') {
        el.setAttribute('selected', 'selected');
      }
    });

    let years = document.querySelectorAll('.y-name__value');
    years.forEach((el) => {
      if (el.value == '1995') {
        el.setAttribute('selected', 'selected');
      }
    });
  });
};
