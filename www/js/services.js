angular.module('starter.services', [])

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array




  // Some fake testing data
  var categories = [{
    id: 0,
    name: 'Introduction to Computer Science',
    subCategories : [
      {
        id : 0,
        name : 'Addition Algorithm',
        link : [
          {
          src : 'https://www.youtube.com/embed/mWRVHfBayYE',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      }, 
      {
        id : 1,
        name : 'Binary Number Representation',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        
        id : 2,
        name : 'Decimal to Binary Conversion',
        link : [
          {
          src : 'https://www.youtube.com/embed/VgNxCKNfuGg',
          },
          {
          src : 'https://www.youtube.com/embed/VgNxCKNfuGg',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 3,
        name : 'Array Expansion Time Complexity',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 4,
        name : 'Insertion Sort Algorithm and Time Complexity',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 5,
        name : 'The List Abstract Data Type (ADT)',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',
      },
      {
        id : 6,
        name : 'Stack and Queue Abstract Data Types (ADT)',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 7,
        name : 'Mathematical Induction (Proof by Induction)',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 8,
        name : 'Recursion',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 9,
        name : 'Recursive Decimal to Binary Conversion',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 10,
        name : 'Recursive Power Algorithms',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 11,
        name : 'Binary Search',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 12,
        name : 'Recurrences',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 13,
        name : 'The Tree Abstract Data Type (ADT)',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 13,
        name : 'Binary Trees',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 14,
        name : 'Binary Search Tree',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      },
      {
        id : 15,
        name : 'Priority Queues using Heaps',
        link : [
          {
          src : 'https://www.youtube.com/embed/8dWo3_FVMjU',
          }
        ],
        face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png',

      }
    ],
    face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png'
  }, {
    id: 1,
    name: 'Computer Science Challenges',
    lastText: 'Hey, it\'s me',
    face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png'
  }, {
    id: 2,
    name: 'Miscellaneous',
    lastText: 'I should buy a boat',
    face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png'
  }, {
    id: 3,
    name: 'Advanced C Programming',
    lastText: 'Look at my mukluks!',
    face: 'http://hackercs.com/media/videos/hackercslogo_resizedsquare.png'
  }];



  return {
    all: function() {
      return categories;
    },
    remove: function(categorie) {
      categories.splice(categories.indexOf(categorie), 1);
    },
    
    getSubCategories: function(categorieId) {
      
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(categorieId)) {
          return categories[i];
        }
      }
      return null;
    },
    getVideos: function(categorieId,subCategorieId) {
      
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id == parseInt(categorieId)) {
          for(var j = 0; j < categories[i].subCategories.length;j++){
            if(categories[i].subCategories[j].id == parseInt(subCategorieId)){
              return categories[i].subCategories[j];
            }
          }
        }
      }
      return null;



    },


  };
});
