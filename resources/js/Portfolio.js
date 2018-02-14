<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js>

$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.topnav').offset().top;
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.topnav').addClass('sticky');
			    } else {
			        $('.topnav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
  else {
        x.className = "topnav";
  }
}
</script>