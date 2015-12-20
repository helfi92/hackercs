angular.module('starter.controllers', ['ngSanitize'])

.controller('homeCtrl',['$scope','Categories','$http','$rootScope' ,function($scope, Categories,$http,$rootScope) {
  $scope.categories = Categories.all();
  $rootScope.videos = [];
  $rootScope.modules= [];
  $rootScope.logo = 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png';
 
  $http.get('/videos').then(function(res){
    $rootScope.videos = res.data;
    console.log('videos: ', res);
  },function(res){
    console.log(err);
  });
  $http.get('/modules').then(function(res){
    $rootScope.modules = res.data;
    console.log('modules: ', $rootScope.modules);
  });


}])

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

.controller('ChapterCtrl', function($scope,$rootScope,$http, $stateParams, Categories) {
  
  $scope.currentModule = $rootScope.modules[$stateParams.categorieId - 1];
  console.log('selected module: ', $scope.currentModule);
  //$scope.categorie = Categories.getSubCategories($stateParams.categorieId);
  $http.get('/videos').then(function(res){
    $rootScope.videos = res.data;
    console.log('videos: ', res);
  },function(res){
    console.log(err);
  });
  $http.get('/modules').then(function(res){
    $rootScope.modules = res.data;
    console.log('modules: ', $rootScope.modules);
  });
  
  $scope.getSubModules = function(categorieId) {
    

    console.log('inside subModules ', categorieId);
    $scope.container = [];
    for(var i = 0 ; i < $rootScope.videos.length ; i++){
      if(categorieId == $rootScope.videos[i].module_id_id){
        $scope.container.push($rootScope.videos[i]);
      }
    }
    return $scope.container;
   
  };
  $scope.container = $scope.getSubModules($stateParams.categorieId);

  console.log('container is: ', $scope.container);
})
.controller('VideoCtrl', function($scope, $stateParams, Categories,$sce,$rootScope) {
  $scope.getVideo = function(categorieId,videoId) {
    
    console.log('inside getVideo ', categorieId);
    $scope.container = $rootScope.videos[videoId - 1];
    $scope.container.video_url = fixVideoUrl($scope.container.video_url);
   
    return $scope.container;
   
  };

  function fixVideoUrl(url){
    var substring = 'watch?v='
    var link = url;
    if(url.indexOf(substring) > -1){
      console.log('the url needs to be corrected');
      link = url.replace("watch?v=", "embed/");
    }
    console.log('new link is: ', link);
    return link;
  }

  $scope.container = $scope.getVideo($stateParams.categorieId,$stateParams.videoId);
  console.log('container of video is: ', $scope.container);
  //$scope.subCategorie = Categories.getVideos($stateParams.categorieId,$stateParams.videoId);
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
