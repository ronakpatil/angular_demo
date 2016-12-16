oneAppmod.directive('parentscope', function() {
    return {
        //uses its parent's scope
        restrict: "E",
        scope: false,
        template: '<div> Entered name is {{name}} </div>' +
            'Change your name: <input type="text" ng-model="name" />'
    };
});

oneAppmod.directive('newscope', function() {
    return {
        //uses its parent's scope
        restrict: "EA",
        scope: true,
        template: '<div> Entered name is {{name}} </div>' +
            'Change your name: <input type="text" ng-model="name" />'
    };
});

oneAppmod.directive('isolatedscope', function() {
    return {
        //uses its parent's scope
        restrict: "E",
        scope: {},
        template: '<div> Entered name is {{name}} </div>' +
            'Change your name: <input type="text" ng-model="name" />'
    };
});


//----------------------Restrict keyword directives------------------------------//


oneAppmod.directive("restrictelement", function() {
    return {
        restrict: 'E', //Element restriction (will create custom element)
        link: function() {
            // return "function inside this directive will be used as element only";
            console.log("Directive as element is configured");
        }
    }
})

oneAppmod.directive("restrictattribute", function() {
    return {
        restrict: 'A', //Attribute restriction (will create custom attribute)
        link: function() {
            // return "function inside this directive will be used as attribute only";
            console.log("Directive will be act as attribute");
        }
    }
})

oneAppmod.directive("restrictclass", function() {
    return {
        restrict: 'C', //Class restriction (will create custom class)
        link: function() {
            // return "This directive will be used as class only";
            console.log("Directive will work as class");
        }
    }
})

oneAppmod.directive("restrictcomment", function() {
    return {
        restrict: 'M', //Comment restriction
        link: function() {
            console.log("Custom directive as Comment");
        }
    }
})


//----------------------------Bootstrap form directive-------------------------------//

oneAppmod.directive('modal', function() {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">{{title}}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        scope: true,
        transclude: true,
        replace: true,
        link: function(scope, element, attrs) {
            scope.title = attrs.title;
            scope.$parent.$watch('showModel', function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            }, true);

            $(element).on('hidden.bs.modal', function() {
                if (!scope.$$phase) {
                    scope.$apply(function() {
                        scope.$parent[attrs.visible] = false;
                    });
                }

            });

            $(element).on('shown.bs.modal', function() {
                if (!scope.$$phase) {
                    scope.$apply(function() {
                        scope.$parent[attrs.visible] = true;
                    });
                }

            });
        }
    };
});

//----------------------Transclude directive-----------------------------//

oneAppmod.directive('pane', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        template: '<div style="border: 1px solid black;">' +
            '<div style="background-color: gray">{{title}}</div>' +
            '<ng-transclude></ng-transclude>' +
            '</div>'
    };
})
