$(function () {
    var $grid = $('.grid');

    $grid.imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.project-item',
            layoutMode: 'fitRows',
        });
    });

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterValue;
        $grid.isotope({ filter: filterValue });
    });

    // find and switch checked button
    var $buttonGroup = $('.button-group');

    $buttonGroup.on('click', 'button', function() {
        console.log($(this));

        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    })


    smoothScroll.init({
        speed: 1000,
        offset: -53
    });

});

$(window).scroll(function () {

    var nav = $('.navbar');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("nav-transform");
    } else {
        nav.removeClass("nav-transform");
    }
});