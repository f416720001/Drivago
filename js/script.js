

$(function () {
    offCanvas();
    masonry();
});

/* =========================================
 *  masonry
 *  =======================================*/

function masonry() {

    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}

/* =========================================
 *  Off-canvas menu
 *  =======================================*/

function offCanvas() {

    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });

}
