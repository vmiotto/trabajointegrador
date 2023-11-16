let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let busqueda= querystringobj.get('busqueda')
console.log(busqueda)
let tipo= querystringobj.get('tipo')

console.log(tipo)
let titulo = document.querySelector(".h1busqueda")
titulo.innerHTML = "No se encontraron resultados de busqueda"
let apikey = 'dc1e1c4430af5e9350e7183cbe31d039'
let ul = document.querySelector(".movie-list")
if(tipo=="multi"){
    fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if(data.results.length>0){
            titulo.innerHTML = ` Resultados de series y peliculas que contienen "${busqueda}"`
        }
        for(let i=0;i<data.results.length;i++){
            if(data.results[i].media_type=="tv"){
                ul.innerHTML += `<article class="movie-item">
            <p class="titulos"> ${data.results[i].name}</p>
            <a href="detail-serie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].first_air_date}</p>
            </article>`
            }
            else if(data.results[i].media_type=="movie"){
                ul.innerHTML+=`<article class="series-item">
            <p class="titulos">${data.results[i].title}</p>
            <a href="detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].release_date}</p>
        </article>` 

            }
        }

    })
    .catch(function(error){
        console.log(error)
    })
}
else if(tipo=="peliculas"){
    
    fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if(data.results.length>0){
            titulo.innerHTML = ` Resultados de peliculas que contienen "${busqueda}"`
        }
        for(let i=0;i<data.results.length;i++){
            ul.innerHTML+=`<article class="series-item">
            <p class="titulos">${data.results[i].title}</p>
            <a href="detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].release_date}</p>
        </article>` 
        }

    })
    .catch(function(error){
        console.log(error)
    })
}
else if(tipo=="series"){

    fetch (`https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if(data.results.length>0){
            titulo.innerHTML = ` Resultados de series que contienen "${busqueda}"`
        }
        for(let i=0;i<data.results.length;i++){
            ul.innerHTML += `<article class="movie-item">
            <p class="titulos"> ${data.results[i].name}</p>
            <a href="detail-serie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" alt=""></a>
            <p>${data.results[i].first_air_date}</p>
            </article>`
        }

    })
    .catch(function(error){
        console.log(error)
    })
}
else{

}

//https://api.themoviedb.org/3/search/multi
//https://api.themoviedb.org/3/search/tv
//`https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`
