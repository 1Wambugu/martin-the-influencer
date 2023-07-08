document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
      section.addEventListener('click', function() {
        this.classList.toggle('highlight');
      });
    });
  });