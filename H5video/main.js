/**
 * Created by hp on 2016/10/11.
 */
var media=document.getElementById("media");
var play=document.getElementById("play");
var stop=document.getElementById("stop");
var mute=document.getElementById("mute");
var result=document.getElementById("result");
var one=document.getElementById("one");
var progress=document.getElementById("progress");
var progressResult=document.getElementById("progressResult");
var fullscreen=document.getElementById("fullscreen");
console.log(media);
console.log(media.volume);
//音量初始值为50%；
media.volume=0.5;
//点击播放
play.onclick=function(){
    media.play();
}
//点击暂停
stop.onclick=function(){
    media.pause();
}
//音量控制条
range.onmousemove=function(){
    console.log(this.value);
    result.innerHTML=this.value;
    media.volume=parseInt(this.value)/100;
    console.log(result.innerHTML);
    console.log(typeof this.value);
}
//静音切换
mute.onclick=function(){
    media.muted=(media.muted==true?false:true);
    this.innerHTML=(media.muted==true?'开启':'静音');
    //console.log(result);
    //media.muted=true;
    /*if(media.muted==true){
     media.muted=false;
     }else{
     media.muted=true;
     }*/
    //console.log(media.muted);
}
var b=false;
//播放暂停切换
one.onclick=function(){
    if(b==false){
        b=true;
        media.play();
        this.innerHTML='停止';
        console.log(this.innerHTML);
    }else{
        b=false;
        media.pause();
        this.innerHTML='播放';
    }
    //console.log(b);
}
//视频进度条
var timer=setInterval(function(){
    //视频播放结束，停止进度
    if(media.ended==true){
        clearInterval(timer);
    }
    progress.max=parseInt(media.duration);
    progress.value=parseInt(media.currentTime);
    progressResult.innerHTML=parseInt(media.currentTime)+"/"+parseInt(media.duration);
},1000);
//点击全屏
fullscreen.onclick=function(){
    //document.webkitExitFullscreen();
    //media.fullScreenEnabled;
    media.webkitRequestFullscreen();
}
//点击视频推出全屏
media.onclick=function(){
    this.webkitExitFullscreen();
}
/*
 全屏
 * if(element.requestFullscreen) {
 element.requestFullscreen();
 } else if(element.mozRequestFullScreen) {
 element.mozRequestFullScreen();
 } else if(element.webkitRequestFullscreen) {
 element.webkitRequestFullscreen();
 } else if(element.msRequestFullscreen) {
 element.msRequestFullscreen();
 }*/