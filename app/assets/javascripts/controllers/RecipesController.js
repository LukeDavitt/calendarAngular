(function(){

  var recipes;

  

  app.controllers.controller('RecipesController', [
    '$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {
      var Recipe, keywords;
      keywords = void 0;
      $scope.search = function(keywords) {
        return $location.path('/').search('keywords', keywords);
      };
      $scope.view = function(recipeId) {
        return $location.path("/recipes/" + recipeId);
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