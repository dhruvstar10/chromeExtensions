// copyright - no one
// use as freely as you would like
// Author: Dhruv Goel

/* Initialization function which is executed when the DOM is loaded
   This is used to bind actions with the DOM elements
*/
var initialize = function() {
	$('#getQuoteButton').click(populateQuotes);
};

var populateQuotes = function() {
	var stockInputList = $("#stockList input");
	$(stockInputList).each(
      function() {
           alert($(this).val());
       }
	);
};

var getGoogleFinanceQuote = function(stockName) {
	return 123;
};


// Bind actions with elements when HTML is done loading
document.addEventListener('DOMContentLoaded', function () {
  	initialize();
});