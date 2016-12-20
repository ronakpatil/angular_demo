oneAppmod.controller('yatreeviewController', function($scope) {
    $scope.context = {
        selectedNodes: []
    };

    $scope.options = {
        onSelect: function($event, node, context) {
            if ($event.ctrlkey) {
                var idx = context.selectedNodes.indexOf(node);
                if (context.selectedNodes.indexOf(node) === -1) {
                    context.selectedNodes.push(node);
                } else {
                    context.selectedNodes.splice(idx, 1);
                }
            } else {
                context.selectedNodes = [node];
            }
        }
    };
    $scope.modal = [{
        label: 'parent1',
        children: [{
            label: 'child1'
        }]
    }, {
        label: 'parent2',
        children: [{
            label: 'child',
            children: [{
                label: 'innerchild'
            }]
        }]
    }, {
        label: 'parent3'
    }];
});
