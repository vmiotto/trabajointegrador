let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let id = querystringobj.get('id')
console.log(id)

let apikey = 'dc1e1c4430af5e9350e7183cbe31d039'
fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let generos = ''
    for (let i = 0 ; i < data.genres.length ; i ++){
        if (i == 0){
            generos += `<a href="detail-genre.html?id=${data.genres[i].id}">${data.genres[i].name}</a>`
        }
        else {
            generos += `, <a href="detail-genre.html?id=${data.genres[i].id}">${data.genres[i].name}</a>`
        }
        
    
    }

    let main = document.querySelector('main')
    main.innerHTML = `    <div class="peliculadetallada">
    <h1>${data.title}</h1>
    <button class="agregarafavoritos">Agregar a Favoritos</button>
    </div>


    <h2 class="h2calificacion"> puntuacion ${data.vote_average}</h2>
    <h2 class="h2fechadeestreno"> ${data.release_date}</h2>
    <h2 class="h2duracion"> ${data.runtime}min</h2>
    <h2 class="h2sinopsis">${data.overview}</h2>
    <h2 class="h2genero">Pelicula de ${generos}</h2>`



let divFoto = document.querySelector('.peliculadetallada')
console.log(divFoto)

divFoto.style.background = `linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url("https://image.tmdb.org/t/p/original${data.poster_path}")`
divFoto.style.backgroundSize = 'cover'
})
.catch(function(error){
    console.log(error)
})

