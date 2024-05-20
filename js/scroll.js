var tabsContainer = document.querySelector('.tabs');

tabsContainer.addEventListener('mouseenter', function() {
  this.addEventListener('wheel', handleWheel);
});

tabsContainer.addEventListener('mouseleave', function() {
  this.removeEventListener('wheel', handleWheel);
});

function handleWheel(event) {
  event.preventDefault();
  this.scrollLeft += event.deltaY;
}