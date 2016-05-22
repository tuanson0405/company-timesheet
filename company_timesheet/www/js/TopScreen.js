function disableButton(){
   document.getElementById("btStart").onclick = function() { return false; } 
}

function startClick(){
    $("#btEnd").css("background-color", "#5e9cd3");
    $("#btStart").css("background-color", "#7f7f7f");
}
function endClick(){
    $("#btStart").css("background-color", "#5e9cd3");
    $("#btEnd").css("background-color", "#7f7f7f");
}
