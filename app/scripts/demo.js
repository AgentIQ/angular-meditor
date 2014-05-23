/* angular-meditor demo
 */

var app = angular.module('meditorDemo', [
  'ngRoute',
  'angular-meditor'
]).config(function($routeProvider) {
  'use strict';

  $routeProvider
  .when('/', {
    controller: 'MainCtrl'
  }).otherwise({
    redirectTo: '/'
  });

});

app.controller('MainCtrl', function($rootScope) {
  'use strict';

  return $rootScope.$on('$routeChangeSuccess', function() {
  });
});
