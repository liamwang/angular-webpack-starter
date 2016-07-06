import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common';
import Components from './components';
import Routing from './app.config';

import './app.css';

let appConponent = {
  restrict: 'E',
  template: require('./app.html'),
  controller: function () {
    this.url = 'https://github.com/liamwang/angular-webpack-starter';
  },
  controllerAs: 'app'
}

export default angular.module('app', [uiRouter, Common, Components])
  .config(Routing)
  .component('app', appConponent)
  .name;