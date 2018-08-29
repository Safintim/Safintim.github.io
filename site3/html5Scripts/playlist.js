window.onload = init;

function init(){
    
    var button = document.getElementById('addButton');
    button.onclick = handleButtonClick;
    var textInput = document.getElementById('songTextInput');
    textInput.onkeypress = handleKeyPress;
    loadPlaylist();
    
}
function handleButtonClick(){
    
    var textInput = document.getElementById('songTextInput');
    var songName = textInput.value;
    
    if(songName === ''){
        
        alert('Введите название аудиозаписи');
        
    }else{
        
        alert('Аудиозапись: ' + songName + ' добавленна в плейлист');
        
    }
    var li = document.createElement('li');
    li.innerHTML = songName;
    
    var ul = document.getElementById('playlist');
    ul.appendChild(li);
    save(songName);
    
}

function handleKeyPress(e){
    
    var button = document.getElementById('addButton');
    
    if(e.keyCode == 13){
        
        button.click();
        return false;
    }
}