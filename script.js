
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 500);
    }
}
window.addEventListener("load", hidePreloader);
setTimeout(hidePreloader, 3000); 


const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');
const darkIcon = document.getElementById('dark-icon');
if (darkToggle && html && darkIcon) {
    darkToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            darkIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.theme = 'light';
        } else {
            html.classList.add('dark');
            darkIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.theme = 'dark';
        }
    });
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        darkIcon.classList.replace('fa-moon', 'fa-sun');
    }
}


window.onscroll = function () {
    const header = document.querySelector('header');
    const toTop = document.querySelector('#to-top');
    if (header && toTop) {
        if (window.pageYOffset > header.offsetTop) {
            header.classList.add('navbar-fixed');
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        } else {
            header.classList.remove('navbar-fixed');
            toTop.classList.remove('flex');
            toTop.classList.add('hidden');
        }
    }
};


const words = ["Mahasiswa IT", "Web Developer", "Content Creator", "Gamer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}
typeEffect();

const target = document.getElementById('target');
const container = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveTarget() {
    const maxX = container.clientWidth - target.clientWidth;
    const maxY = container.clientHeight - target.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    moveTarget();
    const colors = ['#0ea5e9', '#ec4899', '#22c55e', '#f59e0b', '#8b5cf6'];
    target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

function startGame() {
    score = 0;
    scoreDisplay.innerText = score;
    moveTarget();
    alert("Game Dimulai! Tangkap icon yang muncul di dalam kotak!");
}