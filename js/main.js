 $(document).ready((function() {

    SmoothScroll({
        stepSize: 60,
        animationTime: 600,
    })

    $("a.anchor").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

     // $('.hello-slider').slick({
     //     slidesToShow: 1,
     //     infinite: true,
     //     autoplay: true,
     //     autoplaySpeed: 2000,
     //     speed: 500,
     //     slidesToScroll: 1,
     //     arrow: false,
     //     fade: true,
     //     cssEase: 'linear'
     // });

    $('.slider-study').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        infinite: false,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
        },
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="sl-arr sl-arr_prev"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="50mm" height="50mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 5000 5000"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[.fil0 {fill:black;fill-rule:nonzero}]]></style></defs><g id="Слой_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><polygon class="fil0" points="2321,380 2504,562 2608,666 2504,769 1385,1893 1116,2164 1498,2164 4724,2164 4871,2164 4871,2311 4871,2564 4871,2711 4724,2711 1498,2711 1116,2711 1385,2982 2504,4106 2608,4209 2504,4313 2321,4495 2217,4599 2114,4495 173,2541 70,2438 173,2334 2114,380 2217,276 "/></g></svg></button>',
        nextArrow: '<button class="sl-arr sl-arr_next"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="50mm" height="50mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 5000 5000"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[.fil0 {fill:black;fill-rule:nonzero}]]></style></defs><g id="Слой_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><polygon class="fil0" points="2619,4495 2437,4313 2333,4209 2437,4105 3555,2982 3825,2711 3443,2711 217,2711 70,2711 70,2564 70,2311 70,2163 217,2163 3443,2163 3825,2163 3555,1893 2437,769 2333,666 2437,562 2619,380 2723,276 2827,380 4768,2334 4871,2437 4768,2541 2827,4494 2723,4599 "/></g></svg></button>',
        fade: false
    });

    var
        user_block = $('.user_block'),
        overlay = $('#overlay'),
        body = $('body'),
        pop_close = $('.pop_close');

    $(document).on('click', ".pop_close", function () {
        overlay.stop().fadeOut(200);
        user_block.stop().fadeOut(200);
    });

    overlay.click(function () {
        overlay.stop().fadeOut(200);
        user_block.stop().fadeOut(200);
    });

    $('.cat-pop1').click(function () {
        v_center('#cat-popup1');
        overlay.stop().fadeIn(200);
        $('#cat-popup1').stop().fadeIn(200);
    });

    var win_height;
    var win_scroll;
    var frm_height;

    function v_center(elem) {
        var user_block = $('' + elem);
        frm_height = user_block.outerHeight();
        win_height = $(window).height();
        win_scroll = $(window).scrollTop();
        if (frm_height >= win_height) {
            user_block.css('top', win_scroll + 40 + 'px');
        } else user_block.css('top', win_scroll + ((win_height - frm_height) / 2) + 'px');
    }

 }))