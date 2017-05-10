(function() {

  angular.module("app", ['ionic'])
    .component('home', {
      templateUrl: 'templates/tab-home.html',
      controller: 'HomeController'
    })
    //do i need a tab component? brain hurts.
}())
