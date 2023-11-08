let apikey = 
fetch (`https://api.themoviedb.org/3/discover/movie${apikey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
