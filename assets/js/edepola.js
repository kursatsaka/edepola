$(document).ready(function(){$(".kim_kullanmali").owlCarousel({loop:true,autoplay:false,navigation:true,items:4,pagination:false,itemsDesktop:[1199,4],itemsTablet:[959,3],itemsMobile:[699,1],});$(".musteri_yorumlari").owlCarousel({loop:true,autoplay:false,navigation:false,items:1,autoHeight:true,itemsDesktop:[1199,1],itemsTablet:[959,1],itemsMobile:[699,1],});$('.mc_menu img').click(function(){$('.mc_menu img.c').removeClass('c');$(this).addClass('c');$('.mc_icerik.c').hide();$selfMc=$('.mc_icerik[data-no="'+$(this).attr('data-no')+'"]');$selfMc.fadeIn();$selfMc.addClass('c');});$('.mc_menu img:first').click();$('.hesapAcBtn').click(function(){$('.hecimHesaplama').slideToggle();return false;});});