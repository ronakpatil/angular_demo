/**
 * Created by ronakp on 30-09-2016.
 */

var oneAppmod = angular.module("oneAppmod", ['ui.router','ngAnimate'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        // $ocLazyLoadProvier.config({
        //         // loadedModules: ['oneAppmod'],
        //         asyncLoader: require
        //     });
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("customDirective",{
                url: "/customDirective",
                templateUrl: "view/Customdir.html",
                //controller:  "page1control"
            })
            .state("ngClass",{
                url: "/ngClass",
                templateUrl: 'view/Ngclass.html',
      //           resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
      //                   load: function($ocLazyLoad) {
      // // you can lazy load files for an existing module
      //                       return $ocLazyLoad.load({
      //                       name: 'ngclassController',
      //                       files: ['js/script14.js'];
      //                       })
      //                   }               
      //               }               
      //           })
      //           templateUrl: "view/page14.html",
                controller:  "ngclassController"
            })
            .state("factory_service",{
                url: "/factory_service",
                templateUrl: "view/Factory.html",
                controller:  "factoryController"
            })
            .state("timeout_interval",{
                url: "/timeout_interval",
                templateUrl: "view/Timeout.html",
                controller:  "timeoutController"
            })
            .state("show_hide",{
                url: "/show_hide",
                templateUrl: "view/Nghideshow.html"
                // controller:  "page2control"
            })
            .state("ng-switch",{
                url: "/ng-switch",
                templateUrl: "view/Ngswitch.html"
                // controller:  "page2control"
            })
            .state("bootstrapform",{
                url: "/bootstrapform",
                templateUrl: "view/bsform.html",
                controller:  "bootstrapformController"
            })
            .state("validation",{
                url: "/validation",
                templateUrl: "view/Validation.html",
                controller:  "validationController"
            })
            .state("scopeInsideDirective",{
                url: "/scopeInsideDirective",
                templateUrl: "view/scopeInsideDirective.html",
                controller:  "sidController"
            })
            .state("method",{
                url: "/method",
                templateUrl: "view/Method.html",
                controller:  "functionController"
            })
            .state("ng-submit",{
                url: "/ng-submit",
                templateUrl: "view/Ngsubmit.html",
                controller:  "ngsubmitController"
            })
            .state("Customfilters",{
                url: "/Customfilters",
                templateUrl: "view/filter.html",
                controller:  "filterController"
            })
            .state("service_factory_provider",{
                url: "/service_factory_provider",
                templateUrl: "view/srvce_fctry_prvdr.html",
                controller:  "srvce_fctry_prvdr_controller"
            })
            .state("transclude",{
                url: "/transclude",
                templateUrl: "view/transclude.html",
                controller:  "transcludeController"
            })
            .state("home",{
                url: "/home",
                templateUrl: "view/home.html",
                //controller:  "factoryController"
            });

            
        //     .state("london",{
        //         url: "/london",
        //         templateUrl: "views/london.html",
        //         controller:  "page3control"
        //     });
        // $urlRouterProvider.otherwise("/");

    });

    