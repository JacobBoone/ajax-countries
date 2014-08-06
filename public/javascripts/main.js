 console.log('TEST');


var renderCountries = function(countries) {
  // First, clear out the list in case it already has content
  $('.load-countries').empty();

  // Loop through all the countries and render a list item for them
  for (var i = 0; i < countries.length; i++) {
    $('.load-countries').after('<li class="countryList">' + 'Country:  ' + '<strong>'+ countries[i].name+'</strong>' + '  Region:  ' + '<strong>'+ countries[i].region +'</strong>'+'</li>');
  }
}

$(function () {

	 $('.load-countries').click(function(){
	 console.log('Click Load Countries');
	     // Make an ajax get request to pull down the list of countries
	    $.get('/countries', function(countries) {
	      // render the result
	      renderCountries(countries);
    });

	 })









 });