'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


phonecatServices.factory('modalService', ['$rootScope',function($rootScope) {
    var modalService = {};
    modalService.phoneId = '';

    modalService.setId = function(id){
      this.phoneId = id;
      this.broadcastSelection();
    };

    modalService.broadcastSelection = function() {
        $rootScope.$broadcast('handleBroadcast');
    };
    return modalService;
}]);
angular.module('services.breadcrumbs', []);
angular.module('services.breadcrumbs').factory('breadcrumbs', ['$rootScope', '$location', function ($rootScope, $location) {
  var breadcrumbs = [];
  var breadcrumbsService = {};
  //we want to update breadcrumbs only when a route is actually changed
  //as $location.path() will get updated imediatelly (even if route change fails!)
  $rootScope.$on('$routeChangeSuccess', function (event, current) {
    var pathElements = $location.path().split('/'), result = [], i;
    var breadcrumbPath = function (index) {
      return '/app/index.html#' + (pathElements.slice(0, index + 1)).join('/');
    };
    pathElements.shift();
    for (i = 0; i < pathElements.length; i++) {
      result.push({name: pathElements[i], path: breadcrumbPath(i)});
    }
    breadcrumbs = result;
  });
  breadcrumbsService.getAll = function () {
    return breadcrumbs;
  };
  breadcrumbsService.getFirst = function () {
    return breadcrumbs[0] || {};
  };
  return breadcrumbsService;
}]);
