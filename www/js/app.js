// Ionic One App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'one' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('one', [
  'ionic',
  'ion-fab-button',
  'ngCordova',
  'ngFileUpload',
  'one.controllers.profile',
  'one.controllers.home',
  'one.controllers.search',
  'one.services.account',
  'one.services.camera',
  'one.services.dashboard',
  'one.services.friends'
])

  //.constant('API', 'http://onepi.cf/api')
  .constant('API', 'http://app.onesnap.xyz/api')
  .constant('REFRESH_INTERVAL', 3000)

  .config(function ($httpProvider, $ionicConfigProvider) {
    'use strict';
    //Switch off caching:
    $ionicConfigProvider.views.maxCache(0);
    //Insert JWT token into all api requests:
    // $httpProvider.interceptors.push('authInterceptor');
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(true);
      StatusBar.show();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
        $stateProvider

            // State to represent Login View
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'

            })

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html',
                cache: false
            })

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('tab.search', {
                url: '/search',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/search.html',
                        controller: 'SearchCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

angular.module('ion-fab-button', [])
  .directive('fabButton', function fabButtonDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: template,
      link: link
    };
    //isAnchor
    function isAnchor(attr) {
      return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
    }
    //template
    function template(element, attr) {
      return isAnchor(attr) ?
        '<a class="fab-button" ng-transclude></a>' :
        '<button class="fab-button" ng-transclude></button>';
    }
    //link
    function link(scope, element, attr) {
      var target = '#' + attr['targetId'];
      //var bgColor = attr['bg-color'];
      //element.style=bgColor;
      var targetEl = angular.element(document.querySelector(target));
      var savePos = 0;
      targetEl.bind('scroll', function (e) {
      });
    }
  });