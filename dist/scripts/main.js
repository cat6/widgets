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
});