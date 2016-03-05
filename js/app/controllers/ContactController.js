function ContactController() {
  var vm = this;

  vm.name = 'bob';
  vm.email = 'bob@bob.com';
  vm.phone = '123-456-7890';

  this.changeName = function () {
    vm.name = 'larry';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);