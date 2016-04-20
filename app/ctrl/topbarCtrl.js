jokeApp.controller('TopbarCtrl', function ($scope, $resource) {

	$scope.visible = false;
	
	$scope.close = function (
		$scope.visible = false;
	)
	
	$scope.show = function(e) {
        $scope.visible = true;
        e.stopPropagation();
    };

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function() {
            $scope.close(); 
        });
    }

	
})