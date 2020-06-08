/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

// window.addEventListener("DOMContentLoaded", function() {

//     var form = document.getElementById("my-form");
//     var button = document.getElementById("my-form-button");
//     var status = document.getElementById("my-form-status");

//     // Success and Error functions for after the form is submitted
    
//     function success() {
//       form.reset();
//       button.style = "display: none ";
//       status.innerHTML = "Thanks!";
//     }

//     function error() {
//       status.innerHTML = "Oops! There was a problem.";
//     }

//     // handle the form submission event

//     form.addEventListener("submit", function(ev) {
//       ev.preventDefault();
//       var data = new FormData(form);
//       ajax(form.method, form.action, data, success, error);
//     });
//   });
  
//   // helper function for sending an AJAX request

//   function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         success(xhr.response, xhr.responseType);
//       } else {
//         error(xhr.status, xhr.response, xhr.responseType);
//       }
//     };
//     xhr.send(data);
//   }

$('#someForm').on('submit', function(e) {
	e.preventDefault();
	
	//get the name field value
	var name = $('#name').val();
	//get the name field value
	var email = $('#email').val();
	//get the comments
	var comments = $('#comments').val();
				
	//pretend we don't need validation
	
	//send to formspree
	$.ajax({
		url:'https://formspree.io/mgenkgeq',
		method:'POST',
		data:{
			name:name,
			_replyto:email,
			 email:email,
			comments:comments,
			_subject:'My Form Submission',
		},
		dataType:"json",
		success:function() {
			console.log('success');	
			$('#formBlock').hide();
			$('#thankyouBlock').show();
		}	

	});		
	
});

//    $('form#contactForm button.submit').click(function(event) {
// 	event.preventDefault()
//       $('#image-loader').fadeIn();

//     //   var contactName = $('#contactForm #contactName').val();
//     //   var contactEmail = $('#contactForm #contactEmail').val();
//     //   var contactSubject = $('#contactForm #contactSubject').val();
// 	//   var contactMessage = $('#contactForm #contactMessage').val();
	
//       var contactName = "Mohan";
//       var contactEmail = "mohan@gmail.com";
//       var contactSubject = "test";
//       var contactMessage = "test";

//       var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
// 			   '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

// 			   console.log('submit from here');

//       $.ajax({
// 	      type: "POST",
// 	      url: "//formspree.io/mgenkgeq",
// 	      data: data,
// 	      success: function(msg) {

// 			console.log('submit from here ', msg);

//             // Message was sent
//             if (msg == 'OK') {
//                $('#image-loader').fadeOut();
//                $('#message-warning').hide();
//                $('#contactForm').fadeOut();
//                $('#message-success').fadeIn();   
//             }
//             // There was an error
//             else {
//                $('#image-loader').fadeOut();
//                $('#message-warning').html(msg);
// 	            $('#message-warning').fadeIn();
// 			}

// 	      }

// 	  });
//       return false;
//    });


});








