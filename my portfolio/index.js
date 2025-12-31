// THIS PART OF CODE IS RELATIVE THE SECTION RESUME

// get the id from the button elements
let buttonEducation = document.getElementById("button-education");
let buttonWork = document.getElementById("button-work");
let buttonSkills = document.getElementById("button-skills");

// get the id from the container (education, work experience and skills) elements
let containerEducation = document.getElementById("container-education");
let containerWork = document.getElementById("container-work");
let containerSkills = document.getElementById("container-skills");

// the function sets the various hidden container to none and the background of the buttons to green
function hideAll() {
    containerEducation.style.display = "none";
    containerWork.style.display = "none";
    containerSkills.style.display = "none";

    buttonEducation.style.backgroundColor = "rgb(25, 135, 84)";
    buttonWork.style.backgroundColor = "rgb(25, 135, 84)";
    buttonSkills.style.backgroundColor = "rgb(25, 135, 84)";
}

// this button allows you to select only the education container
buttonEducation.addEventListener("click", () => {
    hideAll();
    containerEducation.style.display = "block";
    buttonEducation.style.backgroundColor = "cyan";
});

// this button allows you to select only the work experience container
buttonWork.addEventListener("click", () => {
    hideAll();
    containerWork.style.display = "block";
    buttonWork.style.backgroundColor = "cyan";
});

// this button allows you to select only the skills container
buttonSkills.addEventListener("click", () => {
    hideAll();
    containerSkills.style.display = "block";
    buttonSkills.style.backgroundColor = "cyan";
});

// this event prevents the containers (work experience and skills) from being displayed in the
// resume section when the page loads
addEventListener("DOMContentLoaded", () => {
    containerWork.style.display = "none";
    containerSkills.style.display = "none";
});



// THIS PART OF CODE IS RELATIVE THE NAV BAR WITH INSIDE THE BUTTON HUMBURGER

// get the id from the menu hamburger and links inside the nav bar elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// this a funcation for visualization the menù
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// this a funcation for hidden the menù
document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});



// THIS PART OF CODE IS RELATIVE THE CAROUSEL FOR SHOW THE VARIOUS CARDS OF PROJECTS

// get the id from the several elements of carousel
const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".container-card");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

// created variabile for the carousel
let index = 0;
const cardWidth = 330;
const visibleCards = 4;

// when the button come pressing scroll the carousel to right
btnRight.addEventListener("click", () => {
    const cardsCount = track.children.length;

    if (index <= cardsCount - visibleCards) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

// when the button come pressing scroll the carousel to left
btnLeft.addEventListener("click", () => {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});




// THIS PART OF CODE IS RELATIVE THE FUNCTION FOR RENDERING/CREATE THE CARDS OF PROJECTS

// get the id of container of card and of filter for selecting to cards
const containerCardProject = document.getElementById("projects-container");
const filterCategory = document.getElementById("category-filter");

// creating a list containing the various cards
let listProject = [];

// this is a function for rendering the cards when selecting the category from component select
function renderProject(projects) {

    // i define that the card container will hide all cards that do not match the selected category
    containerCardProject.innerHTML = "";

    // use a loop for the creating card with informations from file json
    projects.forEach(project => {

        // create the div how container for the cards and adding style of class apropriate
        const card = document.createElement("div");
        card.classList.add("container-card")

        // create the component image and associate the image of project from the file json
        const imgProject = document.createElement("img");
        imgProject.src = project.img;

        // create the component paragraph and associate the name of project from the file json
        const nameProject = document.createElement("p");
        nameProject.textContent = project.name;

        // create the component ancor (link) and associate the path url of GitHub from the file json
        const linkProject = document.createElement("a");
        linkProject.href = project.link;
        linkProject.text = "LINK";
        linkProject.target = "_black";
        linkProject.classList.add("button-link");


        // append the various child the container cards (father) 
        card.appendChild(imgProject);
        card.appendChild(nameProject);
        card.appendChild(linkProject);

        // append the various part of card the container of project of cards
        containerCardProject.appendChild(card);
    });
}

// THIS PART OF CODE IS RELATIVE FOR REQUEST THE FILE JSON

// i do a request from file json for get the informations
fetch("projects.json")
    .then(response => {

        // if response don't go fine, throw a exception
        if (!response.ok) {
            throw new Error("Error!");
        }

        // else return the response to format json
        return response.json();
    })

    // for each project i associate them with the list of projects, and pass the list to the function for rendering the carousel
    .then(data => {
        listProject = data;
        renderProject(listProject);
    })



// THIS PART OF CODE IS RELATIVE THE EVENT FOR SHOW THE PROJECTS OF CATEGORY SELECTED

// this is a event that when show the projects with the category selected
filterCategory.addEventListener("change", () => {
    const selectedCategory = filterCategory.value;

    // rendering all projects regardless of category
    if (selectedCategory === "all") {
        renderProject(listProject);
    }
    else {

        // i show the projects filterd for category
        const filtered = listProject.filter(project => project.category === selectedCategory);
        renderProject(filtered);
    }
})


// THIS PART OF CODE IS RELATIVE THE CONTACT FORM 

// get the id of various component of contact form
let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputSubject = document.getElementById("input-subject");
let inputMessage = document.getElementById("input-message");
let buttonSendEmail = document.getElementById("button-send-email");

// when the button is clicked i verify if the text filds are empty
buttonSendEmail.addEventListener("click", () => {
    if (inputName.value === "" || inputEmail.value === "" || inputSubject.value === "" || inputMessage.value === "") {

        // i get the id of page section of contact and container of popup
        let sectionContact = document.getElementById("contact");
        let containerPopup = document.getElementById("popup");

        // i add the class the section contact and i define the style of page
        sectionContact.classList.add("modal-open");
        containerPopup.style.display = "flex";

        // i get the id of button for close the popup 
        let buttonPopup = document.getElementById("button-popup");

        // when the button is clicked i remove the class and i define the style
        buttonPopup.addEventListener("click", () => {
            sectionContact.classList.remove("modal-open");
            containerPopup.style.display = "none";
        });
    }
    else {
        inputName.value = "";
        inputEmail.value = "";
        inputSubject.value = "";
        inputMessage.value = "";
        alert("Message send");
    }
})


