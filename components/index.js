import checkGender from './calculate.js';
import eventListen from './event.js';

const gender = document.getElementById('gender');
const tinggi = document.getElementById('tinggi');
const btn = document.querySelector('.btn');
const body = document.body;

const checked = checkGender;

tinggi.addEventListener('keyup', e => {
  if (e.key === 'Enter') btn.click();
});

btn.addEventListener('click', () => {
  const valueTinggi = tinggi.value;
  const valueGender = gender.value;
  if (body.lastChild.className === 'hasil') {
    body.removeChild(body.lastChild);
  }
  body.appendChild(eventListen(checked(valueGender, valueTinggi)));
});
