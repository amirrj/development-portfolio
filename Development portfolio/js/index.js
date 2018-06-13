// START NAV

function myFunction(x) {
    if (x.matches) { // If media query matches
       

var menu01 = new MobileMenu;

menu01.init();

function MobileMenu(){
	
	// set variables
	var $body = $('body');
	var $btnMenu = $('.btn-menu');
    var $mobileNav = $('mobile-nav a')
	// get the nav li elements from the 
	// desktop menu
	var navLiHTML = $('header nav ul').html();
	// create the mobile menu from the desktop li elements...
	var mobileNavHTML = $('<nav class="mobile-nav"><ul>' + navLiHTML  + '</ul></nav>');
	
	// Add the mobile menu to the main element...
	$('main').prepend(mobileNavHTML);
	
	// select the newly created mobile menu
	var $mobileNav = $('.mobile-nav');
	
	// select all the "a" links that have a 
	// sub menu
	
	// initialization method for the
	// MobileMenu class	
	this.init = function(){
		
		// measure height of menu in open state
		// then close the menu
		$body.addClass('show');
		var mobileNavOriginalHeight = $mobileNav.height();
		var mobileNavHeight = $mobileNav.height();
		$body.removeClass('show');
		
		// Open all the menus and the sub menus 
		// and measure the height of each
		// sub menu then close all the 
		// sub menus
		$body.addClass('show');
		// Loop through the sub menus add get the height
		// of the sub menus and set a data attribute to 
		// that height
		$('.mobile-nav .dd').each(function(){
			var theHeight = $(this).next().height();
			$(this).next().attr('data-height', theHeight);	
		}); // end each...
		// Close the menu and the sub menus
		$body.removeClass('show');

		// Click event handler for the mobile menu
		$btnMenu.click(function(){
			// check if body element has the
			// class show
			if($body.hasClass('show')){
				// menu is open...
				// remove any heights set on the mobile nav
				$mobileNav.removeAttr('style');
				// remove the "show" class from the body
				// element
				$body.removeClass('show');
				// remove any heights set on the sub
				// menus

					
			}else{
				// menu is closed...
				// set height of mobile menu to the open height
				$mobileNav.css('height', mobileNavOriginalHeight);
				// add the class "show" to the body element
				$body.addClass('show');	
			} // end if menu is open...
				
		}); // end mobile menu click event handler
        
        $mobileNav.click(function(){
            
				$mobileNav.removeAttr('style');
				// remove the "show" class from the body
				// element
				$body.removeClass('show');
				// remove any heights set on the sub
				// menus
                         });
        
	} // end init()
	
} // end MobileMenu Constructor


 // NAV disapear on scroll

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up"); /* optional for demo */
        $(".nav").css("opacity", "1");
        
        
    } else {
        $(".sidebar em").text("Down");
        $(".nav").css("opacity", "0");
        
    }
    this.previousTop = currentTop;
});

    }
}
    
    var x = window.matchMedia("(max-width: 480px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// END NAV


//-----------------------------------------------------------



// Page animated scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



//-----------------------------------------------------------



// icons animated when in viewport
new WOW().init();


// ----------------------------------------------------------



// projects

 

// project 1
$('section:nth-of-type(3) #gallery .mix:nth-child(1) .card ').click(function(){

    if($('section:nth-of-type(3) #gallery .mix:nth-child(1) .card').hasClass('cardActive')){
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .card').removeClass('cardActive');
        
        
        //text
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .text ').css('opacity', '0');
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .text ').css('top', '0');
        
        //button
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .button ').css('opacity', '0');
        $('section:nth-of-type(3) #gallery .mix:nth-child(1)  .button ').css('bottom', '0');
        
    } else {
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .card').addClass('cardActive');
        
        
        //text
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .text ').css('opacity', '1');
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .text ').css('top', '20%');
        
        
        //button
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .button').css('opacity', '1');
        $('section:nth-of-type(3) #gallery .mix:nth-child(1) .button').css('bottom', '20%');
    }
    
})

    // PROJECT ONE MODAL

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




// project 2
    
$('section:nth-of-type(3) #gallery .mix:nth-child(2) .card ').click(function(){

    if($('section:nth-of-type(3) #gallery .mix:nth-child(2) .card').hasClass('cardActive')){
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .card').removeClass('cardActive');
        
        
        //text
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .text ').css('opacity', '0');
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .text ').css('top', '0');
        
        //button
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .button ').css('opacity', '0');
        $('section:nth-of-type(3) #gallery .mix:nth-child(2)  .button ').css('bottom', '0');
        
    } else {
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .card').addClass('cardActive');
        
        
        //text
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .text ').css('opacity', '1');
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .text ').css('top', '20%');
        
        
        //button
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .button').css('opacity', '1');
        $('section:nth-of-type(3) #gallery .mix:nth-child(2) .button').css('bottom', '20%');
    }
})

//-------------------------------------------------------------

// CONTACT

$('.submitButton').click(function(){
    if($('#form').valid()){
        $('#success').html('Your message has been sent, Thanks');
    }
})



// flashing text on hero page


function flash() {
    var text = document.getElementById('home-arrow');
    text.style.color = (text.style.color=='white') ? '#e31b6d':'white';
    
//    var text = document.getElementById('arrow-text');
//    text.style.color = (text.style.color=='white') ? '#e31b6d':'white';
}
var clr = setInterval(flash, 1000);









