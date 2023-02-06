var cover = document.getElementById("cover");
var coverIndex = 0;
var galleryIndex = 0;
window.addEventListener('load', function(){
    document.querySelector('html').style.visibility = "visible";
},1);

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

    if(galleryIndex === 0){
        galleryIndex++;
        document.getElementById("galleryInner").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1063862971710836866/1071969189914492928/2023-02-05_18.49.05.png')";
    }else if (galleryIndex == 1){
        galleryIndex++;
        document.getElementById("galleryInner").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1063862971710836866/1071969201918582784/2023-02-05_18.52.38.png')";
    }else if(galleryIndex == 2){
        galleryIndex = 0;
        document.getElementById("galleryInner").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1063862971710836866/1071974138715050095/2023-02-05_21.02.13.png')";
    }
}, 5000);