function openPage() {
    window.location = "TopScreen.html";
}

function login(){
    var name = document.getElementById('userName');
    var pass = document.getElementById('passWord');
    if(name.value.localeCompare("")==0){
        alert("User name is incorrect!");
    }else if(pass.value.localeCompare("")==0){
        alert("Password is incorrect!");
    }else{
        openPage();
    }
}


