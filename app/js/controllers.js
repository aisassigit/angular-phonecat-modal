'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone','modalService',
  function($scope, Phone,modalService) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.open = function(phoneId){
        modalService.setId(phoneId);
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

  }]);

phonecatControllers.controller('PhoneModalDetailCtrl',['$scope','$routeParams','Phone','$modal','modalService',
    function($scope, $routeParams, Phone, $modal,modalService){
        $scope.$on('handleBroadcast',function(){
            $scope.open(modalService.phoneId)
        });
        $scope.open = function (phoneId) {
            $scope.phone = Phone.get({phoneId:phoneId}, function(phone) {
                var modalInstance = $modal.open({
                    scope:$scope,
                    templateUrl: 'partials/modal-detail.html',
                    controller: ModalInstanceCtrl,
                    resolve: {
                        phone: function () {
                            return phone;
                        }
                    }
                });
            });
        };
        var ModalInstanceCtrl = function ($scope, $modalInstance) {
            $scope.ok = function () {
                $modalInstance.close($scope);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
}]);