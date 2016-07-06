import angular from 'angular';
import controller from './about.controller';
import template from './about.template.html';

let component = {
  template,
  controller
};

export default angular.module('about', [])
  .component('about', component)
  .name;