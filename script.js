'use strict';
let numberOfFilms = prompt('How many movies have you seen?','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstFilm = prompt('One of the last movie have you seen?', '');
let firstFilmRate = prompt('How do you rate it?', '');
let secondFilm = prompt('One of the last movie have you seen?', '');
let secondFilmRate = prompt('How do you rate it?', '');

personalMovieDB.movies[firstFilm] = firstFilmRate;
personalMovieDB.movies[secondFilm] = secondFilmRate;

console.log(personalMovieDB);



