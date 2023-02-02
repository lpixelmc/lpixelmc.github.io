var cover = document.getElementById("cover");
var coverIndex = 0;
setInterval(function(){
    if(coverIndex === 0){
        coverIndex++;
        cover.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1020450091192041482/1070474806769758238/bg4.png')";
    }else if(coverIndex == 1){
        coverIndex++;
        cover.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1020450091192041482/1070474807684124752/bg1.png')";
    }else if(coverIndex == 2){
        coverIndex++;
        cover.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1020450091192041482/1070474808321654784/bg2.png')";
    }else if(coverIndex == 3){
        coverIndex = 0;
        cover.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1020450091192041482/1070474809022099466/bg3.png')";
    }
},5000);