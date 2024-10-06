$(document).ready(function() {
    $('.letter').click(function() {
        let letterId = $(this).attr('id');

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        let scrollTop = $(window).scrollTop();
        let scrollLeft = $(window).scrollLeft();

        $('.img' + letterId).each(function() {
            let imgHeight = $(this).height();
            let imgWidth = $(this).width();

            let randomTop = Math.floor(Math.random() * (windowHeight - imgHeight)) + scrollTop;
            let randomLeft = Math.floor(Math.random() * (windowWidth - imgWidth)) + scrollLeft;

            $(this).css({
                display: 'block',
                position: 'absolute',
                top: randomTop + 'px',
                left: randomLeft + 'px'
            });

            $(this).draggable();
        });
    });
});