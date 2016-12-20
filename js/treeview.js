oneAppmod.controller("treeviewController", function($scope) {
    $scope.my_data = [{
        label: 'Cars',
        children: [{
                label: 'Sedan',
                data: {
                    description: 'BMW d320'
                }
            }, {
                label: 'SUV',
                children: ['Captiva', 'Fortuner', 'CR-V']
            }, {
                label: 'Hatchback',
                data: {
                    description: 'Wolksvagon Beetel'
                }
            }

        ]
    }, {
        label: 'Bikes',
        children: [{
                label: 'Sports',
                data: {
                    description: 'Bajaj Comodor'
                }
            }, {
                label: 'Street',
                data: {
                    description: 'Harley'
                }	
            }, {
                label: 'Commuter',
                children: ['Unicorn', 'Apache', 'Pulser']
            }

        ]
    }]
});
