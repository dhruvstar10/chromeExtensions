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
	var stockInputList = $("#stockList input");
	$(stockInputList).each(
        function() {
        	var googleQuote = getGoogleFinanceQuote($(this.val()));
        }
	);
};

// function to get the quote for a particular stock via Google
var getGoogleFinanceQuote = function(stockName) {
	return 123;
};


// Bind actions with elements when HTML is done loading
document.addEventListener('DOMContentLoaded', function () {
  	initialize();
});