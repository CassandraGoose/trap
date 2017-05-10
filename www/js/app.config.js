(function() {
  'use strict';
  console.log('hellloo??????');
  angular
    .module("app", ['ionic'])
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
        }
      });
    })
    .config(config)

  function config($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.home', {
        //tab.home???? why?
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: '/templates/tab-home.html'
          }
        }
      })
      .state('tab.saved', {
        url: '/saved',
        views: {
          'tab-saved': {
            templateUrl: '/templates/tab-saved.html'
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/home');
  }

}());
