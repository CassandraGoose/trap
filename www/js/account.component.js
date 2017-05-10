angular
  .module("app", ['ionic'])
  .controller('AccountController', AccountController)

function AccountController($http, $stateParams, $state) {
  const vm = this
  vm.$onInit = function() {
    console.log('heyyyyyyy bitch');
  }
}
