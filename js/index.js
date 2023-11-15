let apikey = 'dc1e1c4430af5e9350e7183cbe31d039'
fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    ul = document.querySelector('#popular-movies')
    console.log(ul)
    for (let i = 0; i < 5 ; i ++){
        ul.innerHTML += `                <article class="movie-item">
        <p class="titulos"> ${data.results[i].title}</p>
        <a href="detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
        <p>${data.results[i].release_date}</p>
        </article>`
    }


})
.catch(function(error){
    console.log(error)
})

fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    ul = document.querySelector('#popular-series')
    console.log(ul)
    for (let i = 0; i < 5 ; i ++){
        ul.innerHTML += `                <article class="movie-item">
        <p class="titulos"> ${data.results[i].name}</p>
        <a href="detail-serie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
        <p>${data.results[i].first_air_date}</p>
        </article>`
    }


})
.catch(function(error){
    console.log(error)
})
fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    ul = document.querySelector('#serie-rated')
    console.log(ul)
    for (let i = 0; i < 5 ; i ++){
        ul.innerHTML += `                <article class="movie-item">
        <p class="titulos"> ${data.results[i].name}</p>
        <a href="detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
        <p>${data.results[i].first_air_date}</p>
        </article>`
    }


})
.catch(function(error){
    console.log(error)
})
