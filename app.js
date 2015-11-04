var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=artist&query='
var albumUrl = 'https://api.spotify.com/v1/artists/'
var songUrl = 'https://api.spotify.com/v1/albums/'
var myApp = angular.module('myApp', []);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getArtists = function() {
    $http.get(baseUrl + $scope.album).success(function(response){
      artistData = $scope.artists = response.artists.items;   
    });
  }


  $scope.getAlbums = function(obj) {
  	var artistID = obj.target.attributes.id.value;
  	console.log(obj.target.attributes.id.value);
    $http.get(albumUrl + artistID + '/albums').success(function(response){
      albumData = $scope.albums = response.items;
      console.log(albumData);    
    });

  }

  $scope.getSongs = function(obj) {
  	var albumID = obj.target.attributes.id.value;
  	console.log(obj.target.attributes.id.value);
    $http.get(songUrl + albumID + '/tracksx').success(function(response){
      songData = $scope.songs = response.items;
      console.log(songData);    
    });

  }


  /*
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  } */
});

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});


/*
var myApp = angular.module('myApp', ['spotify']);
var myCtrl = myApp.controller('myCtrl', ['$scope', 'Spotify', function ($scope, Spotify) {
	Spotify.search('Nirvana', 'artist').then(function (data) {
  	console.log(data);
	});
}]);

*/