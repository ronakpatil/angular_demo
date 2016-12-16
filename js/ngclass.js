/**
 * Created by ronakp on 16-09-2016.
 */

// angular.module("module14",[]);

oneAppmod.controller("ngclassController", ['$scope', function($scope) {
    $scope.items = [
        { 'title': 'Machine Learning', 'type': 1 },
        { 'title': 'Sentimental Analytics', 'type': 2 },
        { 'title': 'Data Mining', 'type': 1 },
        { 'title': 'Data Warehousing', 'type': 3 }
    ]
    $scope.style2 = 'chartreuse'
    $scope.style1 = 'orange'
    $scope.style3 = 'underline'
}])
