// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require angular-route/angular-route
//= require angular-rails-templates
//= require_tree .

var controllers, receta, recipes;

receta = angular.module('receta', ['templates', 'ngRoute', 'controllers']);

receta.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'RecipesController'
    });
  }
]);

recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  }, {
    id: 2,
    name: 'Garlic Mashed Potatoes'
  }, {
    id: 3,
    name: 'Potatoes Au Gratin'
  }, {
    id: 4,
    name: 'Baked Brussel Sprouts'
  }
];

controllers = angular.module('controllers', []);

controllers.controller("RecipesController", [
  '$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    var keywords;
    $scope.search = function(keywords) {
      return $location.path("/").search('keywords', keywords);
    };
    if ($routeParams.keywords) {
      keywords = $routeParams.keywords.toLowerCase();
      return $scope.recipes = recipes.filter(function(recipe) {
        return recipe.name.toLowerCase().indexOf(keywords) !== -1;
      });
    } else {
      return $scope.recipes = [];
    }
  }
]);
