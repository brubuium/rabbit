angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('rabbit', {
    url: '/page1',
    templateUrl: 'templates/rabbit.html',
    controller: 'rabbitCtrl'
  })

  .state('rabbit2', {
    url: '/page2',
    templateUrl: 'templates/rabbit2.html',
    controller: 'rabbit2Ctrl'
  })

  .state('pastas', {
    url: '/page3',
    templateUrl: 'templates/pastas.html',
    controller: 'pastasCtrl'
  })

  .state('pastas2', {
    url: '/page4',
    templateUrl: 'templates/pastas2.html',
    controller: 'pastas2Ctrl'
  })

  .state('buenosAires', {
    url: '/page5',
    templateUrl: 'templates/buenosAires.html',
    controller: 'buenosAiresCtrl'
  })

  .state('buenosAires2', {
    url: '/page6',
    templateUrl: 'templates/buenosAires2.html',
    controller: 'buenosAires2Ctrl'
  })

  .state('despesas', {
    url: '/page7',
    templateUrl: 'templates/despesas.html',
    controller: 'despesasCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});