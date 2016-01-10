angular.module('starter.controllers', ['ngSanitize'])

.controller('homeCtrl',['$scope','$http','$rootScope' ,function($scope,$http,$rootScope) {
  $rootScope.videos = [];
  $rootScope.modules= [];
  $rootScope.logo = 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png';
 
  // $http.get('/videos').then(function(res){
  //   $rootScope.videos = res.data;
  //   console.log('videos: ', res);
  // },function(res){
  //   console.log(err);
  // });
  // $http.get('/modules').then(function(res){
  //   $rootScope.modules = res.data;
  //   console.log('modules: ', $rootScope.modules);
  // });

  var url = "";
  if(ionic.Platform.isAndroid()){
    url = "/android_asset/www/";
  }

  $http.get('data/videos.json').then(function(res){
    console.log('videosjson ', res);
    $rootScope.videos = res.data;
  },function(res){
    console.log('err');
  });
  $http.get('data/modules.json').then(function(res){
    console.log('modules ', res);
    $rootScope.modules = res.data;
    console.log('modules: ', $rootScope.modules);
  },function(res){
    console.log('err');
  })


}])


.controller('ChapterCtrl', function($scope,$rootScope,$http, $stateParams) {
  
  $scope.currentModule = $rootScope.modules[$stateParams.categorieId - 1];
  $http.get('data/videos.json').then(function(res){
    $rootScope.videos = res.data;
  },function(res){
    console.log('err');
  });
  $http.get('data/modules.json').then(function(res){
    $rootScope.modules = res.data;
    console.log('modules: ', $rootScope.modules);
  },function(res){
    console.log('err');
  })
  
  $scope.getSubModules = function(categorieId) {
    
    $scope.container = [];
    for(var i = 0 ; i < $rootScope.videos.length ; i++){
      if(categorieId == $rootScope.videos[i].module_id_id){
        $scope.container.push($rootScope.videos[i]);
      }
    }

    for (var i = 0 ; i < $scope.container.length; i++){
      if($scope.container[i].video_description.indexOf('\u000A') != -1){
        $scope.container[i].video_description = $scope.container[i].video_description.substr(0, $scope.container[i].video_description.indexOf('\u000A'));  
      }           
    }
    return $scope.container;
   
  };
  $scope.container = $scope.getSubModules($stateParams.categorieId);

})

.controller('VideoCtrl', function($scope, $stateParams,$sce,$rootScope) {
  $scope.getVideo = function(categorieId,videoId) {
    $scope.container = $rootScope.videos[videoId - 1];
    $scope.container.video_url = fixVideoUrl($scope.container.video_url);
    return $scope.container;
  };

  function fixVideoUrl(url){
    var substring = 'watch?v='
    var link = url;
    if(url.indexOf(substring) > -1){
      link = url.replace("watch?v=", "embed/");
    }
    return link;
  }

  $scope.container = $scope.getVideo($stateParams.categorieId,$stateParams.videoId);

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})

