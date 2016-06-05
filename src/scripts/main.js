$(document).ready(function(){
	/*
	* Process data for user info widget
	*/
	$.each(dummy.user, function(key, value){
		if(key === "avatar" || key == "userImg"){
			$("." + key + " img").attr("src", value);
		} else if(key === "viewLink" || key === "commentLink" || key === "likeLink"){
			$("." + key).attr("href", value);
		} else {
			if($("." + key).length){
				$("." + key).text(value);
			}
		}
	});
	/*
	*	Process behaviours for email form widget
	*/
	$(".new-email").hide();

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

	function drawEmailBtns(addresses, btnStyles){
		$(".email-buttons .btn").remove();
		$.each(addresses, function(index, tag){
			var style = btnStyles[0];
			$(".email-buttons").prepend('<button type="button" class="btn ' + style + '" value=' + tag + '>' + tag + '</button>');
			btnStyles.push(btnStyles.shift());
		});
	}

	// Hard-coded array 
	var addresses = ["Hello@me.com", "abc@me.com"];
	var btnStyles = ["btn-primary", "btn-success", "btn-info", "btn-warning", "btn-danger"];

	drawEmailBtns(addresses,btnStyles);

	$(".add-email").click(function(){
		$(".new-email").toggle();
	});
	$(".append-email").click(function(){
		if(validateEmail($("#new-email").val()) == true ){
			addresses.push($("#new-email").val());
			drawEmailBtns(addresses,btnStyles);
			$(".new-email").toggle();
		} else {
			alert("Please enter a valid email address");
		}
	});

	$(".email-buttons .btn").click(function(){
		var emailToRemove = $(this).val();
		console.log("removing: " + emailToRemove);

		for (var i=addresses.length - 1; i >= 0; i--) {
		    if (addresses[i] === emailToRemove) {
		        addresses.splice(i, 1);
		        // break;       //<-- Uncomment  if only the first term has to be removed
		    }
		}
		console.log("addresses: " + typeof addresses);
		drawEmailBtns(addresses, btnStyles);
	});

	$("#send-mail").click(function(){
		if($("#subject").val() == null || $("#subject").val() == "" || $("#message").val() == null || $("#message").val() == ""){
			alert("Please fill out both the Subject and Message fields");
			return;
		}
		var dataToSubmit = {
			"addresses": addresses,
			"subject": $("#subject").val(),
			"message": $("#message").val(),
			"savecopy": $("#savecopy").is(':checked')
		};

		// There's no back-end to work with, so simply output the collected data to the console
		console.dir(dataToSubmit);
	});
});