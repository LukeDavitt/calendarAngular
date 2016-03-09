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
//= require angular-resource/angular-resource
//= require_tree .

var controllers, receta, recipes;

receta = angular.module('receta', ['templates', 'ngRoute', 'ngResource', 'controllers']);

receta.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'index.html',
      controller: 'RecipesController'
    });
  }
]);

controllers = angular.module('controllers', []);

controllers.controller('RecipesController', [
  '$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {
    var Recipe, keywords;
    keywords = void 0;
    $scope.search = function(keywords) {
      return $location.path('/').search('keywords', keywords);
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
