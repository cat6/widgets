var dummy = {
	"user":{
		"userName":"Jane Raymons",
		"userText": "Your talent amazes!!  This is awesome.  Excited to see the final product.",
		"avatar": "http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png",
		"userImg": "http://ih1.redbubble.net/image.102071600.7525/flat,1000x1000,075,f.u3.jpg",
		"userViews": 172,
		"userComments": 34,
		"userLikes": 210,
		"viewLink": "https://www.google.com/search?espv=2&q=view",
		"commentLink": "https://www.google.com/search?espv=2&q=comment",
		"likeLink": "https://www.google.com/search?espv=2&q=like"
	}
}
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

	$(document).on('click','.email-buttons .btn', function(){
		var emailToRemove = $(this).val();
		for (var i=addresses.length - 1; i >= 0; i--) {
		    if (addresses[i] === emailToRemove) {
		        addresses.splice(i, 1);
		    }
		}
		drawEmailBtns(addresses, btnStyles);
	});

	$("#send-mail").click(function(){
		if($("#subject").val() == null || $("#subject").val() == "" || $("#message").val() == null || $("#message").val() == ""){
			alert("Please fill out both the Subject and Message fields");
			return;
		}
		if(addresses.length <= 0){
			alert("Please enter a contact to email");
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