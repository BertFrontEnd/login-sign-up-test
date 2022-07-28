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

const array = [
  'British',
  'Scottish',
  'Irish',
  'Welsh',
  'Danish',
  'Finnish',
  'Norwegian',
  'Swedish',
  'Swiss',
  'Estonian',
  'Latvian',
  'Lithuanian',
  'Austrian',
  'Belgian',
  'French',
  'German',
  'Italian',
  'Dutch',
  'American',
  'Canadian',
  'Mexican',
  'Ukrainian',
  'Russian',
  'Belarusian',
  'Polish',
  'Czech',
  'Slovak/Slovakian',
  'Hungarian',
  'Romanian',
  'Bulgarian',
  'Greek',
  'Spanish',
];

console.log(array);
const nationalityArray = array.sort();
console.log(nationalityArray);
console.log('object');
