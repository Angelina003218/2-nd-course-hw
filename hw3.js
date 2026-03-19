//Задание1
let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
//Задание2
let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание3
let d = 120;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//Задание5
let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Осень');
    break;
  default:
    if (monthNumber > 12) {
      console.log('Номер месяца некорректен');
    }
}

//Дополнительные задания
//Задание1
let input = prompt('Пожалуйста, введите любое число');
let number = +input; 

if (isNaN(number)) {
    alert('Введенное значение не является числом');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}
//Задание2
let clienOS = 0; 

if (clienOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clienOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}
//Задание3
let clientOS = 0; 
let productionYear = 2014; 

if (clientOS === 0) {
    if (productionYear < 2015) {
        console.log('Установите облегчённую версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
} else if (clientOS === 1) {
    if (productionYear < 2015) {
        console.log('Установите облегчённую версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
}