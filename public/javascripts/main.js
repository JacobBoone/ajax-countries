 console.log('TEST');


var renderCountries = function(countries) {
  // First, clear out the list in case it already has content
  // $('.load-countries').empty();

  // Loop through all the countries and render a list item for them
  for (var i = 0; i < countries.length; i++) {
    $('.list-countries').append('<li class="countryList">' + 'Country:  ' + '<strong>'+ countries[i].name+'</strong>' + '  Region:  ' + '<strong>'+ countries[i].region +'</strong>'+'</li>');
  }
};


var renderSearch = function(search){
	// $('.item-search').empty();
	var searchValue = $('.item-search').val();
	
	$('.search-button').after(searchValue)

}


$(function () {

	 $('.load-countries').click(function(){
	 console.log('Click Load Countries');
	     // Make an ajax get request to pull down the list of countries
	    $.get('/countries', function(countries) {
	      // render the result
	      renderCountries(countries);
    	});

	}),

	 $('.search-button').click(function(){
	 console.log('Clicked Search');
	
	     console.log(searchValue);
	     // Make an ajax get request to pull down the list of countries
	    $.get('/search', function(search) {
	      
	 
	      // render the result
	      renderSearch(search);
    	});

	})









 });