/* global $, alert, console */

$(document).ready(function () {
    
    'use strict';

    // nav bar background
    $(window).scroll(function () {
        if ($(window).scrollTop() < ($(window).height())) {
            $('.nav-bar').height(0)
        } else if ($(window).scrollTop() > ($(window).height() - 1)) {
            $('.nav-bar').height(60)
        }
    });
    $(window).mousemove(function (e) {
        if ((e.pageY - $(window).scrollTop()) >= 60 && $(window).scrollTop() >= 300) {
            $('.nav-bar').fadeOut(100);            
        } else if ((e.pageY - $(window).scrollTop()) < 60 || $(window).scrollTop() < 300) {
            $('.nav-bar').fadeIn(100);
        } else if ($(window).scrollTop() < 300 && (e.pageY - $(window).scrollTop()) >= 60){
            $('.nav-bar').fadeIn(100);            
        }
    });
    // adjust header height
    let myHeader = $('.header');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    })

    // links add active class
    $('.links li').click(function () { 
        $(this).addClass('active').siblings().removeClass('active');
        let sectSelected = $(this).children().data('val');
        $('html, body').animate({
            scrollTop: ($('#' + sectSelected).offset().top) - 60
        }, 1000)
    })

    // add slider plugin  
    $('.slider').bxSlider({
        pager: false
    });

    $('.slider').each(function () {
        $(this).css('padding-top', ($(window).height() - $('.slider li').height()) /2 )
    })
    $(window).resize(function () {
        $('.slider').each(function () {
            $(this).css('padding-top', ($(window).height() - $('.slider li').height()) / 2)
        })
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
            $('.slider').slideUp(300);
        } else {
            $('.slider').slideDown(300);            
        }
    })

    // our services p
    $('.about .about-section p').each(function () {
        
        $(this).attr('value', $(this).text());
        $(this).html($(this).text().substr(0, 100) + '...' + '<span>more!</span>');
        $(this).addClass('read');
        $(this).click(function () {
            $(this).toggleClass('read');
            if ($(this).hasClass('read')) {
                $(this).html($(this).text().substr(0, 100) + '...' + '<span>more!</span>');
            } else {
                $(this).text($(this).attr('value'))
            }
        })
    });

    // our team 
    $('.our-team .box .member .overlay').hover(function () {
        $(this).fadeToggle(2000);
    });
  
    // my slide is sliding
    (function autoSlide() {
        
        $('.sliding .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1000).fadeOut(500, function () {
                    $(this).removeClass('active').next().addClass('active').slideDown(2000);
                    autoSlide();
                })
            } else {
                $(this).delay(1000).fadeOut(500, function () {
                    $(this).removeClass('active');
                    $('.sliding div').eq(0).addClass('active').slideDown(2000);

                    autoSlide();
                })
            }
        })

    }());
    // start projects
    
    $('.projects .shuffleButtons span').click(function () {

        $(this).addClass('select').siblings().removeClass('select');

        $('.projects .shuffleImgs div').removeClass('selected').removeClass('rotate');
        $('.' + $(this).data('typ')).addClass('selected');
    })
     
    $("body").niceScroll();

   





});


