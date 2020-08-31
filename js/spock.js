spockPics = {}
for(var imgId in spockPics){
    var i = document.createElement('img');
    i.src="https://aitongoldman.github.io/null-lock/img/"+spockPics[imgId];
    i.id=imgId;
    i.style="visibility:hidden;position:absolute;";
    document.body.appendChild(i);
}