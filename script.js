const passwordField = document.getElementById('password');
const leftHand = document.querySelector('.hand.left');
const rightHand = document.querySelector('.hand.right');
const eyes = document.querySelectorAll('.eye');

passwordField.addEventListener('focus', () => {
    // Левая рука: поворачиваем на -90deg и добавляем наклон на -45deg
    leftHand.style.transform = 'rotate(-90deg) rotateZ(-60deg)';
    // Правая рука: поворачиваем на 90deg и добавляем наклон на 45deg
    rightHand.style.transform = 'rotate(90deg) rotateZ(60deg)';

    // Задержка перед исчезновением глаз
    setTimeout(() => {
        eyes.forEach(eye => eye.style.opacity = '0.2');
    }, 300); // Задержка 0.3 секунды
});

passwordField.addEventListener('blur', () => {
    // Возвращаем руки в исходное положение
    leftHand.style.transform = 'rotate(0deg) rotateZ(0deg)';
    rightHand.style.transform = 'rotate(0deg) rotateZ(0deg)';

    // Показываем глаза сразу
    eyes.forEach(eye => eye.style.opacity = '1');
});
