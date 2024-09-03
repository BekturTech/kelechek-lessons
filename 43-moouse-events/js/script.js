// const btn = document.querySelector(".btn");

// btn.addEventListener("mousedown", handleEvent);

// function handleEvent(e) {
//   e.preventDefault();
//   console.log(e);
// }


// // Массив цветов
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

// // Функция для получения случайного цвета из массива
// function getRandomColor() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
// }

// // Функция для изменения цвета фона
// function changeBackgroundColor() {
//     const randomColor = getRandomColor();
//     document.body.style.backgroundColor = randomColor;
// }

// // Получаем кнопку по её надписи
// const randomButton = document.querySelector('.random-button');

// // Добавляем обработчик события клика
// randomButton.addEventListener('click', changeBackgroundColor);



let count = 7;
  const countDisplay = document.getElementById('count');
  const lowerCountBtn = document.getElementById('lowerCount');
  const addCountBtn = document.getElementById('addCount');

  function updateDisplay() {
      countDisplay.textContent = count;
  }

  function lowerCount(event) {
      if (event.type === 'click' || (event.type === 'mousedown' && event.button === 0)) {
          count = Math.max(0, count - 1);
          updateDisplay();
      }
  }

  function addCount(event) {
      if (event.type === 'click' || (event.type === 'mousedown' && event.button === 0)) {
          count++;
          updateDisplay();
      }
  }

  lowerCountBtn.addEventListener('click', lowerCount);
  lowerCountBtn.addEventListener('mousedown', lowerCount);
  addCountBtn.addEventListener('click', addCount);
  addCountBtn.addEventListener('mousedown', addCount);

  // Предотвращаем выделение текста при двойном клике
  document.addEventListener('mousedown', function(e) { 
      if (e.detail > 1) { 
          e.preventDefault(); 
      } 
  }, false);
  