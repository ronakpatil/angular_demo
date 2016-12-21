oneAppmod.controller('autreeviewController', function($scope) {
    $scope.treedata = [{
                "roleName": "India",
                "roleId": "IN",
                "children": [{
                    "roleName": "Chennai",
                    "roleId": "CH",
                    "children": []
                }, {
                    "roleName": "Maharashtra",
                    "roleId": "MH",
                    "children": [{
                        "roleName": "Mumbai",
                        "roleId": "MUM"
                    }, {
                        "roleName": "Pune",
                        "roleId": "PN",
                        "children": [{
                            "roleName": "EON IT Park",
                            "roleId": "EON",
                            "children": []
                        }, {
                            "roleName": "Rajiv Gandhi Info Park",
                            "roleId": "RINFO",
                            "children": [{
                                "roleName": "Blueridge",
                                "roleId": "BL",
                                "children": []
                            }, {
                                "roleName": "Quadran IT Park",
                                "roleId": "QUAD",
                                "children": []
                            }]
                        }]
                    }, {
                        "roleName": "Nagpur",
                        "roleId": "NGP"
                    }]
                }]
            }, {
                "roleName": "Canada",
                "roleId": "CN",
                "children": []
            },

            {
                "roleName": "Singapore",
                "roleId": "SN",
                "children": []
            }, {
                "roleName": "USA",
                "roleId": "US",
                "children": [{
                    "roleName": "San Fransisco",
                    "roleId": "SFA",
                    "children": []
                }, {
                    "roleName": "Illinois",
                    "roleId": "IL",
                    "children": [{
                        "roleName": "Chicago",
                        "roleId": "CH"
                    }]
                }]
            }
        ];

    // $scope.data = [{
    //     'id': 1,
    //     'title': 'node1',
    //     'nodes': [{
    //         'id': 11,
    //         'title': 'node1.1',
    //         'nodes': [{
    //             'id': 111,
    //             'title': 'node1.1.1',
    //             'nodes': []
    //         }]
    //     }, {
    //         'id': 12,
    //         'title': 'node1.2',
    //         'nodes': []
    //     }]
    // }, {
    //     'id': 2,
    //     'title': 'node2',
    //     'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
    //     'nodes': [{
    //         'id': 21,
    //         'title': 'node2.1',
    //         'nodes': []
    //     }, {
    //         'id': 22,
    //         'title': 'node2.2',
    //         'nodes': []
    //     }]
    // }, {
    //     'id': 3,
    //     'title': 'node3',
    //     'nodes': [{
    //         'id': 31,
    //         'title': 'node3.1',
    //         'nodes': []
    //     }]
    // }];
});
