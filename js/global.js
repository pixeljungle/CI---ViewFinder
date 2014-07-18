function closeBox(){
	$('.closeBtn').click(function(e){
		e.preventDefault();
		$('.background').fadeOut();
		$('.lightbox').fadeOut(function(){
			$('.lightboxContents').empty();
			$('.lightbox h2').remove();
		});
	});
}

function lightboxOpen(itemToOpen){
	var itemsNeeded = $('#'+itemToOpen+ ' .col-lg-3'),
		itemLength = itemsNeeded.length,
		itemTitle = $('#'+itemToOpen).siblings('.title').text();
	$('.lightbox').prepend('<h2>'+itemTitle+'</h2>');
	for (var i = 0; i < itemLength; i++) {
		$('.lightboxContents').append('<li>'+$(itemsNeeded[i]).html()+'</li>');
	}
	$('.lightboxContents li a.more').remove();
	$('.lightbox').css({
		top: ($(window).height() /2) - ($('.lightbox').outerHeight() /2)
	});
	$('.background').fadeIn();
	$('.lightbox').fadeIn();
	closeBox();
	$('.lightboxContents li a').hover(function(){
		var $this = $(this),
			$img = $this.children('img'),
			imgSrc = $img.attr('src').split('.png');
		if($this.children('img').attr('src').indexOf('hover')===-1){
			$img.attr('src', imgSrc[0]+'_hover.png');
		}
	}, function(){
		var $this = $(this),
			$img = $this.children('img'),
			imgSrc = $img.attr('src').split('_hover');
		if($this.children('img').attr('src').indexOf('hover')!==-1){
			$img.attr('src',imgSrc[0]+imgSrc[1]);
		}
	});
}

function vf_overlaySetup(){
	var $this;
	$('.mainImg').load(function(){
		$('.hoverImage .overlay').each(function(){
			$this = $(this);
			$this.height($this.siblings('img').height());
			$this.width($this.siblings('img').width());
			$this.siblings('.icons').find('.row').width($this.siblings('img').width()*0.85);
			$this.css({
				opacity: '0'
			});
		});
		$('.hoverImage .title').each(function(){
			$this = $(this);
			$this.css({
				'top': '-70px',
				'left': ($this.siblings('img.mainImg').width() / 2) - ($this.width() / 2)
			});
			$this.show();
		});
		$('.hoverImage .icons').each(function(){
			$this = $(this);
			$this.css({
				bottom: -$this.siblings('img').height()
			});
			$this.show();
		});
		$('.hoverImage').hover(function(){
			$this = $(this);
			$this.children('.overlay').stop().animate({
				opacity: '0.44'
			});
			$this.children('.title').stop().animate({
				top: '20px'
			});
			$this.children('.icons').stop().animate({
				bottom: '30px'
			}, function(){
				$this.children('.icons').css('z-index','1002');
				$this.find('.icons a').addClass('open');
			});
		}, function(){
			$this = $(this);
			$this.find('.icons a').removeClass('open');
			$this.children('.overlay').stop().animate({
				opacity: '0'
			});
			$this.children('.title').stop().animate({
				top: '-70px'
			});
			$this.children('.icons').css('z-index','1000').stop().animate({
				bottom: -$this.children('.icons').siblings('img.mainImg').height()
			});
		});
		$('.hoverImage .icons a').hover(function(){
			$this = $(this);
			if($this.children('img').attr('src').indexOf('hover')===-1){
				var $img = $this.children('img'),
					imgSrc = $img.attr('src').split('.png');
				$img.attr('src', imgSrc[0]+'_hover.png');
			}
		}, function(){
			$this = $(this);
			if($this.children('img').attr('src').indexOf('hover')!==-1){
				var $img = $this.children('img'),
					imgSrc = $img.attr('src').split('_hover');
				$img.attr('src',imgSrc[0]+imgSrc[1]);
			}
		});
		$('.hoverImage .icons a').unbind().click(function(e){
			e.preventDefault();
			$this = $(this);
			if($this.hasClass('more')){
				var clickedLink = $(this),
				itemToOpen = $(clickedLink).closest('.icons').attr('id');
				lightboxOpen(itemToOpen);
			}
		});
	});
}

function lightboxInit(){
	$('body').append('<div class="background closeBtn">&nbsp;</div><div class="lightbox"><a href="#" class="closeBtn"></a><ul class="lightboxContents"></ul></div>');
		$('.lightbox').css({
		left: ($(window).width() /2) - ($('.lightbox').width() / 2)
	});
}

$(document).ready(function() {
	var viewPortWidth = $(window).width();
	if (viewPortWidth > 1000) {
		vf_overlaySetup();
		lightboxInit();
	}
	
});

$(window).resize(function(){
	var viewPortWidth = $(window).width();
	if (viewPortWidth > 1000) {
		vf_overlaySetup();
	}
});