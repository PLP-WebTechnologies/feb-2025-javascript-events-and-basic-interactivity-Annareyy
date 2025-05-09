//Question 1 -Event Handling
// Button Click
document.getElementById('mainBtn').addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover Effects
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseenter', () => {
    hoverText.style.color = 'blue';
});
hoverText.addEventListener('mouseleave', () => {
    hoverText.style.color = '';
});

// Keypress Detection
document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Bonus: Double-click or Long Press
let timer;
const secret = document.getElementById('secretAction');

secret.addEventListener('dblclick', () => {
    alert('🎉 Secret double-click activated!');
});

secret.addEventListener('mousedown', () => {
    timer = setTimeout(() => {
        alert('⏳ Long press activated!');
    }, 1000); // 1 second hold
});
secret.addEventListener('mouseup', () => clearTimeout(timer));

//Question 2- Interactive elements
// Change Button Color
document.getElementById('colorChanger').addEventListener('click', (e) => {
    e.target.style.backgroundColor = e.target.style.backgroundColor === 'orange' ? 'green' : 'orange';
});

// Image Slideshow
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentImg = 0;

document.getElementById('nextImg').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('gallery').src = images[currentImg];
});

// Tabs
document.querySelectorAll('.tabBtn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tabContent').forEach(tab => tab.style.display = 'none');
        document.getElementById(button.dataset.tab).style.display = 'block';
    });
});

//Question 3- Form Validation
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];

    if (!email.value.includes('@')) {
        errors.push('Invalid email format.');
    }

    if (password.value.length < 8) {
        errors.push('Password must be at least 8 characters.');
    }

    feedback.textContent = errors.length ? errors.join(' ') : '✅ Form submitted successfully!';
    feedback.style.color = errors.length ? 'red' : 'green';
});

// Real-time Feedback
email.addEventListener('input', () => {
    if (!email.value.includes('@')) {
        feedback.textContent = '❌ Email should include @';
    } else {
        feedback.textContent = '';
    }
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        feedback.textContent = '❌ Password must be at least 8 characters';
    } else {
        feedback.textContent = '';
    }
});

//Question 4 -
