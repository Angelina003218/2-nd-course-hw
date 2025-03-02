
//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание2
let year = 2007;
alert(year);

//Задание3
let creator = 'Брендан Эйх';
alert(creator);

//Задание4
let a1 = 10;
let b1 = 2;
alert(a1 + b1); // Сумма
alert(a1 - b1); // Разность
alert(a1 * b1); // Произведение
alert(a1 / b1); // Частное

//Задание5
let result = 2 ** 5;
alert(result); // Результат будет равен 32.

//Задание6
let a2 = 9;
let b2 = 2;
alert(a2 % b2); // Результат будет равен 1.

//Задание7
let num = 1;
num += 5; // эквивалентно num = num + 5
num -= 3; // эквивалентно num = num - 3
num *= 7; // эквивалентно num = num * 7
num /= 3; // эквивалентно num = num / 3
++num; // эквивалентно num = num + 1
--num; // эквивалентно num = num - 1
alert(num);

//Задание8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание9
let user = {
name: 'Ангелина',
age: 25,
isAdmin: true};
alert(user.name); // Выводим имя пользователя
alert(user.age); // Выводим возраст пользователя
alert(user.isAdmin); // Выводим статус администратора

//Задание10
let userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "!");

//Доп.задание
let number = prompt("Загадайте любое число");

// Удвоение числа
let doubledNumber = 2 * number;
alert(doubledNumber);

// Прибавление 10 к удвоенному числу
let addedNumber = doubledNumber + 10;
alert(addedNumber);

// Деление на 2
let dividedNumber = addedNumber / 2;
alert(dividedNumber);

// Вычитание первоначального числа
let subtractedNumber = dividedNumber - number;
alert(subtractedNumber);

// Вывод ответа
alert("Ответ равен 5");