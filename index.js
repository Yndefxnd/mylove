document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.querySelector('.envelope');
    const textElement = document.querySelector('.letter .text');
    const letter = document.querySelector('.letter')
    const text = textElement.textContent;
    textElement.textContent = ''; // Очищаем текст
    const audio = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playButton');
    const img = document.querySelector('.letter img');
    img.style.opacity = 0; // Скрываем картинку изначально

    // Анимация открытия конверта
    setTimeout(function() {
        envelope.style.clipPath = 'polygon(0 0, 100% 0, 50% 80%, 0 0)';  // Закрываем конверт
        setTimeout(function() {
            envelope.style.transition = 'clip-path 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)'; // Добавляем переход
            envelope.style.clipPath = 'polygon(0 0, 100% 0, 50% 0, 0 0)';  // Открываем конверт
            // Запуск анимации печатающегося текста
            setTimeout(function() {
                typeWriter(textElement, text, 0); // Запускаем функцию печати
            }, 800); // Задержка после открытия конверта
        }, 500);
    }, 500);

    // Функция печатающегося текста
    function typeWriter(element, text, i) {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1); // Accumulate text
            setTimeout(function() {
                typeWriter(element, text, i + 1);
            }, 30); // Скорость печати (меньше число - быстрее)
        } else {
            // После завершения печати запускаем анимацию картинки
            img.style.opacity = 1; // Показываем картинку
            img.style.animationPlayState = 'running';
        }
    }
});

