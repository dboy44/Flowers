/* START deploy ddot js only on 45/55 dev */
console.log('start ddot.js');

if (location.href.match(/ww55/)){

	console.log('ddot on ww55');

		/* START remove inline cart pop-up & redirect to cart page */

		if (location.href.match(/miniShopCartDisplayInd=Y/))   {
			    $('body').css('display','none');  /*hide all and change it */
			    $('#inlineCart').css('opacity','0');	
				$('#inlineCart').css('display','none');	
				var goCart = $('#miniCartTotals').attr('href');				
				window.location = goCart;
			}

		/* END remove inline cart pop-up && redirect to cart page */

			/* change 'Contact Information' to 'Your Contact Information' on BP */
		
		 if ($('.BP-ContactBoxArea .BP-BillingHdr').length) {			
				$('.BP-ContactBoxArea .BP-BillingHdr').html('Your Contact Information');			
				console.log('swap Contact Information done');
			}	

		/*line up delivery notes with dropdown */

		if ($("#addressTypeSelection")[0])     {
		var addr_ypos = $('select#addressTypeSelection').offset().top;
		addr_ypos = addr_ypos - 105; /*y-offset compensate  */
		console.log(addr_ypos);
		$('#BP-ShippingDeliveryNotes').css({top:addr_ypos});
		console.log('delivery notes in position');
	}
}


/* END deploy ddot js only on ww45 or dev */

$('body').css('display','block'); 	/*show changed content */

console.log('end ddot.js')