$(document).ready(function() {
	
	//alert('Hello'); 
	
	$( function(){
		$("#accordion").accordion();
	});
	
	
	$('#person_info_con').accordion({
		disabled: true,
		
	});
	$('#work_exp').accordion({
		disabled: true,
		
	});
	$('#education_exp').accordion({
		disabled: true,
		
	});
	$('#skills').accordion({
		disabled: true,
		
	});
	$('#certs').accordion({
		disabled: true,
		
	});
	$('#questions').accordion({
		disabled: true,
		
	});


//Actually sets up validation rules in a function	
	$('#section_1').validate({
		rules: {
			first_name: 'required',
			middle_name: 'required',
	
			phone: {	
				required: true,
				digits: true,	
			},      	
	
		},
		
		messages: {
			first_name: 'How about a name?',
			middle_name: 'Error!',
			
			phone: {
				required: 'You Must.',
				digits: 'Nums Only!',
			},
		
		},	
		errorClass: 'wrong_answer',
		validClass: 'right_answer',
	});
	
	
//Actually runs the validation
	
$('#submit_1').click(function() { 
	
	if ( $('#section_1').valid() == true ) {
		
		$('#accordion').accordion({
			active: 1,
		});		
	}
});





	
// Dont touch this	
	
});