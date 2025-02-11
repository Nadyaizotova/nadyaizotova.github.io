// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    // Проверяем, является ли ссылка якорной
    if (targetId && document.getElementById(targetId)) {
      e.preventDefault(); // Отменяем стандартное действие только для якорных ссылок
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Ожидаем, когда вся страница загрузится
document.addEventListener("DOMContentLoaded", function() {
  // Селекторы для изображений на страницах portfolio и book1
  const images = document.querySelectorAll('.portfolio-item img, .illustration-item img'); // Все изображения
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');
  
  let currentIndex = 0; // Индекс текущего изображения

  // Открытие модального окна при клике на изображение
  images.forEach((image, index) => {
    image.addEventListener('click', function(event) {
      event.preventDefault();  // Отменяем стандартное поведение (если это ссылка)
      modal.style.display = 'flex';  // Показываем модальное окно
      modalImage.src = image.src;   // Устанавливаем src картинки в модальном окне
      currentIndex = index;  // Сохраняем индекс выбранного изображения
    });
  });

  // Закрытие модального окна
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';  // Скрываем модальное окно
  });

  // Закрытие модального окна при клике вне изображения
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Переключение изображений с помощью стрелок на клавиатуре
  document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex') {
      if (event.key === 'ArrowLeft') {
        // Переключить на предыдущее изображение
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
      } else if (event.key === 'ArrowRight') {
        // Переключить на следующее изображение
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
      }
    }
  });
});




let lastScrollTop = 0; // Храним последнюю позицию прокрутки
const nav = document.querySelector('nav'); // Получаем панель навигации
const header = document.querySelector('header'); // Получаем header

// Отслеживаем событие прокрутки страницы
window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Если прокручиваем вниз
  if (currentScroll > lastScrollTop) {
    nav.style.opacity = '0'; // Скрыть панель навигации
    nav.style.visibility = 'hidden'; // Скрыть панель навигации
    header.style.opacity = '0'; // Скрыть header
    header.style.visibility = 'hidden'; // Скрыть header
  } else {
    nav.style.opacity = '1'; // Показать панель навигации
    nav.style.visibility = 'visible'; // Показать панель навигации
    header.style.opacity = '1'; // Показать header
    header.style.visibility = 'visible'; // Показать header
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Обновляем последнюю позицию прокрутки
});

// Добавляем обработчики событий для возврата элементов при наведении на верхнюю часть экрана
window.addEventListener('mousemove', function(event) {
  // Если мышь находится в верхней части экрана (например, в пределах 50px от верха)
  if (event.clientY <= 50) {
    nav.style.opacity = '1'; // Показать панель навигации
    nav.style.visibility = 'visible'; // Показать панель навигации
    header.style.opacity = '1'; // Показать header
    header.style.visibility = 'visible'; // Показать header
  }
});
