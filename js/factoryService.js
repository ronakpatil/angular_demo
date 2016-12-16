/**
 * Created by ronakp on 06-09-2016.
 */
// var app = angular.module("app5", [])


oneAppmod.controller('factoryController', function($scope, stringService) {
    $scope.transformString = function(input) {
        $scope.output = stringService.processString(input);
    };
});
