export class AuthController {

  constructor($auth, $state) {
    'ngInject';
    this.$auth = $auth;
    this.$state = $state;
  }


  register() {
    var vm = this;
    this.$auth.signup(this.user).then(function (token) {
      vm.$auth.setToken(token);
    });
  }

  login() {
    var vm = this;
    // this.$auth.login(this.login.user).then(function (token) {
    //   vm.$auth.setToken(token);
    // });
    this.$auth.login(this.login.user).then(function (result) {
      vm.$auth.setToken(result.data.token);
      vm.user = JSON.stringify(result.data.email);
      localStorage.setItem('user', vm.user);
      vm.user = result.data.email;
      vm.$state.go('home', {});
      // console.log(vm.userEmail);
    });

  }
}


