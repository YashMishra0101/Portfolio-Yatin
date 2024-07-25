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



const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

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
// Contact From Section Start

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const serviceID = 'service_hxdupy7'; 
    const templateID = 'template_okaqtw8'; 

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        document.getElementById('contact-form').reset();
        Swal.fire({
          icon: 'success',
          title: "Message sent successfully. We'll get back to you soon.",
          text: '😊',
          timer: 3000,
          showConfirmButton: false
        });        
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to send message',
          text: 'Error: ',
          timer: 3000,
          showConfirmButton: false
        });
        console.log('Failed to send message. Error: ' + JSON.stringify(err));
      });
  });

// Contact From Section End


// Chat Bot Section Start

document.addEventListener("DOMContentLoaded", function() {
  const botName = 'Yatin';
  const messagesContainer = document.getElementById('messages');

  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function botResponse(message) {
    setTimeout(() => {
      addMessage(message, 'bot');
    }, 500);
  }

  function handleUserInput(input) {
    addMessage(input, 'user');
    if (!userName) {
      userName = input;
      botResponse(`Nice to meet you, ${userName} 😊<br>What type of service do you need ?<br>
         <div class="serviceoptions">
              <div class="serviceoption"><input type="checkbox" name="service" value="Web Development"><label class="service-option">Web Development</label></div>
              <div class="serviceoption"><input type="checkbox" name="service" value="App Development"><label class="service-option">App Development</label></div>
              <div class="serviceoption"><input type="checkbox" name="service" value="SEO"><label class="service-option">SEO</label></div>
              <div class="serviceoption"><input type="checkbox" name="service" value="Other"><label class="service-option">Other</label></div>
          </div>
        <button class="submit-btn" onclick="submitService()">Submit</button>`);
    } else if (!serviceType) {
      serviceType = input;
      botResponse(`Thank you for your interest in ${serviceType}. Could you please share your contact number or email address so we can get back to you?`);
    } else if (!contactInfo) {
      contactInfo = input;
      botResponse(`Thanks for sharing your contact information. We'll get back to you soon. Have a great day, ${userName} 😊.`);
      sendEmail(userName, serviceType, contactInfo);
      setTimeout(() => {
        const chatBody = document.getElementById('chat-body');
        chatBody.style.display = 'none';
      }, 8000);
    }
  }

  function submitService() {
    const checkboxes = document.querySelectorAll('input[name="service"]:checked');
    if (checkboxes.length > 0) {
      const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');
      handleUserInput(selectedServices);
    } else {
      botResponse('Please select at least one service.');
    }
  }

  function sendMessage(event) {
    if (event.key === 'Enter') {
      const inputField = document.getElementById('user-input');
      const input = inputField.value.trim();
      if (input !== '') {
        handleUserInput(input);
        inputField.value = '';
      }
    }
  }

  function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.style.display = chatBody.style.display === 'block' ? 'none' : 'block';
  }

  function sendEmail(userName, serviceType, contactInfo) {
    const templateParams = {
      user_name: userName,
      service_type: serviceType,
      contact_info: contactInfo
    };

    emailjs.send('service_hxdupy7', 'template_okaqtw8', templateParams)
      .then(() => {
        console.log('Chat information sent successfully!');
      }, (err) => {
        console.error('Failed to send chat information. Error:', JSON.stringify(err));
      });
  }

  let userName = '';
  let serviceType = '';
  let contactInfo = '';

  botResponse(`Hello 🧑‍💻, My name is ${botName} and I'm here to help you. What's your name ?`);

  setTimeout(() => {
    toggleChat();
  }, 4000);

  window.sendMessage = sendMessage;
  window.toggleChat = toggleChat;
  window.submitService = submitService;
});

// Chat Bot Section End