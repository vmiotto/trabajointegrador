let apikey = 'dc1e1c4430af5e9350e7183cbe31d039'
let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let id= querystringobj.get('id')
console.log(id)
let tipo= querystringobj.get('tipo')
console.log(tipo)
let nombre=querystringobj.get("nombre")
let titulo = document.querySelector("#titulo")
titulo.innerHTML = "Este genero no existe"
let ul = document.querySelector(".movie-list")
if(tipo=="pelicula"){
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apikey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if(data.results.length>0){
            titulo.innerHTML = `Peliculas del genero "${nombre}"`
        }
        for(let i=0;i<data.results.length;i++){
            ul.innerHTML+=`<article class="series-item">
            <p class="titulos">${data.results[i].title}</p>
            <a href="detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].release_date}</p>
        </article>` 
        }
        }
    )
    .catch(function(error){
        console.log(error)
    })
    
}
if(tipo=="serie"){
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apikey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if(data.results.length>0){
            titulo.innerHTML = `Series del genero "${nombre}"`
        }
        for(let i=0;i<data.results.length;i++){
            ul.innerHTML += `<article class="movie-item">
            <p class="titulos"> ${data.results[i].name}</p>
            <a href="detail-serie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].first_air_date}</p>
            </article>`
        }
        }
    )
    .catch(function(error){
        console.log(error)
    })
    
}
