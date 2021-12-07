"use strict";

console.log('arr' + '- object');
console.log(4 + '- object');
console.log(8 + +'6');

let incr = 10,
    decr = 10;

/* incr++;     //инкремент декремент увеличивает число или уменьшает
decr--; */
console.log(incr); //если тут написать инкремент декремент после переменной ничего не произойдет
console.log(decr);

console.log(5%2); // % - показывает остаток от деления, в 5 помещаеться 2 двойки, остаток 1
console.log(2*4 == 8); // == сравнивает данные лево и право, булевые,3git init знака равно это строгое сравнение по типу данных

const isChecked = true,
      isClose = true;
console.log(isChecked && isClose); //&& - сравнивает переменные, оператор и
console.log(isChecked || isClose); // || - оператор или, одно из условий тру, то возвращаеться правда