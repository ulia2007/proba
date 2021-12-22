let numberOfFilms; 
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while(numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
} //тут проверяет чтоб пользователь ввел правильно данные

start();//вызвали функцию с проверкой ввода данных. функция не сработает если ее не вызывать в конце

 const personalMovieDB = { //создали обьект со свойствами
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for ( let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотреных фильмов?', ''),
              b = prompt('На сколько оцените его', '');
    
        if (a !=null && b != null && a !='' && b !='' && a.length < 50){
            //(!=) не пустая строка и(&&) второй ответ не пустая строка и длинна строки(a.length) с переменной ф не боьлше 50 символов
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--; //вернет цикл на 1 повторение назад
        }
        
        
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log ('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log ('Вы киноман'); 
    } else {
        console.log ('Произошла ошибка');
    }
}

detectPersonalLevel();


function ShowMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
ShowMyDB(personalMovieDB.privat);

console.log(personalMovieDB); 

function writeYourGenres(){
    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();