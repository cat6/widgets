var dummy = {
	"user":{
		"userName":"Jane Raymons",
		"userText": "Your talent amazes!!  This is awesome.  Excited to see the final product.",
		"avatar": "http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png",
		"userImg": "http://ih1.redbubble.net/image.102071600.7525/flat,1000x1000,075,f.u3.jpg",
		"userViews": 172,
		"userComments": 34,
		"userLikes": 210
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