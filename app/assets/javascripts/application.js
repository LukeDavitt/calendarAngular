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
//= require fullcalendar/dist/fullcalendar
//= require angular-ui-calendar/src/calendar
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
        //   .when('/recipes/:recipeId', {
        //     templateUrl: 'show.html',
        //     controller: 'RecipeController'
        //   })
        .when('/event/new', {
          templateUrl: 'events/form.html',
          controller: 'EventController'
        });
        //   .when('/recipe/edit/:recipeId', {
        //     templateUrl: 'form.html',
        //     controller: 'RecipeController'
        //   });
        }
      ]);
    },
    controllers: angular.module('controllers', [])
  };

  window.calendarDemoApp = angular.module('calendarDemoApp', ['templates', 'ngRoute', 'ngResource', 'controllers', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'ui.calendar' ]);

  app.init();

})();