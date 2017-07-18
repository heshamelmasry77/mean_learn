/**
 * Created by heshamelmasry on 2017/07/18.
 */

export class NavbarController {
  constructor($auth) {
    'ngInject';
    this.$auth = $auth;
    this.isAuthenticated = $auth.isAuthenticated;
  }

  logout() {
    this.$auth.logout();
  }
}
