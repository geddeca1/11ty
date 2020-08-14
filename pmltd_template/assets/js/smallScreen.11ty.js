/*==========================================================================hamburger
Method smallScreenMenu()
Triggered by Click on hamburger button which is displayed on smaller screens.
Uses class name on/off to manage behaviour. Class has no styles.
Managed by class "on / off" toggle  to turn vertical menu on and off.
Method loaded into Wordpress footer.
============================================================================*/

function smallScreenMenu() {
    // When displayed and clicked get reference to item
       var a = document.getElementById("hamburger");
    // Change state
       if (a.classList.contains("vertical-menu-off")) {
           a.className = ("vertical-menu-on");
    
    // Once you have clicked on it, display none on link.
    
    // Create a new block and give a class to style
         var newDiv = document.createElement("div");
         newDiv.className = "newDiv";
    
    // Get the main menu and change class to style as vertical menu
         var d = document.getElementById("menu-main-menu");
         d.className = "vertical-menu";
    
    // Append new menu to page
         var b = document.querySelector(".sticky-footer-wrapper");
         var c = document.querySelector("header");
         newDiv.append(d);
         b.insertBefore(newDiv, c);
    
    } else if (a.classList.contains("vertical-menu-on")){
    // Change state
      a.className = ("vertical-menu-off");
    
    // Save a reference to current menu.
         var e = document.getElementById("menu-main-menu");
    
    // Removes its vertical-menu class  to change look of main menu
         e.className =("menu");
    
    // Select the main menu container
         var g = document.querySelector(".menu-main-menu-container");
    
    //  Put the main menu back into the menu container
         g.appendChild(e);
    
    //remove newDiv element from page
          var f = document.querySelector(".newDiv");
          f.remove();
    //
       }
    }
    