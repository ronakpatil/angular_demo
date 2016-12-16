/**
 * Created by ronakp on 16-09-2016.
 */
// angular.module("module13",[])
oneAppmod.controller('bootstrapformController', function($scope) {
    $scope.showModel = false;
    $scope.toggleModal = function() {
        $scope.showModel = !$scope.showModel;
    }
    $scope.reset = function() {
        $scope.eMail = "ronakpatil9@gmail.com";
        $scope.fName = "Ronak";
    }
    $scope.reset();
});
