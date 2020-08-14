/*===========================================================================
Function added to Wordpress footer. Adds an event listener to the form to
listen for screen size changes. Triggered when form goes from 991 to 990 px
and menu is still in vertical mode.
=============================================================================*/

function toggleMenuOnScreenSize() {
    window.addEventListener("resize", function(event)  {
      //only triggered on the change point when changing screen size
      const mq = window.matchMedia("(max-width: 991px)");
      const mqmf = window.matchMedia("(min-width:990px)");
      var a = document.getElementById("hamburger");
  
       if (mqmf.matches && mq.matches && a.classList.contains("vertical-menu-on")) {
         console.log("triggered");
          var a = document.getElementById("hamburger");
          a.className = ("vertical-menu-off");
          var e = document.getElementById("menu-main-menu");
          e.className =("menu");
          var g = document.querySelector(".menu-main-menu-container");
          g.appendChild(e);
      }
    } );
  }
  