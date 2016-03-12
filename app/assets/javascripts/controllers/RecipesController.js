(function(){

  var recipes;

  

  app.controllers.controller('RecipesController', [
    '$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {
      var Recipe, keywords;
      keywords = void 0;
      $scope.search = function(keywords) {
        $location.path('/').search('keywords', keywords);
      };
      $scope.view = function(recipeId) {
        $location.path("/recipes/" + recipeId);
      };
      $scope.newRecipe = function() {
        $location.path("/recipe/new");
      };
      $scope.edit = function(recipeId) {
        $location.path("/recipe/edit/" + recipeId);
      };

      Recipe = $resource('/recipes/:recipeId', {
        recipeId: "@id",
        format: 'json'
      });
      if ($routeParams.keywords) {
        return Recipe.query({
          keywords: $routeParams.keywords
        }, function(results) {
          return $scope.recipes = results;
        });
      } else {
        return $scope.recipes = [];
      }
    }
  ]);

})();