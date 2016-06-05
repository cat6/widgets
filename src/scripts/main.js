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
		addresses.push($("#new-email").val());
		drawEmailBtns(addresses,btnStyles);
		$(".new-email").toggle();
	});
});