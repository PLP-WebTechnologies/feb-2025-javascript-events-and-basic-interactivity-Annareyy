//  Event Handling QUESTION
document.getElementById('mainBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseenter', () => {
  hoverText.style.color = 'green';
});
hoverText.addEventListener('mouseleave', () => {
  hoverText.style.color = '';
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

let timer;
const secret = document.getElementById('secretAction');
secret.addEventListener('dblclick', () => {
  alert('🎉 Secret double-click activated!');
});
secret.addEventListener('mousedown', () => {
  timer = setTimeout(() => {
    alert('⏳ Long press activated!');
  }, 1000);
});
secret.addEventListener('mouseup', () => clearTimeout(timer));

//  Interactive Elements QUESTION
document.getElementById('colorChanger').addEventListener('click', (e) => {
  e.target.style.backgroundColor = e.target.style.backgroundColor === 'orange' ? 'green' : 'orange';
});

const images = [
  'https://via.placeholder.com/200x120?text=Image+1',
  'https://via.placeholder.com/200x120?text=Image+2',
  'https://via.placeholder.com/200x120?text=Image+3'
];
let currentImg = 0;
document.getElementById('nextImg').addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById('gallery').src = images[currentImg];
});

document.querySelectorAll('.tabBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// 📋 Form Validation QUESTION
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

function validateEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

function validatePassword(passwordValue) {
  return passwordValue.length >= 8;
}

email.addEventListener('input', () => {
  feedback.textContent = validateEmail(email.value) ? '' : 'Invalid email format';
  feedback.style.color = 'red';
});

password.addEventListener('input', () => {
  feedback.textContent = validatePassword(password.value) ? '' : 'Password too short';
  feedback.style.color = 'red';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(email.value);
  const passwordValid = validatePassword(password.value);

  if (emailValid && passwordValid) {
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Please fix errors before submitting.';
    feedback.style.color = 'red';
  }
});

