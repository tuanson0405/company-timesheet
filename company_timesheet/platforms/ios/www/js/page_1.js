function openPage() {
    $.mobile.changePage("index.html", {
        reloadPage: true,
        transition: "slide",
        reverse: true
    });
}

function showProgress() {
    $.getScript('/js/progressIndicator.js', function() {
        // script is now loaded and executed.
        // put your dependent JS here.
        ProgressIndicator.showSimple(true);
        timeout(5000);
    });
}

function timeout(time) {
    $timeout(function() {
        hide();
    }, time);

}

function hide() {
    $.getScript('/js/progressIndicator.js', function() {
        // script is now loaded and executed.
        // put your dependent JS here.
        ProgressIndicator.hide();
    });
}