jokeApp.controller('FavoritesCtrl', function ($scope, $resource) {


	//$scope.favorites = ["Chuck Norris is a turtle!", "Chuck Norris is a cat!", "Chuck Norris is a catdog!"]
	//console.log($scope.favorites)

	this.getFavorites = function (){
		jokes = ["Chuck Norris is a turtle!", "Chuck Norris is a cat!", "Chuck Norris is a catdog!"]
		rating = [1, 2, 3]//var joke =  $resource("http://api.icndb.com/jokes/random?Limit=1")
		var favorites = [];
		for(var i = 0; i < jokes.length ; i++){
			favorites[i] = {'joke':'', 'rating':''}
			favorites[i].joke = jokes[i]
			favorites[i].rating = rating[i]
		};
		return favorites
	};

	$scope.favorites = this.getFavorites()


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