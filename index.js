// Menu data structure

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

// Manipulate the DOM using JavaScript
// Do not modify any of the contents of the index.html or styles.css files. 
// Your goal in this lab is to demonstrate DOM manipulation through JavaScript.
//  As such, directly modifying the HTML or CSS files is counterproductive.

// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl.

let mainEl = document.querySelector('main');
// console.log(mainEl);
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

// DOM Manipulation (Part Two)
// Manipulate the DOM using JavaScript and DOM events.

// Part 3: Creating the Submenu
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.


// Add the class of flex-around to the subMenuEl element.
let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute.
// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Part 4: Adding Menu Interaction
// In order to add submenu links, we will need to restructure the menuLinks array within index.js.
//  Update the menuLinks array to the following:

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);
topMenuEl.addEventListener("click", function(event) {
      // Prevent default behavior
      event.preventDefault();

      // Check if the clicked element is an <a> element
      if (event.target.tagName === "A") {
//         The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!
          console.log( event.target);
          topMenuLinks.forEach(link => {
            if (link !== event.target) {
                link.classList.remove('active');
            }
        });
          event.target.classList.toggle('active');
      }
})