jokeApp.controller('LoginCtrl', function ($scope, $resource) {
	$scope.username = 'user';
	$scope.password = '***';
    
    $scope.submit = function() {
    console.log(this.username)
    console.log(this.password)
    window.location="#/content";
};

});