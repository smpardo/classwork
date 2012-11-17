
function calculate() {
	// get input from user
	//assign value to var using call to DOM	using chaining
	var $list_price = document.getElementById('list_price').valueAsNumber;										//declare variable

	//repeat the above for the discout percent
	var $discount_percent = document.getElementById('discount_percent').valueAsNumber;

	// calculate discount amount and discount price
	var $discount = $list_price * ($discount_percent * 0.01);
	
	var $discount_price = $list_price - $discount;
	
	// set output in currency format (sort of)
	$discount = $discount.toFixed(2);						//set var to string with 2 decimal place format
	$discount = '$' + $discount;							//concatenate the dollar sign to the var
	var tempVar;											//declare var for output
	tempVar = document.getElementById('discount');			//grab the discount element and bind to var
	tempVar.value = $discount;								//assign value to output variable
	
	$discount_price = '$' + $discount_price.toFixed(2);
	document.getElementById('discount_price').value = $discount_price;
	
} //end calculate