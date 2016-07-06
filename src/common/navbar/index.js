import angular from 'angular';
import controller from './navbar.controller';
import template from './navbar.template.html'
import './navbar.style.css';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default angular.module('navbar', [])
  .component('navbar', navbarComponent)
  .name;