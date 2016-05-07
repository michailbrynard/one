/*global angular, console, window, alert, ionic */
angular.module('one.controllers.home', [])

  // .controller('Home2Ctrl', function ($scope, $state, $ionicLoading, $cordovaFileTransfer, $cordovaCamera, Upload, User, Auth, API, $ionicPopup, CameraService) {
  //   // if (!Auth.isAuthed()) {
  //   //     $state.go('login');
  //   // }

  //   $scope.getPicture = function() {CameraService.takePicture();}
  // });

  .controller('HomeCtrl', function ($scope, $state, Auth, $ionicPopup, User) {

    $scope.data = {
      myfeed: true,
      world: false
    };
      $scope.switchToMyfeed = function() {
      $scope.data.world = false;
      $scope.data.myfeed = true;
    }
      $scope.switchToWorld = function() {
      $scope.data.world = true;
      $scope.data.myfeed = false;
    }


    $scope.logOut = function (user) {
      $ionicPopup.alert({title: 'Logging out, goodbye'});
      Auth.logout();
      $state.go('login');
    };

  });