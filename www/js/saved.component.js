angular
  .module("app", ['ionic'])
  .controller('SavedController', SavedController)

function SavedController($http, $stateParams, $state) {
  const vm = this
  vm.$onInit = function() {
    console.log('heyyyyyyy bitch');
  }
}
