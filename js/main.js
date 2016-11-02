var w = window.innerWidth,
    h = window.innerHeight,
    // left_detector1 = w * 0.45,
    // left_detector2 = w * 0.15,
    right_detector1 = w - 500,
    right_detector11 = w * 0.65,
    right_detector2 = w * 0.85,
    bottom_detector1 = h * 0.65,
    bottom_detector2 = h * 0.9;

$(document).ready(function () {
    document.onmousemove = trackMouseMovement;
    window.addEventListener("resize", documentResize);
    $('#resume').on('click', toggleResume);
    $('#close').on('click', toggleResume);

    $('#link1').on('click', toggleLink1);
    $('#close1').on('click', toggleLink1);

    $('#link2').on('click', toggleLink2);
    $('#close2').on('click', toggleLink2);
});

// Links

toggleResume = function() {
    $('#close').toggle();
    setTimeout(function() {
        $('#close').toggleClass('visible');
    }, 750);
    $('.resume').toggleClass('open');
}

toggleLink1 = function() {
    $('#close1').toggle();
    setTimeout(function() {
        $('#close1').toggleClass('visible');
    }, 750);
    $('.project1').toggleClass('open');
}

toggleLink2 = function() {
    $('#close2').toggle();
    setTimeout(function() {
        $('#close2').toggleClass('visible');
    }, 750);
    $('.project2').toggleClass('open');
}

// Hot Corners 

documentResize = function() {
    w = window.innerWidth,
    h = window.innerHeight,
    // left_detector1 = w * 0.45,
    // left_detector2 = w * 0.15,
    right_detector1 = w - 500,
    right_detector11 = w * 0.65,
    right_detector2 = w * 0.85,
    bottom_detector1 = h * 0.65,
    bottom_detector2 = h * 0.9;
}

trackMouseMovement = function() {

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

addClassR = function() {
    if (event.clientX > right_detector11) {
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