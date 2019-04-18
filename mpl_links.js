"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Austin Inmon
   Date:   4.18.19
   
   Filename: mpl_links.js

*/
//Created an event listener that loads the anonymous function when the page is fully loaded.
window.addEventListener("load", function () {
    //Getting All select elements thats nested in the govLinks.
    var allSelect = document.querySelectorAll("#govLinks select");
    //Looping through all the links and every time a link is clicked on the page will load the link on a new page. 
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].addEventListener("change", function (e) {
            window.location.href = e.target.value;
        });

    }
});