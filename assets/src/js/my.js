var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var player2;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'JAOn10zOOak',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '315',
    width: '560',
    videoId: '8PEgNTJK-TA',
    events: {
      'onStateChange': onPlayerStateChange2
    }
  });
}

function onPlayerStateChange(state) {
  console.log(state);
  if (state.data === 0) {
    stopVideo();
  }
}

function onPlayerStateChange2(state) {
  console.log(state);
  if (state.data === 0) {
    stopVideo2();
  }
}

function startVideo() {
  player.playVideo();
  document.getElementById("videoCover").style.display = 'none';
  document.getElementById("videoPlayer").style.display = 'block';
}

function stopVideo() {
  document.getElementById("videoPlayer").style.display = 'none';
  document.getElementById("videoCover").style.display = 'block';
}

function startVideo2() {
  player2.playVideo();
  document.getElementById("videoCover2").style.display = 'none';
  document.getElementById("videoPlayer2").style.display = 'block';
}

function stopVideo2() {
  document.getElementById("videoPlayer2").style.display = 'none';
  document.getElementById("videoCover2").style.display = 'block';
}