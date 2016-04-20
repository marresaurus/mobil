jokeApp.controller('SignCtrl', function ($scope, $resource) {
	  $scope.username = 'user';
      $scope.password = '***';
      $scope.password2 = '**';
      $scope.submit = function() {
        console.log(this.username)
        console.log(this.password)
        console.log(this.password2)
        if (!(this.password===this.password2)){
       		alert("not matching passwords")
        }
       	else{
       		 window.location="#/content";
       	}
    	
       
};

});