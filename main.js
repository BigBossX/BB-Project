import checkGender from './components/calculate.js';
import eventListen from './components/event.js';

const gender = document.getElementById('gender').value;
const tinggi = document.getElementById('tinggi');
const btn = document.querySelector('.btn');
const body = document.body;

const checked = checkGender;
const valueTinggi = tinggi.value;

tinggi.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') btn.click();
});

btn.addEventListener('click', () => {
  if (body.lastChild.className === 'hasil') {
    body.removeChild(body.lastChild);
  }
  body.appendChild(eventListen(checked(gender, valueTinggi)));
});
