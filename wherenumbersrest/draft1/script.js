$(document).ready(function() {
    $('.letter').click(function() {
        let letterId = $(this).attr('id');

        let documentWidth = $(document).width();
        let documentHeight = $(document).height();

        let scrollTop = $(window).scrollTop();
        let scrollLeft = $(window).scrollLeft();

        $('.img' + letterId).each(function() {
            let randomTop = Math.floor(Math.random() * (documentHeight - $(this).height())) + scrollTop;
            let randomLeft = Math.floor(Math.random() * (documentWidth - $(this).width())) + scrollLeft;

            $(this).css({
                display: 'block',
                top: randomTop + 'px',
                left: randomLeft + 'px'
            });

            $(this).draggable();
        });
    });
});
