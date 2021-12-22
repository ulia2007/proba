
let num = 40;

function showFirstMessage (text) {
    console.log(text);
    let num = 10;

    console.log(num)
}

showFirstMessage('Hello world');
console.log(num);

function calc (a, b){
    return (a+b);//если после ретурн что то напиасать, то этот код никогда не выполниться


}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret () {//это function declaration
    let num = 50;
    return num;
} // тут не надо ставить точку с сзапятой

const anotherNum = ret(); 
console.log(anotherNum); //вызвать можно до обьявления.


const logger = function() {//это function exptession
    console.log('Hello');
}; //тут надо ставить точку с запятой

logger(); //запустили функции.Вызвать можно после обьявления 

const calc = (a, b) => { 
    console.log('1');
    return a + b;
};

const cals = (a, b) => {a + b}; //стрелочная функция