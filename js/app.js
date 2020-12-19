/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// navigational global var
const navigation = document.getElementById("navbar__list");
// sections global var
const sections = document.querySelectorAll("section"); 



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const navBuilder = () => {
    // looping over all sections
    let navUI = ''; 

    sections.forEach(section => {

        const sectionID = section.id; 
        const sectionDataNav = section.dataset.nav; 

        navUI += `<li><a class="menu_link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });

    // append all eleents to the navigtions
    navigation.innerHTML = navUI; 

};

navBuilder();

// Add class 'active' to section when near top of viewport

// getting the largestvalue that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeAtive = (section) => {
    section.classList.remove('your-active-class');
};

// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

// implementing the actual function
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () =>elementOffset < 150 && elementOffset >= -150; 

        removeActive(section);
        addActive(inviewport().section);
    });
}

window.addEventListener('scroll', sectionActivation); 
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}