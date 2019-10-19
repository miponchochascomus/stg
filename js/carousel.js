var items = document.querySelectorAll('.carousel .item');
var dots = document.querySelectorAll('.carousel-indicators li');

var currentItem = 0;

function changeCurrentItem(index) {
  hideItem(currentItem);
  currentItem = (index + items.length) % items.length;
  showItem(currentItem);
}

function nextItem(index) {
  changeCurrentItem(index + 1);
}

function previousItem(index) {
  changeCurrentItem(index - 1);
}

function hideItem(index) {
  dots[index].classList.remove('active');
  items[index].classList.remove('active');
}

function showItem(index) {
  dots[index].classList.add('active');
  items[index].classList.add('active');
}

document.querySelector('.carousel-control.left').addEventListener('click', function() {
  previousItem(currentItem);
});

document.querySelector('.carousel-control.right').addEventListener('click', function() {
  nextItem(currentItem);
});

document.querySelector('.carousel-indicators').addEventListener('click', function(e) {
  var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
  if (target !== currentItem && target < dots.length) {
    changeCurrentItem(target);
  }
});
