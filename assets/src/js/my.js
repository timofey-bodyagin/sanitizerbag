var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'JAOn10zOOak',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(state) {
  console.log(state);
  if (state.data === 0) {
    stopVideo();
  }
}

function startVideo() {
  player.setVolume(0);
  player.playVideo();
  document.getElementById("videoCover").style.display = 'none';
  document.getElementById("videoPlayer").style.display = 'block';
}

function stopVideo() {
  document.getElementById("videoPlayer").style.display = 'none';
  document.getElementById("videoCover").style.display = 'block';
}