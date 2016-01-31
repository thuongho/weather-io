angular.module('app.controllers', ['app.services'])
.controller('AppCtrl', ['$scope', '$log', 'Settings', function($scope, $log, Settings) {
  $log.info('AppCtrl Created');
  $scope.settings = Settings;
}])
.controller('WeatherCtrl', ['$scope', '$log', '$ionicLoading', 'Weather', 'Settings', function($scope, $log, $ionicLoading, Weather, Settings) {
  $log.info('WeatherCtrl Created');
  $scope.haveData = false;
  $ionicLoading.show ({
    template: 'Loading...'
  })
  Weather.getWeatherAtLocation(37.2732249, -121.88772).then(function(response) {
    $log.info(response);
    $scope.current = response.data.currently;
    $scope.highTemp = Math.ceil(response.data.daily.data[0].temperatureMax);
    $scope.lowTemp = Math.floor(response.data.daily.data[0].temperatureMin);
    $scope.currentTemp = Math.ceil($scope.current.temperature);
    $scope.haveData = true;
    $ionicLoading.hide();
  }, function(error) {
    alert('Unable to get current conditions');
    $log.error(error);
  });
}]);