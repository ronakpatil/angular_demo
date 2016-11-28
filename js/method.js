/**
 * Created by ronakp on 01-09-2016.
 */

// var mymodule3 =  angular.module("mymodule3",[])

oneAppmod.controller("functionController",function ($scope) {
    // $scope.message = "first angulerJS script"
    var technologies = [
        {name: "Machine Learning", likes: 0, dislikes: 0},
        {name: "Data Analytics", likes: 0, dislikes: 0},
        {name: "Data Mining", likes: 0, dislikes: 0},
        {name: "Business Analytics", likes: 0, dislikes: 0},
        {name: "Data Warehousing", likes: 0, dislikes: 0}];

    $scope.technologies = technologies;
    $scope.increamentLikes = function (technologies) {
        technologies.likes++;
    }

    $scope.increamentDislikes =  function (technologies) {
        technologies.dislikes++;
    }

    $scope.cars=[
        '550d',
        'q6',
        'Creta',
        'i20',
        'Etios',
        'Corrola',
        'Brezza',
        '4matic',
        'Cammaery',
        'Ghost'

    ];

});


