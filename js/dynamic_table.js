
// Declare counter variable
	var counter = 0;

// Add contact function add new table rows
	function addContact() {
		
		//get input from user
		var inputName = document.getElementById('name').value;
		var inputEmail = document.getElementById('email').value;
		var inputPhone = document.getElementById('phone').value;
		
		//create new HTML row elements
		var contactRow = document.createElement('tr');
		
		var idRow = document.createElement('td');		
		var nameRow = document.createElement('td');	
		var emailRow = document.createElement('td');
		var phoneRow = document.createElement('td');
		var removeButtonRow = document.createElement('td');
		
		//set row value
		idRow.innerHTML = counter + 1;
				
		//set input values
		nameRow.innerHTML = inputName;
		emailRow.innerHTML = inputEmail;
		phoneRow.innerHTML = inputPhone;
		
		//set remove button
		removeButtonRow.innerHTML = '<button onclick="removeContact(this.parentNode.parentNode.rowIndex);">Delete</button>'
		
		//add table cells to the table row
		contactRow.appendChild(idRow);
		contactRow.appendChild(nameRow);
		contactRow.appendChild(emailRow);
		contactRow.appendChild(phoneRow);
		contactRow.appendChild(removeButtonRow);
		
		//add table row to table
		document.getElementById('contacts').appendChild(contactRow);
		
		//increment counter
		counter++;
		
	} //end addContact function

// Delete contact function removes existign table rows
	
	function removeContact(i) {
		document.getElementById('contacts').deleteRow(i);
	}
	