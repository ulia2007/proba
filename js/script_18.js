/* function first(){
    //Do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошол этот урок');
}

learnJS('JavaScript', done); */


function school(lang, callback){
    console.log(`Я учу ${lang}`),
    callback();   
}
function school1(lang1, callback){
    console.log(`Я учу ${lang1}`),
    callback();   
}

function dom(){
    console.log('Я учу css');
}
function dom1(){
    console.log('Я учу html');
}

school('js', dom);
school1('pyton', dom1);



/* learnJS('JavaScript', function(){ //function() - анонимная функция, она изчезнет
    console.log('Я прошол этот урок');
}); */

function aplle(sort, callback){
    console.log(`Это яблоко сорта ${sort}`),
    callback();
}
function sezon(){
    console.log('Спеет летом');
}

aplle('джонаголд', sezon);
//----------------------------
function vopros(){
    console.log('А где покупаете мясо?');
}
vopros();

function myso(vid, callback){
    console.log(`Сегодня покупаем ${vid}`),
    callback();
}

function bazar(){
    console.log('на троещинском');
}
myso('cвинину', bazar);