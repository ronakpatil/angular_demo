/**
 * Created by ronakp on 16-09-2016.
 */

// angular.module("module12",[])
oneAppmod.controller('validationController', function($scope) {
    $scope.mydata = { val: "Jake" }
    $scope.$watch('mydata.val', function(newval) {
        $scope.mydata.toolong = newval.length > 15

        $scope.myFunc = function() {
            return myValue.val;
        };
    })
})
