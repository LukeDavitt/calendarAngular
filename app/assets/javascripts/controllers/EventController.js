(function(){
  
	app.controllers.controller("EventController", [
	  '$scope', '$routeParams', '$resource', '$location', 'flash', '$http', function($scope, $routeParams, $resource, $location, flash, $http) {
	    
	    var Event;
	    Event = $resource('/events/:eventId', {
	      eventId: "@id",
	      format: 'json'
	    }, {
	      'save': {
	        method: 'PUT'
	      },
	      'create': {
	        method: 'POST'
	      }
	    });
	    if ($routeParams.eventId) {
	      Event.get({
	        eventId: $routeParams.eventId
	      }, (function(event) {
	        $scope.event = event;
	      }), (function(httpResponse) {
	        $scope.event = null;
	        flash.error = "There is no event with ID " + $routeParams.eventId;
	      }));
	    } else {
	      $scope.event = {};
	    }
	    $scope.back = function() {
	      $location.path("/");
	    };
	    $scope.edit = function() {
	      $location.path("/event/edit/" + $scope.event.id);
	    };
	    $scope.cancel = function() {
	      if ($scope.event.id) {
	        $location.path("/events/" + $scope.event.id);
	      } else {
	        $location.path("/");
	      }
	    };
	    $scope.save = function() {
	      var onError;
	      onError = function(_httpResponse) {
	        flash.error = "Something went wrong";
	      };
	      if ($scope.event.id) {
	        $scope.event.$save((function() {
	          $location.path("/events/" + $scope.event.id);
	        }), onError);
	      } else {
	      	e = $scope.event;
	        Event.create($scope.event, (function(newEvent) {
	          n = newEvent;
	          //$location.path("/events/" + newEvent.id);
	        }), onError);
	      }
	    };
	    $scope["delete"] = function() {
	      $scope.event.$delete();
	      $scope.back();
	    };
	    // upload on file select or drop
	    $scope.uploadFile = function(files) {
	    	$scope.event.logo = files[0];
	        // var fd = new FormData();
	        // fd.append('event[logo]', files[0]); // 'user[avatar]' is important, so that params[:user][:avatar] contains the file, as expected by Rails
	        // // $http.put('/event.json', fd, { // The update method of the users controller
	        //     withCredentials: true,
	        //     headers: {
	        //         'Content-Type': undefined,
	        //         'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
	        //     },
	        //     transformRequest: angular.identity
	        // }).success(function(e) {
	        //     console.log(e);
	        // }).error(function(e) {
	        //     console.log(e);
	        // });
	    };
	  }
	]);







})();