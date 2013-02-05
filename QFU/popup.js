// copyright - no one
// use as freely as you would like
// Author: Dhruv Goel

/* Initialization function which is executed when the DOM is loaded
   This is used to bind actions with the DOM elements
*/
var initialize = function() {
	$('#getQuoteButton').click(populateQuotes);
};

// function to update the labels next to stocks
var populateQuotes = function() {
	$('#stockList span').each(
		function(){
			var $span=$(this);
			var stockName = $span.children('input').val();
			var googleQuote = getGoogleFinanceQuote(stockName);
			$span.children('label').text(googleQuote);
		}
	)
};

// function to get the quote for a particular stock via Google
var getGoogleFinanceQuote = function(stockName) {
	return 123;
};


// Bind actions with elements when HTML is done loading
document.addEventListener('DOMContentLoaded', function () {
  	initialize();
});