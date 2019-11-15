// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

// Hamburger menu toggle

function hamToggle(x) {
  x.classList.toggle('change');
}

// NavLinks fixed position should disappear when scroll is greater than 20

// do something

// Scroll to page top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// --------------------------------------------------------------------------------------------------
// Location Tabs

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = 'block';

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
