function closeBox(){$(".closeBtn").click(function(i){i.preventDefault(),$(".background").fadeOut(),$(".lightbox").fadeOut(function(){$(".lightboxContents").empty(),$(".lightbox h2").remove()})})}function lightboxOpen(i){var t=$("#"+i+" .col-lg-3"),n=t.length,o=$("#"+i).siblings(".title").text();$(".lightbox").prepend("<h2>"+o+"</h2>");for(var e=0;n>e;e++)$(".lightboxContents").append("<li>"+$(t[e]).html()+"</li>");$(".lightboxContents li a.more").remove(),$(".lightbox").css({top:$(window).height()/2-$(".lightbox").outerHeight()/2}),$(".background").fadeIn(),$(".lightbox").fadeIn(),closeBox(),$(".lightboxContents li a").hover(function(){var i=$(this),t=i.children("img"),n=t.attr("src").split(".png");-1===i.children("img").attr("src").indexOf("hover")&&t.attr("src",n[0]+"_hover.png")},function(){var i=$(this),t=i.children("img"),n=t.attr("src").split("_hover");-1!==i.children("img").attr("src").indexOf("hover")&&t.attr("src",n[0]+n[1])})}function vf_overlaySetup(){var i;$(".mainImg").load(function(){$(".hoverImage .overlay").each(function(){i=$(this),i.height(i.siblings("img").height()),i.width(i.siblings("img").width()),i.siblings(".icons").find(".row").width(.85*i.siblings("img").width()),i.css({opacity:"0"})}),$(".hoverImage .title").each(function(){i=$(this),i.css({top:"-70px",left:i.siblings("img.mainImg").width()/2-i.width()/2}),i.show()}),$(".hoverImage .icons").each(function(){i=$(this),i.css({bottom:-i.siblings("img").height()}),i.show()}),$(".hoverImage").hover(function(){i=$(this),i.children(".overlay").stop().animate({opacity:"0.44"}),i.children(".title").stop().animate({top:"20px"}),i.children(".icons").stop().animate({bottom:"30px"},function(){i.children(".icons").css("z-index","1002"),i.find(".icons a").addClass("open")})},function(){i=$(this),i.find(".icons a").removeClass("open"),i.children(".overlay").stop().animate({opacity:"0"}),i.children(".title").stop().animate({top:"-70px"}),i.children(".icons").css("z-index","1000").stop().animate({bottom:-i.children(".icons").siblings("img.mainImg").height()})}),$(".hoverImage .icons a").hover(function(){if(i=$(this),-1===i.children("img").attr("src").indexOf("hover")){var t=i.children("img"),n=t.attr("src").split(".png");t.attr("src",n[0]+"_hover.png")}},function(){if(i=$(this),-1!==i.children("img").attr("src").indexOf("hover")){var t=i.children("img"),n=t.attr("src").split("_hover");t.attr("src",n[0]+n[1])}}),$(".hoverImage .icons a").unbind().click(function(t){if(t.preventDefault(),i=$(this),i.hasClass("more")){var n=$(this),o=$(n).closest(".icons").attr("id");lightboxOpen(o)}})})}function lightboxInit(){$("body").append('<div class="background closeBtn">&nbsp;</div><div class="lightbox"><a href="#" class="closeBtn"></a><ul class="lightboxContents"></ul></div>'),$(".lightbox").css({left:$(window).width()/2-$(".lightbox").width()/2})}$(document).ready(function(){var i=$(window).width();i>1e3&&(vf_overlaySetup(),lightboxInit())}),$(window).resize(function(){var i=$(window).width();i>1e3&&vf_overlaySetup()});