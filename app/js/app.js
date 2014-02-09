'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ui.bootstrap',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'services.breadcrumbs'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/phones/modal/:phoneId', {
        templateUrl:'partials/modal-detail.html',
        controller:'PhoneModalDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

phonecatApp.controller('AppCtrl', ['$scope','breadcrumbs','$location', function($scope,breadcrumbs,$location) {
    $scope.location = $location;
    $scope.breadcrumbs = breadcrumbs;
}]);
