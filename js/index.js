let apikey = dc1e1c4430af5e9350e7183cbe31d039
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
