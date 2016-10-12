var w = window.innerWidth,
    left_detector1 = w * 0.4;
    left_detector2 = w * 0.1;

$(document).ready(function () {
    document.onmousemove = trackMouseMovement;
});

trackMouseMovement = function() {
    if ($('.left_tease').hasClass('show')) {
        removeClass();
    }
    else {
        addClass();
    }
}

addClass = function() {
    if (event.clientX < left_detector1) {
        $('.left_tease').addClass('show');
    }

    else {
        return;
    }
}

removeClass = function() {
    if ((event.clientX) < left_detector2) {
        $('.left').addClass('show');
    }
    else if (event.clientX >= left_detector1) {
        $('.left_tease').removeClass('show');
        $('.left').removeClass('show');
    }
    else {
        return;
    }
}