const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || isNaN(height) || height <= 0) {
    results.innerHTML = `Not valid ${height}`;
  }
  if (weight === '' || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Not valid ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`BMI is ${bmi}`
  }

});
