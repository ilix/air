angular.module('air').controller('FilterCtrl', function ($scope, $rootScope, weather) {
  'use strict';

  $scope.weather = weather;
  $scope.stations = {};
  $scope.currentStation = {};
  $scope.filterTypes = [
    {
      Name: 'Latest',
      Value: 'latest'
    },
    {
      Name: 'Coldest',
      Value: 'coldest'
    },
    {
      Name: 'Hottest',
      Value: 'hottest'
    }
  ];
  $scope.currentFilterType = {
    Name: 'Latest',
    Value: 'latest'
  };

  // Get weather stations from API.
  weather.FetchWeatherStations(function (data) {
    $scope.stations = data;
  });

  $scope.$watch('currentStation', function(station) {
    weather.CurrentStation = station;
  });

});