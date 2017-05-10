(function() {

  angular.module("app", ['ionic'])
    .component('home', {
      templateUrl: 'templates/tab-home.html',
      controller: 'HomeController'
    })
    .component('saved', {
      templateUrl: 'templates/tab-saved.html',
      controller: 'SavedController'
    })
    .component('account', {
      templateUrl: 'templates/tab-account.html',
      controller: 'AccountController'
    })
    //do i need a tab component? brain hurts.
}())
