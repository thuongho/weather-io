angular.module('app.services', [])
.factory('Settings', [function(){
  var Settings = {
    units: 'us'
  };
  return Settings;
}])
.factory('Location', [function(){
  var Location = {
    lat: 0,
    long: 0
  };
  return Location
}])
.factory('Weather', ['$http', '$log', 'Settings', 'FORECASTIO_KEY', function($http, $log, Settings, FORECASTIO_KEY) {
  $log.info('Weather Factory');
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  return {
    getWeatherAtLocation: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK&units=' + Settings.units);
    }
  }
}]);

// ==========================================================
// https://developer.forecast.io/docs/v2
// ----------------------------------------------------------
// The Forecast API lets you query for most locations on the globe, and returns:

// Current conditions
// Minute-by-minute forecasts out to 1 hour (where available)
// Hour-by-hour forecasts out to 48 hours
// Day-by-day forecasts out to 7 days
// There are two main API calls. The first returns the current forecast (for the next week):

// https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE
// The second lets one query for a specific time, past or future (for many places, 60 years in the past to 10 years in the future):

// https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME
// ==========================================================