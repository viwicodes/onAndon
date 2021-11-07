var myAudio = document.getElementById("myAudio");
var img = document.getElementById("img");
var isPlaying = false;

function play() {
    myAudio.play()
    document.getElementById('a').innerText = ''
    
}

function pause(){
    myAudio.pause()
}

function togglePlay() {
      isPlaying ? pause()  : play();
    
};

myAudio.onplaying = function () {
    isPlaying = true;
};
myAudio.onpause = function () {
    isPlaying = false;
};
