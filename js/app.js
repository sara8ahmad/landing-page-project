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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ulList= document.getElementById('navbar__list');
const sections= document.querySelectorAll('section');
const fragment= document.createDocumentFragment();



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


// notes to remmeber : section not sections in forEach , in a link in href (# "")
function buildNavList() {

    // looping over the sections
          sections.forEach((section) => {
    // exctracting the section Id and section name  
          const sectionTitle = section.dataset.nav;
          const sectinoId = section.id;
    // creating li element      
          const listItem = document.createElement('li');
    // for li element adding anchor element , adding class menu__link and href attribute to it     
          listItem.innerHTML = `<a class ="menu__link" href="#${sectinoId}">${sectionTitle}</a>`;
    // append li to ul     
          ulList.appendChild(listItem);  
    //  adding smooth scroll to sections     
          listItem.addEventListener('click', (evt) => {
             evt.preventDefault();
            section.scrollIntoView({behavior:"smooth"})
          }
          ) ;

        });
    // existing the loop
}


// build the nav

// Add class 'active' to section when near top of viewport

function addHighLighting() {

// looping over the sections
        sections.forEach((section) => {
// extracting section to dimension
        const links =document.querySelectorAll ('a.menu__link');
        const secTop = section.getBoundingClientRect().top;
        section.classList.remove('your-active-class');
// check if the section position is in the viewport         
        if (secTop >=0 && secTop < 300  ){
// if the section in the viewport then add  your-active-class           
            section.classList.add('your-active-class');
// looping over links to highlight in navbar during scrolling 
            links.forEach(link =>{
                if (link.textContent === section.dataset.nav)
                {link.classList.add('active');}
                else{
                    link.classList.remove('active');}
            });

             }
// else remove your your-active-class             
        else{  
            section.classList.remove('your-active-class');
            }
    }
    );

    }
    window.addEventListener('scroll',addHighLighting);
    window.addEventListener('load',buildNavList);

// Scroll to anchor ID using scrollTO event


// Set sections as active



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


