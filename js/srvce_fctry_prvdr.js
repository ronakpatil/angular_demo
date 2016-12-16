	//Create utility function with 	service
	oneAppmod.service('myservice', function() {
	    //expose the function on this object
	    this.hello = function() {
	        return "Hello Service";
	    };
	    this.sum = function(a, b) {
	        return a + b;
	    }
	});

	//Create utility function with factory
	oneAppmod.factory('myfactory', function() {
	    //here we return the object
	    var factoryobj = {};
	    factoryobj.hello = function() {
	        return "Hello Factory";
	    }
	    factoryobj.sum = function(a, b) {
	        return a + b;
	    }
	    return factoryobj;
	    // return {
	    // 		hello: function() {
	    // 			return "Hello Factory";
	    // 		};
	    // 		sum: function(a,b) {
	    // 			return a + b;
	    // 		};
	    // 	}
	});

	//Create utility function with provider
	oneAppmod.provider("myprovider", function() {
	    this.$get = function() {
	        return {
	            hello: function() {
	                return "Hello Provider";
	            },
	            sum: function(a, b) {
	                return a + b;
	            }

	        };
	    };
	});


	oneAppmod.controller("srvce_fctry_prvdr_controller", function($scope, myservice, myprovider, myfactory) {
	    //Service function call
	    $scope.serviceOutput = "Look for service output here:";
	    $scope.Helloservice = function() {
	        $scope.serviceOutput = myservice.hello();
	    };
	    $scope.Sumservice = function() {
	        $scope.serviceOutput = "The sum is " + myservice.sum(2, 6);
	    };

	    //Factory function call
	    $scope.factoryOutput = "Look for factory output here:";
	    $scope.Hellofactory = function() {
	        $scope.factoryOutput = myfactory.hello();
	    };
	    $scope.Sumfactory = function() {
	        $scope.factoryOutput = "The sum is " + myfactory.sum(2, 7);
	    };

	    //Provider function call
	    $scope.providerOutput = "Look for provider output here:";
	    $scope.Helloprovider = function() {
	        $scope.providerOutput = myprovider.hello();
	    };
	    $scope.Sumprovider = function() {
	        $scope.providerOutput = "The sum is " + myprovider.sum(2, 8);
	    };

	})
