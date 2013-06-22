/*    
       _____  ____  _    ___          ________  _____ _______       _____  
      / ____|/ __ \| |  | \ \        / /  ____|/ ____|__   __|/\   |  __ \ 
     | |  __| |  | | |  | |\ \  /\  / /| |__  | (___    | |  /  \  | |  | |
     | | |_ | |  | | |  | | \ \/  \/ / |  __|  \___ \   | | / /\ \ | |  | |
     | |__| | |__| | |__| |  \  /\  /  | |____ ____) |  | |/ ____ \| |__| |
      \_____|\____/ \____/    \/  \/   |______|_____/   |_/_/    \_\_____/ 
                                                                  
          |\/|  _. ._ |   _ _|_ o ._   _    ()    |\/|  _   _| o  _. 
          |  | (_| |  |< (/_ |_ | | | (_|   (_X   |  | (/_ (_| | (_| 
                                       _|                            
                             
                              © www.gouwestad.com
                         
                           WHY ARE YOU LOOKING HERE? ;)
*/






/****************************************************************************

	SOME SMOOTH SCROLLING ANCHOR LINKS | COURTESY OF CSS-TRICKS

*****************************************************************************/

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});



// Show the sliding nav
$("#nav-btn").click(function (e) {
   e.preventDefault();
  $("#slide-nav").toggleClass("visible");
  $(".body-overlay").toggleClass("visible");
});

$("#nav-btn-close").click(function (e) {
   e.preventDefault();
  $("#slide-nav").toggleClass("visible");
  $(".body-overlay").toggleClass("visible");
});



// Fomulier mailchimp animatie
$("#btn-mc").click(function (e) {
   e.preventDefault();
  $(".mc-page-2").toggleClass("animate-open");
});


$("#btn-mc-close").click(function (e) {
   e.preventDefault();
  $(".mc-page-2").toggleClass("animate-open");
});

// Waypoints stuff

$(function() {
    $("header").toggleClass("animate");
});

$(document).ready(function() {
  $('section').waypoint(function() {
   $(this).toggleClass("animate");
    }, { offset: '35%'});
});


// Introductie vakjes openen
$(".blokje").click(function (e) {
   e.preventDefault();
  $(".block-overlay").toggleClass("open");
});

$(".blokje-close").click(function (e) {
   e.preventDefault();
  $(".block-overlay").toggleClass("open");
});

//Responsive showcase nav
$("#slide-desktop-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(1);
});

$("#slide-laptop-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(2);
});

$("#slide-mobile-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(3);
  });


