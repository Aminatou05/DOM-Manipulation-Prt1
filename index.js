

// Manipulate the DOM using JavaScript
// Do not modify any of the contents of the index.html or styles.css files. 
// Your goal in this lab is to demonstrate DOM manipulation through JavaScript.
//  As such, directly modifying the HTML or CSS files is counterproductive.

// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl.

let mainEl = document.querySelector('main');
console.log(mainEl);
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
// Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// Part 2: Creating a Menu Bar
// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--top-menu-bg");
// Add a class of "flex-around" to topMenuEl
topMenuEl.classList.add("flex-around");
