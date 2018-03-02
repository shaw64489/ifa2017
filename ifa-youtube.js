//You can see related documentation and compose own request here: https://developers.google.com/youtube/v3/docs/search/list
//You must enable Youtube Data API v3 and get API key on Google Developer Console(https://console.developers.google.com)

var playlistId = 'PLs18hw3X0NC5UYWFqlGfQYAkhEbyeJw9o';
var maxResults = 50;
var API_key = 'AIzaSyDqiB8Q5YwFjv4UvGmGkEYQ080orEW9dq4';

var yURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + playlistId + '&maxResults=8&key=' + API_key;

var apiStatus = 0;

var app = angular.module('myApp', []);
app.controller('youtubeCtrl', function ($scope, $http) {
    $http.get(yURL)
        .then(function (response) {

            $(".contYoutubebody").show();

            $scope.playlist = response.data.items;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
            apiStatus = response.status;
            //console.log(response.data.items);
            var allYoutubeIds = [];
            for (var i = 0; i < $scope.playlist.length; i++) {
                allYoutubeIds.push($scope.playlist[i].snippet.resourceId["videoId"]);

            }

            $scope.allYoutubeIds = allYoutubeIds.toString();

            $('a.eventYTplaylist').click(function (event) {

                window.history.pushState({}, '', '?ids=' + allYoutubeIds + '');

                $.get('../../events/mwc/event-yt-playlist?ids=' + allYoutubeIds + '', function (data) {
                    $("div.yt-event-playlist-overlay").append(data);
                });

                $("a.event-YT-video-close").css("display", "block");
                $("div.yt-event-playlist-overlay").css("height", "100%");

            });

            //    event-yt-playlist.html?ids=gsZgEcJZfw0

            console.log(allYoutubeIds);

        }, function (response) {
            //Second function handles error
            $(".contYoutubebody").hide();
            alert("Please check playlistId/API_key, status code:" + response.status);

        });
});