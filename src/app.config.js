routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
  $urlRouterProvider.otherwise('/');
}