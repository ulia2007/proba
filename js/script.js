const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Какой жанр фильма', ''),
      d = prompt('Что посоветуете похожее посмотреть', '');
personalMovieDB.movies[a] = b,
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
