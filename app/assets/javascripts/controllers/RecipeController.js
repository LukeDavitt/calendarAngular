(function(){
  
	app.controllers.controller("RecipeController", [
	  '$scope', '$routeParams', '$resource', '$location', 'flash', function($scope, $routeParams, $resource, $location, flash) {
	    var Recipe;
	    Recipe = $resource('/recipes/:recipeId', {
	      recipeId: "@id",
	      format: 'json'
	    }, {
	      'save': {
	        method: 'PUT'
	      },
	      'create': {
	        method: 'POST'
	      }
	    });
	    if ($routeParams.recipeId) {
	      Recipe.get({
	        recipeId: $routeParams.recipeId
	      }, (function(recipe) {
	        $scope.recipe = recipe;
	      }), (function(httpResponse) {
	        $scope.recipe = null;
	        flash.error = "There is no recipe with ID " + $routeParams.recipeId;
	      }));
	    } else {
	      $scope.recipe = {};
	    }
	    $scope.back = function() {
	      $location.path("/");
	    };
	    $scope.edit = function() {
	      $location.path("/recipe/edit/" + $scope.recipe.id);
	    };
	    $scope.cancel = function() {
	      if ($scope.recipe.id) {
	        $location.path("/recipes/" + $scope.recipe.id);
	      } else {
	        $location.path("/");
	      }
	    };
	    $scope.save = function() {
	      var onError;
	      onError = function(_httpResponse) {
	        flash.error = "Something went wrong";
	      };
	      if ($scope.recipe.id) {
	        $scope.recipe.$save((function() {
	          $location.path("/recipes/" + $scope.recipe.id);
	        }), onError);
	      } else {
	        Recipe.create($scope.recipe, (function(newRecipe) {
	          $location.path("/recipes/" + newRecipe.id);
	        }), onError);
	      }
	    };
	    $scope["delete"] = function() {
	      $scope.recipe.$delete();
	      $scope.back();
	    };
	  }
	]);







})();