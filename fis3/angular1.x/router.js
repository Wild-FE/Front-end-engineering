angular.module('myApp.Router', ['ngRoute', 'myApp.service', 'ngSanitize'])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: './component/home.html',
        controller: 'mainCtrl'
      })
      .when('/cnode', {
        templateUrl: './component/cnode/cnode.html',
        controller: 'mainCtrl'
      })
      .when('/cnode/:id', {
        templateUrl: './component/cnode/content.html',
        controller: 'mainCtrl'
      })
      .when('/movie', {
        templateUrl: './component/movie/index.html',
        controller: 'mainCtrl'
      })
      .when('/aboutme', {
        templateUrl: './component/aboutme.html',
      })
      .when('/in_theaters/:page', {
        templateUrl: './component/movie/in_theaters/in_theaters.html',
        controller: 'in_theatersCtrl'
      })
      .when('/coming_soon/:page', {
        templateUrl: './component/movie/coming_soon/coming_soon.html',
        controller: 'coming_soonCtrl'
      })
      .when('/top250/:page', {
        templateUrl: './component/movie/top250/top250.html',
        controller: 'top250Ctrl'
      })
      .when('/search/:keyword/:page', {
        templateUrl: './component/movie/search/search.html',
        controller: 'searchCtrl'
      })
      .otherwise('/404', {
        templateUrl: './component/404.html',
        controller: 'mainCtrl'
      })
  }])


