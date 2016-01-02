document.addEventListener("DOMContentLoaded", function(event) {

	var userObjects = [];


	document.getElementById("signup").addEventListener("click", function(){
		desiredusername = $('#username').val();
		userInfo = {};
		userInfo.nickname = desiredusername;
		userInfo.room = null;
		userObjects.push(userInfo);

		console.log(userObjects);
	});














	function resetTokenAndLogIn(param){
		token = param['token'];
		$('#myToken').attr("value", param['token']);
		siteReset(param);
	}



	function siteReset(param){
		console.log(param);
		if (param['success'] === true){
			initialize();
		} else {
			alert("something is wrong");
		}
	}

	function initialize(){
		console.log("initialized");
	}





});