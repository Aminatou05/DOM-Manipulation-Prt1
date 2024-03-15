// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

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
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add a class of "flex-around" to topMenuEl
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons
//my Array of objects representing the Links
// To continue:
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

// for(i =0; i<menuLinks.length; i++){
//     const newElem = document.createElement('a')
//     newElem.setAttribute('href', menuLinks[i].href);
//     newElem.append(menuLinks[i].text);
//     document.getElementById("top-menu").appendChild(newElem);
// }
// console.log(newElem);

menuLinks.forEach(menuLinks => {
    console.log(menuLinks);
    const newElem = document.createElement('a');
    newElem.setAttribute('href',menuLinks);
    newElem.append(menuLinks.text);
    document.getElementById("top-menu").appendChild(newElem);

});

// I like the forEach instead of for loop Iteration so, I made two examples and both works fine!
