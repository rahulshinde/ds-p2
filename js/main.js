var w = window.innerWidth,
    left_detector1 = w * 0.4;
    left_detector2 = w * 0.1;
    right_detector1 = w * 0.6;
    right_detector2 = w * 0.9;

$(document).ready(function () {
    document.onmousemove = trackMouseMovement;
});

trackMouseMovement = function() {
    if ($('.left_tease').hasClass('show')) {
        removeClassL();
    }
    else {
        addClassL();
    }

    if ($('.right_tease').hasClass('show')) {
        removeClassR();
    }
    else {
        addClassR();
    }

}

addClassL = function() {
    if (event.clientX < left_detector1) {
        $('.left_tease').addClass('show');
    }

    else {
        return;
    }
}

removeClassL = function() {
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

addClassR = function() {
    if (event.clientX > right_detector1) {
        $('.right_tease').addClass('show');
    }

    else {
        return;
    }
}

removeClassR = function() {
    if ((event.clientX) > right_detector2) {
        $('.right').addClass('show');
    }
    else if (event.clientX <= right_detector1) {
        $('.right_tease').removeClass('show');
        $('.right').removeClass('show');
    }
    else {
        return;
    }
}