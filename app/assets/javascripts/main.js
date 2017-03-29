var app = angular.module("myApp", ["ngRoute", "ngCookies", "ngFileUpload"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../templates/home.html",
    controller: "userController"
  })
  .when('/questionnaire', {
    templateUrl: "../templates/questionnaire.html",
    controller: "questionnaireController"
  })
  .when('/results', {
    templateUrl: "../templates/results.html",
    controller: "resultsController"
  })
  .when('/register', {
    templateUrl: "../templates/register.html", controller: "userController"
  })
  .when('/discover', {
    templateUrl: "../templates/discover.html",
    controller: "discoverController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
