
function calculate() {
	// get input from user
	//assign value to var using call to DOM	using chaining
	var listPrice = document.getElementById('list_price').valueAsNumber;										//declare variable

	var customerType = document.getElementById('type').value;
	
	//repeat the above for the discout percent
	//removed as we will now calculate discount rather than grab user input
	//var discountPercent = document.getElementById('discount_percent').valueAsNumber;

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

	// set output in currency format (sort of)
	document.getElementById('discount_percent').valueAsNumber = discountPercent;
	
	discount = discount.toFixed(2);						//set var to string with 2 decimal place format
	discount = '$' + discount;							//concatenate the dollar sign to the var
	var tempVar;											//declare var for output
	tempVar = document.getElementById('discount');			//grab the discount element and bind to var
	tempVar.value = discount;								//assign value to output variable
	
	discountPrice = '$' + discountPrice.toFixed(2);
	document.getElementById('discount_price').value = discountPrice;
	
} //end calculate