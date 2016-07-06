import angular from 'angular';
import controller from './home.controller';
import template from './home.template.html';

let component = {
  template,
  controller
};

export default angular.module('home', [])
  .component('home', component)
  .name;