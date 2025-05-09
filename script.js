const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn')
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', ()=> {
    navMenu.classList.add('active');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});


closeBtn.addEventListener('click', ()=> {
    navMenu.classList.remove('active');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
});