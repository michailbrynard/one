/*global angular, console, window, alert, ionic */
angular.module('one.controllers.home', [])
  .controller('HomeCtrl', function ($scope, $state, $ionicLoading, $cordovaFileTransfer, $cordovaCamera, Upload, User, Auth, API, $ionicPopup, CameraService) {
    'use strict';
    // if (!Auth.isAuthed()) {
    //     $state.go('login');
    // }

    //TODO: Figure out why Upload doesn't work on Android and FileTransfer doesnt work on iOS
    $scope.getPicture = CameraService.takePicture();
  });