/**
 * Created by ronakp on 16-09-2016.
 */

// angular.module("module13",[])
oneAppmod.controller('sidController', function($scope) {
    $scope.name = "Chrome";
    $scope.reverseName = function() {
        //debugger
        $scope.name = $scope.name.split('').reverse().join('');
    };
    //debugger
});

// oneAppmod.directive("myDirectiveWithNewScope",function () {
//     return {
//         restrict: "EA",
//         scope : false, //uses new scope
//         template: '<div> Entered name is {{name}} </div>' +
//          'Change your name: <input type='text' ng-model = 'name' />'
//     };
// });

// oneAppmod.directive("myDirectiveWithIsolatedScope",function () {
//     return {
//         restrict: 'EA',
//         scope :{}    //uses isolated scope
//         // template:  "<div>Entered name is {{name}} </div> Change your name: <input type='text' ng-model = 'name'/>"     
// };
// });
