angular
  .module("app")
  .controller('HomeController', HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.playSound = playSound

  vm.$onInit = function() {
    console.log("home component");
  }

  function playSound() {
    console.log("it's a trap.");
    $http.get("http://127.0.0.1:1880/")
      .then(function() {
        console.log("hello from the app");
      })
  }

}
