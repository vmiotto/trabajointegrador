let ulPeliculas=document.querySelector("#generos-peliculas")
let ulSeries=document.querySelector("#generos-series")
let apikey = 'dc1e1c4430af5e9350e7183cbe31d039'
fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`)
.then(function(response){
    return response.json()
  
})
.then(function(data){
    console.log(data)
    for(let i=0;i<data.genres.length;i++){
        ulPeliculas.innerHTML +=` <article class="genero-item">
        <h2><a href="detail-genre.html?id=${data.genres[i].id}&tipo=pelicula&nombre=${data.genres[i].name}">${data.genres[i].name}</a></h2>
    </article>`
    }
   
})

.catch(function(error){
    console.log(error)
})
fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`)
.then(function(response){
    return response.json()
  
})
.then(function(data){
    console.log(data)
    for(let i=0;i<data.genres.length;i++){
        ulSeries.innerHTML +=` <article class="genero-item">
        <h2><a href="detail-genre.html?id=${data.genres[i].id}&tipo=serie&nombre=${data.genres[i].name}">${data.genres[i].name}</a></h2>
    </article>`
    }
   
})

.catch(function(error){
    console.log(error)
})