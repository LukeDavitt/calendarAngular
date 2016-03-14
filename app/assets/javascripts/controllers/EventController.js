(function(){
  
	app.controllers.controller("EventController", [
	  '$scope', '$routeParams', '$resource', '$location', 'flash', function($scope, $routeParams, $resource, $location, flash) {
	    // var Event;
	    // Event = $resource('/events/:recipeId', {
	    //   recipeId: "@id",
	    //   format: 'json'
	    // }, {
	    //   'save': {
	    //     method: 'PUT'
	    //   },
	    //   'create': {
	    //     method: 'POST'
	    //   }
	    // });
	    // if ($routeParams.eventId) {
	    //   Event.get({
	    //     eventId: $routeParams.eventId
	    //   }, (function(event) {
	    //     $scope.event = event;
	    //   }), (function(httpResponse) {
	    //     $scope.event = null;
	    //     flash.error = "There is no event with ID " + $routeParams.eventId;
	    //   }));
	    // } else {
	    //   $scope.event = {};
	    // }
	    // $scope.back = function() {
	    //   $location.path("/");
	    // };
	    // $scope.edit = function() {
	    //   $location.path("/event/edit/" + $scope.event.id);
	    // };
	    // $scope.cancel = function() {
	    //   if ($scope.event.id) {
	    //     $location.path("/events/" + $scope.event.id);
	    //   } else {
	    //     $location.path("/");
	    //   }
	    // };
	    // $scope.save = function() {
	    //   var onError;
	    //   onError = function(_httpResponse) {
	    //     flash.error = "Something went wrong";
	    //   };
	    //   if ($scope.event.id) {
	    //     $scope.event.$save((function() {
	    //       $location.path("/events/" + $scope.event.id);
	    //     }), onError);
	    //   } else {
	    //     Event.create($scope.event, (function(newEvent) {
	    //       $location.path("/events/" + newEvent.id);
	    //     }), onError);
	    //   }
	    // };
	    // $scope["delete"] = function() {
	    //   $scope.event.$delete();
	    //   $scope.back();
	    // };
	  }
	]);







})();