
//create helper function
var $ = function (id) {
	return document.getElementById(id);
}

function calculate() {
	// get input from user
	//assign value to var using call to DOM	using helper function
	var listPrice = $('list_price').valueAsNumber;										
	var customerType = $('type').value;
	
	
	//repeat the above for the discout percent
	//removed as we will now calculate discount rather than grab user input
	//var discountPercent = document.getElementById('discount_percent').valueAsNumber;

	// call calculate discount percent function
	var discountPercent = discPercCalc(listPrice, customerType);
	
	// call calculate discount amount function
	var discount = discAmountCalc(listPrice, discountPercent);
	
	// call calculate discount price function
	var discountPrice = discPriceCalc(listPrice, discount);	

/*	
 	//calculate discount percentage
	if (customerType == 'R') {
		if (listPrice < 100){
			discountPercent = 0;
		}else if (listPrice >= 100 && listPrice < 250) {
				discountPercent = 10;
		}	else if (listPrice >= 250) { 
				discountPercent = 25;			
		}
	} else if (customerType == 'C') {
		if (listPrice < 250){
			discountPercent = 20;
		}else {
			discountPercent = 30;
		}	
	}

	// calculate discount amount and discount price
	var discount = listPrice * (discountPercent * 0.01);
	var discountPrice = listPrice - discount;	
*/	
	// set output in currency format (sort of)
	$('discount_percent').valueAsNumber = discountPercent;
	discount = discount.toFixed(2);						//set var to string with 2 decimal place format
	discount = '$' + discount;							//concatenate the dollar sign to the var

	$('discount').value = discount;							//grab the discount element and bind to var
	
	discountPrice = '$' + discountPrice.toFixed(2);
	
	$('discount_price').value = discountPrice;

} //end calculate


// calculate discount percent function
	function discPercCalc(listPrice, customerType) {
	 
		var discPercent;
		
		if (customerType == 'R') {
			if (listPrice < 100){
				discPercent = 0;
			}else if (listPrice >= 100 && listPrice < 250) {
					discPercent = 10;
			}	else if (listPrice >= 250) { 
					discPercent = 25;			
			}
		} else if (customerType == 'C') {
			if (listPrice < 250){
				discPercent = 20;
			}else {
				discPercent = 30;
			}	
		}
		discPercent = parseFloat(discPercent);
		return discPercent;
	}
// calculate discount amount function
	function discAmountCalc(listPrice, discountPercent) {
		var discAmount = listPrice * (discountPercent * 0.01);
		return discAmount;			
	}
// calculate discount price function
	function discPriceCalc(listPrice, discount) {
		var discPrice = listPrice - discount;
		return discPrice;
	}
