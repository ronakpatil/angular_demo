/**
 * Created by ronakp on 08-09-2016.
 */
 // angular.module("mod9",[])
oneAppmod.controller("ngsubmitController",['$scope',function ($scope) {
    $scope.generateAges=function () {
    var ages = [];
    for (var i=18;i<=60;i++){
        ages.push(i);
    }
    return ages;
};
    $scope.mytxt = "You have not clicked button yet!"
$scope.submit = function () {
    $scope.mytxt = "You have clicked button!"
    if($scope.myform.$valid){
        alert("Submitted")
    }
    else
    {
        alert("Invalid")
    }
};
}]);