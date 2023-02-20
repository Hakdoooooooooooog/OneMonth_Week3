document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    var len = audios.length;

    for(var i = 0; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }else{
            audios[i].play();
        }
    }
}, true);