'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ui.bootstrap',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'services.breadcrumbs',
  'ui.router'
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

//phonecatApp.config(function($stateProvider, $urlRouterProvider) {
//  // For any unmatched url, redirect to /state1
//  $urlRouterProvider.otherwise("/phones");
//  // Now set up the states
//  $stateProvider
//    .state('phones', {
//      url: "/phones",
//      templateUrl: "partials/phone-list.html",
//      controller:'PhoneListCtrl'
//    })
//    .state('phone', {
//      url: "/phones/:phoneId",
//      templateUrl: "partials/phone-detail.html",
//      controller: 'PhoneDetailCtrl'
//    })
//    .state('modal', {
//      url: "/phones/modal/:phoneId",
//      templateUrl: "partials/modal-detail.html",
//      controller:'PhoneModalDetailCtrl'
//    })
//});

phonecatApp.controller('AppCtrl', ['$scope','breadcrumbs','$location', function($scope,breadcrumbs,$location) {
    $scope.location = $location;
    $scope.breadcrumbs = breadcrumbs;
}]);
