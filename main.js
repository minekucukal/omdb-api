$(document).ready( function() {
    $('form').submit(function(event) {
        event.preventDefault();
      
        // Get The value from the form
        var search = $('#search').val();
        var movieURL = 'https://www.omdbapi.com/?apikey=63f944af&t='+search;
      
        function movies(data) {
        
          var movieHTML = '<ul>';
      
          console.log(data.Title);

        //$.find(".movie_title").append(data.Title);
        $('<img src="' + data.Poster+ '"</img>').appendTo('.movie_img');
        $('<p>' + data.Title+ '</p>').appendTo('.movie_title');
        $('<p>' + data.Genre+ '</p>').appendTo('.movie_text');
        
      
        }    
        $.getJSON(movieURL, movies);
      });
    });