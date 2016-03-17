(function(){


  

  app.controllers.controller('CalendarController', [
    '$scope', '$http', function($scope, $http) {
      $http({
        method: 'GET',
        url: '/events.json',
        }).then(function successCallback(response) {
            $scope.calendarEvents = response.data;
            $scope.items = [];
            
            response.data.forEach(function(event){
                  var item = {};
                  item.imgSrc = event.logo;
                  item.label = event.title;
                  $scope.items.push(item);
                  item = {};
                  item.date = new Date(event.start);
                  item.status = "partially";
                  $scope.events.push(item);
            });
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });
      


      $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function() {
        $scope.dt = null;
      };

      $scope.inlineOptionsDay = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: false,
        datepickerMode: "day"
      };

      $scope.inlineOptionsMonth = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: false,
        datepickerMode: "month"
      };

      $scope.inlineOptionsYear = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: false,
        datepickerMode: "year"
      };

      $scope.dateOptions = {
        //dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };

      // Disable weekend selection
      // function disabled(data) {
      //   var date = data.date,
      //   mode = data.mode;
      //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      // }

      // $scope.toggleMin = function() {
      //   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      //   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      // };

      // $scope.toggleMin();

      // $scope.open1 = function() {
      //   $scope.popup1.opened = true;
      // };

      // $scope.open2 = function() {
      //   $scope.popup2.opened = true;
      // };

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      // $scope.popup1 = {
      //   opened: false
      // };

      // $scope.popup2 = {
      //   opened: false
      // };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 1);
  // $scope.events = [
  //   {
  //     date: tomorrow,
  //     status: 'full'
  //   },
  //   {
  //     date: afterTomorrow,
  //     status: 'partially'
  //   }
  // ];
      $scope.events =[];

      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }
        return '';
      }
       $scope.view = [
        {
          "id": "day",
          "title": "Day"
        },
        {
          "id": "month",
          "title": "Month"
        }, 
        {
          "id": "year",
          "title": "Year"
        }];

        //init
        $scope.widgetView = 'Day';
        $scope.monthView = false;
        $scope.dayView = true;
        $scope.yearView = false;
        $scope.pickView = function(value) {
          switch(value){
            case "Month":
              $scope.monthView = true;
              $scope.yearView = false;
              $scope.dayView = false;
              break;
            case "Year":
              $scope.dayView = false;
              $scope.monthView = false;
              $scope.yearView = true;
              break;
            case "Day":
              $scope.dayView = true;
              $scope.yearView = false;
              $scope.monthView = false;
              break;
            default:
              $scope.dayView = true;
              $scope.yearView = false;
              $scope.monthView = false;
              break;
          }
        };
        s = $scope;
        $scope.calendarDate = function() {
          return moment($scope.dt).format("MMMM DD");
        };
    }
    
      
  ]);

})();