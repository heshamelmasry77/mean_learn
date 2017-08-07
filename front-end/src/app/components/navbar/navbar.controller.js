/**
 * Created by heshamelmasry on 2017/07/18.
 */

export class NavbarController {
  constructor($auth, $state, $window) {
    'ngInject';
    this.$auth = $auth;
    this.$state = $state;
    this.$window = $window;
    this.isAuthenticated = $auth.isAuthenticated;
    this.user = localStorage.user;
    console.log(this.user);
  }

  logout() {
    var vm = this;
    this.$auth.logout();
    vm.$window.localStorage.clear();
    vm.$state.go('auth', {});
  }


}
