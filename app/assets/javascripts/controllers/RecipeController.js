(function(){
  
	app.controllers.controller("RecipeController", [
	  '$scope', '$routeParams', '$resource', '$location', 'flash', function($scope, $routeParams, $resource,  $location, flash) {
	    var Recipe;
	    $scope.back = function() {
		  return $location.path("/");
		};
		Recipe = $resource('/recipes/:recipeId', {
	      recipeId: "@id",
	      format: 'json'
	    });
	    Recipe.get({
		  recipeId: $routeParams.recipeId
		}, (function(recipe) {
		  return $scope.recipe = recipe;
		}), (function(httpResponse) {
		  $scope.recipe = null;
		  return flash.error = "There is no recipe with ID " + $routeParams.recipeId;
		}));
	  },

	]);

})();