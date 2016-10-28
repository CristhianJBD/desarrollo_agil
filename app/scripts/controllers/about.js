'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('AboutCtrl',['$scope','$rootScope','$http' ,function ($scope,$rootScope,$http) {

    $scope.username = $rootScope.username;
    $scope.token = $rootScope.token;
    $scope.isAuth =$rootScope.isAuth;

    var Authorization ={"Authorization": "Basic " + $scope.token};


    if($scope.isAuth == true){
      repositorios();
    }

    function repositorios()  {
      $http.get('https://api.github.com/users/' + $scope.username +'/repos', {headers: Authorization}).success(function (response) {

        $scope.reposDatos = response;
        })
    }

    $scope.buscar = function () {
      var usuario = document.getElementById('usuario').value;
      $http.get('https://api.github.com/users/' + usuario, {headers: Authorization}).success(function (response) {
      $scope.data = response;
        $scope.username=usuario;
        repositorios();
        }, function () {
        window.alert('¡El usuario buscado no se encuentra registrado en github!');
        }
      )
    }


  }]);
