const sliderContainer = document.getElementById('sliderContainer');
const sliderDots = document.getElementById('sliderDots');

// Создадим массив всех изображений
const imgArr = ['./img/Mask_1.png', './img/Mask_2.png', './img/Mask_3.png', './img/Mask_4.png', './img/Mask_5.png'];
// Создаем текущий индекс
let currentIndex = 0;

// Функция для проверки ширины экрана и изменения содержимого слайдера
function checkScreenWidth() {
    if (window.innerWidth <= 768) {
        // На мобильных устройствах показываем только одну фотографию
        sliderContainer.innerHTML = `<img src="${imgArr[currentIndex]}" alt="" class="slider__image fade" id="sliderImage" style="max-width: 100%; height: auto; margin: 0 auto;" />`;
        sliderDots.innerHTML = ''; // Очищаем точки, так как на мобильных они не нужны
    } else {
        // На больших экранах показываем две фотографии
        sliderContainer.innerHTML = `
            <img src="${imgArr[currentIndex]}" alt="" class="slider__image fade" id="sliderImage1" />
            <img src="${imgArr[(currentIndex + 1) % imgArr.length]}" alt="" class="slider__image fade" id="sliderImage2" />
        `;
        // Добавляем точки
        sliderDots.innerHTML = `
            <span class="slider__dot ${currentIndex === 0 ? 'activ' : ''}" onclick="changeIndex(0)"></span>
            <span class="slider__dot ${currentIndex === 1 ? 'activ' : ''}" onclick="changeIndex(1)"></span>
            <span class="slider__dot ${currentIndex === 2 ? 'activ' : ''}" onclick="changeIndex(2)"></span>
            <span class="slider__dot ${currentIndex === 3 ? 'activ' : ''}" onclick="changeIndex(3)"></span>
        `;
    }
}

// Проверяем ширину экрана при загрузке страницы
window.addEventListener('load', checkScreenWidth);

// Проверяем ширину экрана при изменении размера окна
window.addEventListener('resize', checkScreenWidth);

// Функция смены индекса у dots
function changeIndex(ind) {
    // Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    checkScreenWidth();
}

function nextIndex(direction) {
    currentIndex += direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (currentIndex >= imgArr.length) {
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex < 0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    checkScreenWidth();
}