var topics = ["fox", "rabbit", "giraffe", "ram"];
$(document).ready()
for (i = 0; i < topics.length; i++) {
	$("#buttonsView").append("<button id='topics' class='.btn btn-success red'  data-search='" + topics[i] + "'>" + topics[i] + "</button>")
}

$('#btn3').on('click', function () {
	var searchItem = $("#searchBar").val().trim();

	if ($.trim($("#searchBar").val()) === "") {
		alert('you did not fill out one of the fields');
		return false;
	}

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchItem + "&api_key=dc6zaTOxFJmzC&limit=10";

	$("#buttonsView").append("<button id='topics' class='.btn btn-success red' data-search='" + searchItem + "'>" + searchItem + "</button>")
	$.ajax({ url: queryURL, method: 'GET' })

		.done(function (response) {
			var results = response.data;
			for (i = 0; i < results.length; i++) {
				var imageUrl = results[i].images.original.url;
				console.log(imageUrl)
				var randomImage = $("<img>");
				// console.log(imageUrl)
				randomImage.attr('src', imageUrl);
				randomImage.attr('alt', 'random image');
				$('#display').prepend(randomImage)
			}
		});

});

$('#buttonsView').on('click', '.red', function () {
	console.log("click")
	var animal = $(this).data('search');
	console.log(animal)
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";


	$.ajax({ url: queryURL, method: 'GET' })

		.done(function (response) {
			var results = response.data;
			for (i = 0; i < results.length; i++) {
				var imageUrl = results[i].images.original.url;
				var randomImage = $("<img>");
				randomImage.attr('src', imageUrl);
				randomImage.attr('alt', 'random image');
				$('#display').prepend(randomImage)
			}
		});

});
