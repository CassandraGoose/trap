(function() {

  angular.module("app")
    .component('home', {
      templateUrl: 'js/home/home.html',
      controller: 'HomeController'
    })
    .component('saved', {
      templateUrl: 'js/saved/saved.html',
      controller: 'SavedController'
    })
    // .component('account', {
    //   templateUrl: 'templates/tab-account.html',
    //   controller: 'AccountController'
    // })
    //do i need a tab component? brain hurts.
}())
