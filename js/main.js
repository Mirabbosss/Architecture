const changeImg = document.querySelectorAll('.wrapper-different-houses .wrapper-different-houses-item');
const introSection = document.getElementById('intro');

changeImg.forEach(item => {
    item.addEventListener('click', () => {
        changeImg.forEach(item => item.classList.remove('active-house'));

        const newImg = item.getAttribute('data-bg');
        introSection.style.backgroundImage = `url('${newImg}')`;
        item.classList.add('active-house');
    });
})