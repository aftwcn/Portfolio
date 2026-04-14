const img = document.querySelector('.pfp');
const img1 = 'images/pfp.png'
const img2 = 'images/pfp2.gif'

img.addEventListener('click', () => {
    img.src = img2

});

img.addEventListener('mouseout', () => {
    img.src = img1
});

