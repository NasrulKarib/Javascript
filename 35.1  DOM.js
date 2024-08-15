
// When a web page is loaded, the browser creates a Document Object Model of the page.
/*
    ~ DOM Model is constructed as a tree of objects : https://www.w3schools.com/js/pic_htmltree.gif
    ~ HTML DOM is a standard object model and programming interface for HTML. It defines:
        - html elements as obj
        - properties of all html elements
        - methods to access all html elements
        - events for all html elements
*/

// Finding HTML Elements

// 1. by Id
/* 
    ~ The easiest way to find an HTML element in the DOM, is by using the element id.
    ~ If the element is found, the method will return the element as an object (in element) otherwise null.
*/

// 2. by Tag Name
/*  document.getElementsByTagName("p"); */

// 3. by Class Name
/*  getElementsByClassName() */

// 4. by CSS Selectors
/* document.querySelectorAll("p.intro") */
