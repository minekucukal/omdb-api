$(document).ready(function () {
  var movieResults;

  function movieList(results) {
    var newMovie = $("body").find("#movies");
    $.each(results, function (i) {
      var x = 
      '<div class="movie col"><div class=""><div id="movie-image"><img src="' + results[i].Poster + 
      '" id="image" class="image"></div><div class="informations"><span id="title" class="title">'+ results[i].Title +'</span></div></div></div>';
      newMovie.append(x);
    });
  }

  function removeStorage(){
    localStorage.removeItem('movieResults');
    $('#movies').empty();

  }

  $('#remove').click(function() {
    removeStorage();
  });

  if (localStorage.getItem('movieResults') != null) {
    movieResults = JSON.parse(localStorage.getItem('movieResults'));
    movieList(movieResults);
  }
  $('form').submit(function (event) {
    event.preventDefault();

    // Get The value from the form
    var search = $('#search').val();
    var movieURL = 'https://www.omdbapi.com/?apikey=63f944af&s=' + search;

    function movies(data) {
        movieResults = data.Search;
        movieList(movieResults);
        localStorage.setItem('movieResults', JSON.stringify(movieResults));
    }
    $.getJSON(movieURL, movies);

  });
});