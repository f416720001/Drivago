
masonry();
$(function () {
    offCanvas();
});

/* =========================================
 *  masonry
 *  =======================================*/

function masonry() {

    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
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
