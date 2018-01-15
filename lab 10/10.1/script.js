
function makeStory(){

    var place = document.getElementById('places').value;
    var adj = document.getElementById('adjective').value;
    var name = document.getElementById('person').value;

    var prop = name + ' a vizitat ' + adj+' ' + place;

    document.getElementById('story').innerHTML = prop;
    
}
document.getElementById('story-button').addEventListener('click', makeStory);


