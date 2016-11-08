  
  var giphyPlural = ["test", "best", "west", "crest"];

  $('#giphyButton').on('click', function () {
       
        // This is defining the variable of the giphy code API
var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";
        // This is the jQuery runninng the GET method to pull the information from the API code
        $.ajax({url: queryURL, method: 'GET'})

            // this is telling it that when it is done to run this function
            .done(function(response) {

                // this is pulling the first data of the return data and storing it in a variable
                var imageUrl = response.data.image_original_url;

                // this is creating an image tag through jQuery
                var birdImage = $("<img>");
                
                // this is setting attributes of the source of the variable
                birdImage.attr('src', imageUrl);
                birdImage.attr('alt', 'birdImage image');

                //this is loadinng it before the last image 
                $('#images').prepend(birdImage);
            });
    });



function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#giphyView').empty();

		// Loops through the array of movies
		for (var i = 0; i < giphyPlural.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<img>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('giphy'); // Added a class 
		   
		    $('#giphyView').append(a); // Added the button to the HTML
		}
	}


$('#addGiphy').on('click', function(){

		// This line of code will grab the input from the textbox
		var giphy = $('#giphy-input').val().trim();

		// The movie from the textbox is then added to our array
		giphyPlural.push(giphy);
		console.log(giphyPlural)
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})



	

	// This calls the renderButtons() function
	renderButtons();