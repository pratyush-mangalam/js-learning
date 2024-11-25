const form = document.querySelector('form');
// this will give me empty value
// const h = parseInt(document.querySelector('#hieght').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (h === '' || h < 0 || isNaN(h)) {
    result.innerHTML = `Please give a valid Height ${h}`;
  } else if (w === '' || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid Weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }
});
