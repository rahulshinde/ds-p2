var w = window.innerWidth,
    h = window.innerHeight,
    // left_detector1 = w * 0.45,
    // left_detector2 = w * 0.15,
    right_detector1 = w * 0.65,
    right_detector2 = w * 0.85,
    bottom_detector1 = h * 0.65,
    bottom_detector2 = h * 0.85;

$(document).ready(function () {
    document.onmousemove = trackMouseMovement;
    $('#link2').on('click', toggleLink2);
    $('#close2').on('click', toggleLink2);
});

// Links

toggleLink2 = function() {
    $('#close2').toggle();
    $('.project2').toggleClass('open');
    $('.project2').scrollTop(0);
}


// Hot Corners 

trackMouseMovement = function() {
    console.log(event.clientY);

    // if ($('.left_tease').hasClass('show')) {
    //     removeClassL();
    // }
    // else {
    //     addClassL();
    // }

    if ($('.right_tease').hasClass('show')) {
        removeClassR();
    }
    else {
        addClassR();
    }

    if ($('.bottom_tease').hasClass('show')) {
        removeClassB();
    }
    else {
        addClassB();
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

addClassB = function() {
    if (event.clientY > bottom_detector1) {
        $('.bottom_tease').addClass('show');
    }

    else {
        return;
    }
}

removeClassB = function() {
    if (event.clientY > bottom_detector2) {
        $('.bottom').addClass('show');
    }
    else if (event.clientY <= bottom_detector1) {
        $('.bottom_tease').removeClass('show');
        $('.bottom').removeClass('show');
    }
    else {
        return;
    }
}