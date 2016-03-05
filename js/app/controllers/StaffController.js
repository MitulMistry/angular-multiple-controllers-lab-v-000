function StaffController() {
  var vm = this;

  vm.name = 'bob2';
  vm.email = 'bob2@bob.com';
  vm.phone = '123-456-7890';
}

angular
  .module('app')
  .controller('StaffController', StaffController);