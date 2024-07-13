'use strict';


//blogSection

const blogPostsList = document.querySelector(".blog-posts-list");
const blogsPostItem = document.querySelectorAll(".blog-post-item");
let backButton = document.querySelector(".back-button");
let upperBackButton= document.querySelector(".upperBack-button");
let blogInformation = document.querySelector(".blogInformation");

const blogPostOne = document.querySelector("#blog-post-one");
const blogPostTwo = document.querySelector("#blog-post-two");
const blogPostThree = document.querySelector("#blog-post-three");
const blogPostFour = document.querySelector("#blog-post-four");
const blogPostFive = document.querySelector("#blog-post-five");
const blogPostSix = document.querySelector("#blog-post-six");

const blogInfoOne = document.querySelector("#blogInfoOne");
const blogInfoTwo = document.querySelector("#blogInfoTwo");
const blogInfoThree = document.querySelector("#blogInfoThree");
const blogInfoFour = document.querySelector("#blogInfoFour");
const blogInfoFive = document.querySelector("#blogInfoFive");
const blogInfoSix = document.querySelector("#blogInfoSix");


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar vari
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

//Blog Section 

const hideAllBlogInfo = () => {
  blogInfoOne.classList.add("hidden");
  blogInfoTwo.classList.add("hidden");
  blogInfoThree.classList.add("hidden");
  blogInfoFour.classList.add("hidden");
  blogInfoFive.classList.add("hidden");
  blogInfoSix.classList.add("hidden");
};

backButton.onclick = (event) => {
  event.preventDefault();
  blogPostsList.classList.remove("hidden");
  backButton.classList.add("hidden");
  upperBackButton.classList.add("hidden");
  blogInformation.classList.add("hidden");
  hideAllBlogInfo();
};

 upperBackButton.onclick = (event) => {
  event.preventDefault();
  blogPostsList.classList.remove("hidden");
  backButton.classList.add("hidden");
  upperBackButton.classList.add("hidden");
  blogInformation.classList.add("hidden");
  hideAllBlogInfo();
};

blogPostOne.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoOne.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};

blogPostTwo.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoTwo.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};

blogPostThree.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoThree.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};

blogPostFour.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoFour.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};

blogPostFive.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoFive.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};

blogPostSix.onclick = (event) => {
  event.preventDefault();
  hideAllBlogInfo();
  blogInfoSix.classList.remove("hidden");
  blogPostsList.classList.add("hidden");
  backButton.classList.remove("hidden");
  upperBackButton.classList.remove("hidden");
  blogInformation.classList.remove("hidden");
};



// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}