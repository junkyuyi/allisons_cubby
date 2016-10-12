var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngPassword']);

app.config(function($routeProvider) {
  $routeProvider
    // select game
    .when('/games', {
      templateUrl: '/partials/select.html',
      controller: 'selectController'
    })
    // all the games
    .when('/games/tictactoe', {
      templateUrl: '/partials/game_tictactoe.html',
      controller: 'ticTacToeController'
    })
    .when('/dashboard', {
      templateUrl: '/partials/dashboard.html',
      controller: 'dashboardController',
    })
    .when('/topic/:id', {
      templateUrl: '/partials/topic.html',
      controller: 'topicController',
    })
    .when('/user/:id', {
      templateUrl: '/partials/user.html',
      controller: 'userController'
    })
    .otherwise({
      redirectTo: '/games'
    });
});