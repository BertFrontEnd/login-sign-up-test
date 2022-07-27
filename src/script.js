window.addEventListener('load', () => {
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

/**
 * 3. Write the function to sum added arguments by chain of calls
 * @param {Number} a Number to add
 * @example sum(5)(3)()   // 8
 */
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(6)(8)());
