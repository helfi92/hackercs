angular.module('starter.services', [])
.factory('videosFactory', function() {
  // Might use a resource here that returns a JSON array




  // Some fake testing data
  var videos = $rootScope.videos;



  return {
    
    //id starts at 1
    getModuleVideos : function(id){
      var moduleVideos = [];
      for(var i = 0 ; i < videos.length ; i++){
        if(videos[i].module_id_id == id){
          moduleVideos.push(videos[i]);
        }
      }
      return moduleVideos;
    },

    getListOfModules : function(){
      //return $http.get('/modules');
    },
    getListOfVideos : function(){
      return 5;
    }


  };
});