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

// --------------------------------------------------------------------------------------

// testimonial carousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true
    },
    768: {
      items: 2,
      nav: false,
      loop: true
    },
    1024: {
      items: 3,
      nav: false,
      loop: true
    }
  }
});

// --------------------------------------------------------------------------------------

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

// Contact modal

$('#contactModal').on('show.bs.modal', function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});
