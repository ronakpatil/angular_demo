/**
 * Created by ronakp on 30-09-2016.
 */


// var app = angular.module("mymod", []);


oneAppmod.controller("filterController", function($scope) {
    var employees = [
        { name: 'Ben', gender: 1, salary: 5500 },
        { name: 'Sara', gender: 1, salary: 3500 },
        { name: 'Masi', gender: 2, salary: 5500 },
        { name: 'Kaka', gender: 2, salary: 2500 },
        { name: 'Adam', gender: 1, salary: 6500 },
        { name: 'Jenny', gender: 3, salary: 5600 },
        { name: 'sulee', gender: 3, salary: 5200 }
    ];
    $scope.employees = employees;
});
