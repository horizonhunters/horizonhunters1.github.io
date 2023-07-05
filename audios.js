var mysong = document.getElementById("mysong1");
var icon = document.getElementById("icon1");



icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "pausa.png";
    }else{
        mysong.pause();
        icon.src = "play (1).png";
    }
}