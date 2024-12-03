// Header menu js //
	$(document).ready(function() {
		$(function($) {
		  let url = window.location.href;
		  $('.header_sec .navbar .navbar-nav > li > a').each(function() {
			if (this.href === url) {
			  $(this).closest('li').addClass('active');
			}
		  });
		});
	});

	$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
		window.location = $(this).attr('href');
	});
// Sticky-Header js //
	$(window).scroll(function(){
		if ($(this).scrollTop() > 80) {
		   $('.header_sec').addClass('header_sticky');
		} else {
		   $('.header_sec').removeClass('header_sticky');
		}
	});
// owl-carousel js
	$(document).ready(function() {
		var owl = $('.owl-carousel');
		$('.owl-carousel').owlCarousel({
			loop:false,
			margin:15,
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				575:{
					items:2,
					margin:15
				},
				768:{
					items:2,
					margin:15
				},
				1000:{
					items:2,
					margin:45
				}
			}
		});
		
	});
	$('.owl-carousel2').owlCarousel({
		loop:false,
		margin:15,
		nav:true,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			575:{
				items:2,
				margin:15
			},
			768:{
				items:3,
				margin:15
			},
			1000:{
				items:3,
				margin:70
			}
		}
	});
	$('.owl-carousel3').owlCarousel({
		loop:false,
		margin:15,
		nav:false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			575:{
				items:2,
				margin:15
			},
			768:{
				items:3,
				margin:15
			},
			1000:{
				items:5,
				margin:24
			}
		}
	});
	$('.owl-carousel-logo').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:3,
				margin:15
			},
			1000:{
				items:5,
				margin:15
			}
		}
	});
// counter js
	(function($) {
	  $.fn.countTo = function(options) {
		options = options || {};
	
		return $(this).each(function() {
		  // set options for current element
		  var settings = $.extend(
			{},
			$.fn.countTo.defaults,
			{
			  from: $(this).data("from"),
			  to: $(this).data("to"),
			  speed: $(this).data("speed"),
			  refreshInterval: $(this).data("refresh-interval"),
			  decimals: $(this).data("decimals")
			},
			options
		  );
	
		  // how many times to update the value, and how much to increment the value on each update
		  var loops = Math.ceil(settings.speed / settings.refreshInterval),
			increment = (settings.to - settings.from) / loops;
	
		  // references & variables that will change with each update
		  var self = this,
			$self = $(this),
			loopCount = 0,
			value = settings.from,
			data = $self.data("countTo") || {};
	
		  $self.data("countTo", data);
	
		  // if an existing interval can be found, clear it first
		  if (data.interval) {
			clearInterval(data.interval);
		  }
		  data.interval = setInterval(updateTimer, settings.refreshInterval);
	
		  // initialize the element with the starting value
		  render(value);
	
		  function updateTimer() {
			value += increment;
			loopCount++;
	
			render(value);
	
			if (typeof settings.onUpdate == "function") {
			  settings.onUpdate.call(self, value);
			}
	
			if (loopCount >= loops) {
			  // remove the interval
			  $self.removeData("countTo");
			  clearInterval(data.interval);
			  value = settings.to;
	
			  if (typeof settings.onComplete == "function") {
				settings.onComplete.call(self, value);
			  }
			}
		  }
	
		  function render(value) {
			var formattedValue = settings.formatter.call(self, value, settings);
			$self.html(formattedValue);
		  }
		});
	  };
	
	  $.fn.countTo.defaults = {
		from: 0, // the number the element should start at
		to: 0, // the number the element should end at
		speed: 1000, // how long it should take to count between the target numbers
		refreshInterval: 100, // how often the element should be updated
		decimals: 0, // the number of decimal places to show
		formatter: formatter, // handler for formatting the value before rendering
		onUpdate: null, // callback method for every time the element is updated
		onComplete: null // callback method for when the element finishes updating
	  };
	
	  function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	  }
	})(jQuery);
	
	jQuery(function($) {
	  // custom formatting example
	  $(".count-number").data("countToOptions", {
		formatter: function(value, options) {
		  return value
			.toFixed(options.decimals)
			.replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		}
	  });
	
	  // start all the timers
	  $(".timer").each(count);
	
	  function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data("countToOptions") || {});
		$this.countTo(options);
	  }
	});
	
// Tab hover js
	function openCity(evt, cityName) {
	  var i, tabcontent, tablinks;
	  tabcontent = document.getElementsByClassName("tab-pane");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("nav-item");
	  for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }
	  document.getElementById(cityName).style.display = "block";
	  evt.currentTarget.className += " active";
	}
// menu js
$(document).ready(function(){
	$(".header_sec .navbar .nav-item").click(function(){
	$(this).toggleClass("menu_show");
	$(this).siblings().removeClass("menu_show");
	$(this).parent().siblings(".header_sec .navbar .navbar-nav").children(".header_sec .navbar .nav-item").removeClass("menu_show");
	});
});

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

//Video Modal js
 $(document).ready(function(){
  $("#myModal").on("hidden.bs.modal",function(){
    $("#iframeYoutube").attr("src","#");
  })
})
function changeVideo(vId){
  var iframe=document.getElementById("iframeYoutube");
  iframe.src="https://www.youtube.com/embed/"+vId;

  $("#myModal").modal("show");
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Hover js
$(document).ready(function() {

    $("ol.pSeoProcessWrap li").first().addClass("active");

    $("ol.pSeoProcessWrap li").hover(function () {
        $('ol.pSeoProcessWrap li').each(function(){ 
            $(this).removeClass("active"); 
        });    
        $(this).toggleClass("active");
    });

    $("ol.pSeoProcessWrap").mouseleave( function(){
        $('ol.pSeoProcessWrap li').each(function(){ 
            $(this).removeClass("active"); 
        });
        $("ol.pSeoProcessWrap li").first().addClass("active");
    });

 });