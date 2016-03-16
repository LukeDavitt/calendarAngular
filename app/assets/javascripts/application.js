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
//= require angular-flash/dist/angular-flash
//= require moment/moment
//= require angular-animate/angular-animate
//= require angular-aria/angular-aria
//= require angular-messages/angular-messages
//= require angular-material/angular-material
//= require ng-file-upload/ng-file-upload
//= require sc-date-time/dist/sc-date-time
//= require slick-mod
//= require angular-slick-mod
//= require angular-ui-bootstrap/src/dateparser/dateparser
//= require angular-ui-bootstrap/src/datepicker/datepicker
//= require angular-ui-bootstrap/src/isClass/isClass
//= require angular-ui-bootstrap/src/position/position
//= require_directory .
//= require_self
//= require_tree .


(function () {
  'use strict';

  window.app = {
    init: function () {
      
      
      calendarDemoApp.config([
        '$routeProvider', 'flashProvider', function($routeProvider, flashProvider) {
         flashProvider.errorClassnames.push("alert-danger");
         flashProvider.warnClassnames.push("alert-warning");
         flashProvider.infoClassnames.push("alert-info");
         flashProvider.successClassnames.push("alert-success");

         $routeProvider
          .when('/', {
            templateUrl: 'calendar.html',
            controller: 'CalendarController'
          })
          .when('/events/:eventId', {
            templateUrl: 'events/show.html',
            controller: 'EventController'
          })
          .when('/event/new', {
            templateUrl: 'events/form.html',
            controller: 'EventController'
          });
        //   .when('/recipe/edit/:recipeId', {
        //     templateUrl: 'form.html',
        //     controller: 'RecipeController'
        //   });
            moment.locale("dd");
        
        }
      ]);
    },
    controllers: angular.module('controllers', [])
  };

  window.calendarDemoApp = angular.module('calendarDemoApp', ['templates', 'ngRoute', 'ngResource', 'controllers', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'ngMaterial', 'scDateTime', 'ngFileUpload','slick', 'ui.bootstrap.datepicker']);

  app.init();

})();