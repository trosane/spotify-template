var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=artist&query='
var albumUrl = 'https://api.spotify.com/v1/artists/'
var songUrl = 'https://api.spotify.com/v1/albums/'
var myApp = angular.module('myApp', []);

//sets up the controller and contains the function to get artist data

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getArtists = function() {
  	$scope.songs = [];
  	$scope.albums = [];
    $http.get(baseUrl + $scope.album).success(function(response){
      var artistInfo = response.artists.items;
      	artistData = $scope.artists = artistInfo;   
    });
  }

//gets album data

  $scope.getAlbums = function(obj) {
  	$scope.songs = [];
  	$scope.albums = [];
  	var artistID = obj.target.attributes.class.value;
    $http.get(albumUrl + artistID + '/albums').success(function(response){
      albumData = $scope.albums = response.items;    
    });
  }

  //gets song data

  $scope.getSongs = function(obj) {
  	var albumID = obj.target.attributes.class.value;
    $http.get(songUrl + albumID + '/tracks').success(function(response){
      songData = $scope.songs = response.items;   
    });

  }

  // plays song when clicked
  
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
  }
});

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});
