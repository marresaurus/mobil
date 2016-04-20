jokeApp.controller('MenuCtrl', function ($scope, $resource) {
	

	$scope.toplist = function (){
		window.location="#/toplist";
		};

	$scope.favorites = function (){
		window.location="#/favorites";
		};

	$scope.login = function (){
		window.location="#/login";
		};

	$scope.signup = function (){
		window.location="#/signup";
		};
		
	$scope.logout = function (){
		alert("You are now logged out")
		};
});