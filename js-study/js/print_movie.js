function pnt_movie(name, year, genre) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    
    document.getElementById("myMovieTitle").innerHTML=this.name;
    document.getElementById("myMovie").innerHTML=
    "📅 "+ this.year+ '<br/>'+
    "🎨 "+ this.genre;
}
