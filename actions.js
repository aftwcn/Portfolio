const img = document.querySelector('.pfp');
const img1 = 'pfp.png'
const img2 = 'pfp2.gif'

img.addEventListener('mouseover', () => {
    img.src = img2 + "?t=" + Date.now();

});

img.addEventListener('mouseout', () => {
    img.src = img1 + "?t=" + Date.now();
});

