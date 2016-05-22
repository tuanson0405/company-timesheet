function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    // Register the event listener
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(e) {
    alert('Back Button is Pressed!');
    e.preventDefault();
}

function openPage() {
    window.location = "page2.html";
}

function addUser() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
//    alert('<li>' + firstName.value + " " + lastName.value + '</li>');
    $('#output').append('<li>' + firstName.value + " " + lastName.value + '</li>');
    $('#output').listview().listview('refresh');
}