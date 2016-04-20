jokeApp.controller('ContentCtrl', function ($scope, $resource) {


	$scope.getRandom = function (){
		//var joke =  $resource("http://api.icndb.com/jokes/random?Limit=1")
		return ("Chuck Norris is a turtle!")
	};

	$scope.getCategories = function (){
		return $resource("http://api.icndb.com/categories")
	};

	var rating = 4;

	$scope.setRating = function(number) {
		rating = rating + number;
	}

	$scope.getRating = function() {
		return rating;
	}

	$scope.alert = function(){
	    var x;
	    if (confirm("You are not logged in! You can not heart! Would you like to log in?")){
	    	console.log("I'm trying!!")
	        window.location="http://www.google.com";
	    }
	};

	$scope.ddSelectOptions = [
        {
            text: 'Option1',
            value: 'a value'
        },
        {
            text: 'Option2',
            value: 'another value',
        },
    ];

    $scope.ddSelectSelected = {}; // Must be an object

	/*$scope.getFilter = function(filter){
		return $resource("http://api.icndb.com/jokes/random?", {limitTo=filter}
	)};

	//
	$scope.getJoke = function(id){
		return $resource("http://api.icndb.com/jokes/:id", {id:id}
	)};
*/

/*def getFavorites



*/
/*def getTop


*/
});