/**
 * Created by ronakp on 12-09-2016.
 */

// angular.module("mod10",[])

oneAppmod.controller('timeoutController', function($scope, $timeout, $location, $interval) {
    $scope.header = "3...2...1...!!!"
    $timeout(function() {
        $scope.header = "How are you today?";
    }, 2000);
    $scope.myURL = $location.absUrl();
    $scope.thetime = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.thetime = new Date().toLocaleTimeString();
    }, 2000);
});
