/*global angular, console, window, alert, ionic */
angular.module('one.controllers.home', [])
  .controller('HomeCtrl', function ($scope, $state, $ionicLoading, $cordovaFileTransfer, $cordovaCamera, Upload, User, Auth, API, $ionicPopup, CameraService) {
    // if (!Auth.isAuthed()) {
    //     $state.go('login');
    // }

    $scope.getPicture = function() {CameraService.takePicture();}
  });