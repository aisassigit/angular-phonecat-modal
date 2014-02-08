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
