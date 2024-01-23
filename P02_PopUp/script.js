const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const popUp = document.querySelector('.popup-background');

openBtn.addEventListener('click',() => {
    popUp.classList.add('blur');
    popUp.style.display = 'flex';
});

closeBtn.addEventListener('click',() => {
    popUp.classList.remove('blur');
    popUp.style.display = 'none';
});