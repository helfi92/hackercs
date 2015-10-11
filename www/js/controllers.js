angular.module('starter.controllers', ['ngSanitize'])

.controller('homeCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
})

.controller('ChatsCtrl', function($scope, Categories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categories = Categories.all();
  $scope.remove = function(chat) {
    Categories.remove(chat);
  };
})

.controller('ChapterCtrl', function($scope, $stateParams, Categories) {
  $scope.categorie = Categories.getSubCategories($stateParams.categorieId);
})
.controller('VideoCtrl', function($scope, $stateParams, Categories,$sce) {
  $scope.subCategorie = Categories.getVideos($stateParams.categorieId,$stateParams.videoId);
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
