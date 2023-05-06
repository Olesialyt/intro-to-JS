// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:

//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.

const changeToBlue = () => {
  document.body.style.backgroundColor = "blue";
};
const changeToPink = () => {
  document.body.style.backgroundColor = "pink";
};

const changeToYellow = color => {
  document.body.style.backgroundColor = color;
};
