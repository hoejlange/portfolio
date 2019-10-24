"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  // run project animation function
  if(pageId === 'work') {
    startAnimation();
  }
  if(pageId === 'about') {
    moveNavbar();
  } else {
    resetNavbar();
  }
  setActiveTab(pageId);
  setTimeout(function() {
    showLoader(false);
  }, 500);
}

function moveNavbar() {
  let navbar = document.getElementById("tabbar");
  navbar.classList.add("about-tabbar");
}

function resetNavbar() {
  let navbar = document.getElementById("tabbar");
  navbar.classList.remove("about-tabbar");
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

// set default page
function setDefaultPage() {
  let page = "about";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

// image slideshow
let slideIndex = [1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "flex";
}

//animation on image slideshow
function startAnimation() {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll('.slideshow-container');
    windowHeight = window.innerHeight;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (element.classList.contains('slideup-animation')) {
        element.classList.remove('slideup-animation');
      }
    }
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add('slideup-animation');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);


  init();
  checkPosition();
};

//
