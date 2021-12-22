'use strict'

if( 4 == 9){
    console.log('OK!');
} else{
    console.log('Error');
}

const num = 50;
if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('OK!');
}
const num = 50;
//тернарный оператор ?
(num === 50) ? console.log('OK!') :  console.log('Error');

const num = 50;
switch (num) {
    case 49: //кейс сравнивает точно значение
        console.log('Неверно');
        break; //обязательно ставить после каждого кейса
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:  //если ничего из кейсов не подошло пишет дефолт 
        console.log('Не в этот раз');
        break;
}
//-------Циклы---------
let num = 50;

 while( num <= 55) {
    console.log(num);
    num++;
} 

/* do {
    console.log(num);
    num++;
}
while (num <= 55); */
let num = 50;
for ( let i = 1; i<8; i++){
    console.log(num)
    num++;
}

for ( let i = 1; i<8; i++){ //начало цикла, когда он остановиться, шаг цикла
    if ( i === 6){
       // break; полностью прерывает цикл, когда переменная стала с заданным значением
       continue; //этот оператор пропускает заданное значение
    }
    console.log(i)
}


