angular.module('app.controllers', [])
  .controller('AppCtrl', ['$scope', '$log', function($scope, $log) {
    $log.info('AppCtrl Created');
  }])
  .controller('WeatherCtrl', ['$scope', '$log', function($scope, $log) {
    $log.info('WeatherCtrl Created');
  }]);