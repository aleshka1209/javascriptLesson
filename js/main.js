"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели', 1);

        while(personalMovieDB.count == '' || personalMovieDB.coun == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели', 1);
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt('Один из просмотренных фильмов', 'Логан'),
                b = prompt('На сколько его оцените', 5);
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        }    
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольна мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >=30){
            console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (obj){
        if(!obj){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 2; i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if(genre === '' || genre === null){
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // }else{
            //     personalMovieDB.genres[i - 1] = genre; 
            // }

            let genres = prompt(`Введите ваши любимые ваши жанры чере запятую`).toLowerCase();
            if(genres === '' || genres === null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres = genres.split(', '); 
                personalMovieDB.genres.sort();
            }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i + 1} - это ${item}`);
        }); 
    }
};






