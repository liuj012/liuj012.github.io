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

            $(this).click(function() {
                if ($(this).hasClass('fullscreen')) {
                    $(this).removeClass('fullscreen');
                } else {
                    $(this).addClass('fullscreen');
                }
            });
        });
    });
});

$(document).ready(function() {
    $('.sourcestext').hover(
        function() {
            let className = $(this).attr('id');
            $('.' + className).addClass('highlight');
            $('#' + className).addClass('highlight');
        },
        function() {
            let className = $(this).attr('id');
            $('.' + className).removeClass('highlight');
            $('#' + className).removeClass('highlight');
        }
    );
});

$(document).ready(function() {
    $('#one').click(function() {
        let offset = $(this).offset();
        let topPosition = offset.top + $(this).outerHeight();
        let additionalSpacing = 20;

        if ($('#insertsone').is(':visible')) {
            $('#insertsone').hide(); 
        } else {
            $('#insertsone').css({
                display: 'block',
                top: (topPosition + additionalSpacing) + 'px',
                left: offset.left + 'px'
            });
        }
    });
});


$(document).ready(function() {
    $('#sectionfive').click(function() {
        let offset = $(this).offset();
        let topPosition = offset.top + $(this).outerHeight();
        let additionalSpacing = 20;

        if ($('#insertsthree').is(':visible')) {
            $('#insertsthree').hide(); 
        } else {
            $('#insertsthree').css({
                display: 'block',
                top: (topPosition + additionalSpacing) + 'px',
                left: offset.left + 'px'
            });
        }
    });
});

$(document).ready(function() {
    $('.about').click(function() {
        if ($('.body').is(':visible') && $('.nav').is(':visible')) {
            $('.body, .nav, .images, .map').hide();
            $('.body2').addClass('body2show');
            $('.body2').removeClass('body2');  
        } else {
            $('.body, .nav, .images, .map').show();
            $('.body2show').addClass('body2');
            $('.body2').removeClass('body2show'); 
        }
    });
});

$(document).ready(function() {
    $('.indexbutton').click(function() {
        if ($('.body').is(':visible') && $('.nav').is(':visible')){
            $('.body, .nav, .images, .body2show').hide();
            $('.body3').addClass('body3show');
            $('.body3').removeClass('body3');  
        } else {
            $('.body, .nav, .images').show();
            $('.body3show').addClass('body3');
            $('.body3').removeClass('body3show'); 
        }
    });
});





