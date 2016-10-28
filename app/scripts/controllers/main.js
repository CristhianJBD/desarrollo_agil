'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('MainCtrl',['$scope','$location','$http','$rootScope', function ($scope,$location,$http,$rootScope) {

    $scope.username ="";
    $scope.password ="";

    $scope.login = function () {
      var url = 'https://api.github.com/user';

      var token = btoa($scope.username + ":" + $scope.password);
      var Authorization ={"Authorization": "Basic " + token};

      return $http.get(url,{headers:Authorization}).success(function (response) {
        $rootScope.data=response;
        $rootScope.username = $scope.username;
        $rootScope.token = token;
        $rootScope.isAuth= true;

        $location.path('/about');
        console.log(response);
      },function () {
        window.alert("Usuario o Contraseña incorrectos");
        $rootScope.isAuth = false;
      })

    }
  }]);
