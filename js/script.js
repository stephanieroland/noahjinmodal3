$(document).ready(function() {

	$('.btn').click(function() {
		$('#order_modal').modal('show');
	});
	$('.btn-checkout').click(function() {
		$('#confirm_checkout_modal').css('display', 'table');
	});
	var confirm_checkout = 0;
	$('#confirm_checkout_modal .btn-result').click(function() {
		confirm_checkout = $(this).data('result');
	});
    $('#confirm_checkout_modal').on('hidden.bs.modal', function () {
		if (confirm_checkout != 0) {
			$('#order_modal').modal('hide');
			$('#order_modal .tab-pane.fade').removeClass('active').removeClass('in');
	    	$('#order_modal .tab-content .tab-pane:first-child').addClass('active').addClass('in');
	    	$('.nav.nav-pills > li').removeClass('active');
	    	$('.nav.nav-pills > li:first-child').addClass('active');
	    	$('#order_modal .form-control').val('');
	    	$('.modal #form-wizard .form-body .modal-container').removeClass('full-height');
		} else {
			$('body').addClass('modal-open');
		}
    });

	$('.one-time').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

	// var form = $('#submit_form');
	// form.validate({
	// 	doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
 //        errorElement: 'span', //default input error message container
 //        errorClass: 'help-block help-block-error', // default input error message class
 //        focusInvalid: false // do not focus the last invalid input
	// });
	$('#form-wizard').bootstrapWizard({
		'nextSelector': '.button-next',
        'previousSelector': '.button-previous',
        onTabClick: function (tab, navigation, index, clickedIndex) {
		   
		    /*
		    success.hide();
		    error.hide();
		    if (form.valid() == false) {
		        return false;
		    }
		    handleTitle(tab, navigation, clickedIndex);
		    */
		},
		onNext: function (tab, navigation, index) {
		    // if (form.valid() == false) {
		    //     return false;
		    // }
		    	console.log('alert');
		    if (index == (2 - 1)) {
		    	setTimeout(function() {
			    	$('.modal #form-wizard .form-body .modal-container').addClass('full-height');
			    	$('.modal #form-wizard .form-body .modal-container .tab-content').addClass('full-height');
			    	$('.modal #form-wizard .modal-container .tab-content').addClass('full-height');
			    	$('.modal #form-wizard .modal-header').hide();
		    	}, 300);
		    }

		},
		onPrevious: function (tab, navigation, index) {
			
		},
		onTabShow: function (tab, navigation, index) {
		    
		}
	});

	$('.modal .form-group .form-control').on('keyup', function() {
		if ($(this).val()) {
			$(this).closest('div').find('.form-alert').css('opacity', 1);
		} else {
			$(this).closest('div').find('.form-alert').css('opacity', 0);
		}
	});
	$('.spinner_input').spinner();


	$('.question_select_item').click(function() {
		$(this).toggleClass('active');
	});
	
});
