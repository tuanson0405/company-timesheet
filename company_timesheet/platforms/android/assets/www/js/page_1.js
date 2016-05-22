function openPage() {
    $.mobile.changePage("index.html", {
        reloadPage: true,
        transition: "slide",
        reverse: true
    });
}

function showProgress() {
    $cordovaProgress.showSimple(true);
}

