const passwordField = document.getElementById('password');
const leftHand = document.querySelector('.hand.left');
const rightHand = document.querySelector('.hand.right');

passwordField.addEventListener('focus', () => {
    leftHand.style.transform = 'rotate(-45deg)';
    rightHand.style.transform = 'rotate(45deg)';
});

passwordField.addEventListener('blur', () => {
    leftHand.style.transform = 'rotate(0deg)';
    rightHand.style.transform = 'rotate(0deg)';
});
