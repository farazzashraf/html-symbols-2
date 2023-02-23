const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const heading = document.querySelector('.heading');
const navDiv = document.querySelector('nav div');

function openMenuButton() {
    nav.style.width = '100%';
    nav.style.display = 'block';
    navDiv.style.display = 'block';
    // heading.style.display = 'none';

}

function closeMenuButton() {
    // nav.style.display = 'none';
    navDiv.style.display = 'none';
    nav.style.width = '0';
    // header.style.display = 'block';
    // menuBtn.style.display = 'flex';
    // heading.style.display = 'block';
}

menuBtn.addEventListener('click', openMenuButton);
closeBtn.addEventListener('click', closeMenuButton);
