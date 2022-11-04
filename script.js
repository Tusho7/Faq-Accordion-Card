let question = document.querySelectorAll(".question");
let title = document.querySelectorAll(".title");
let arrow = document.querySelectorAll(".arrow");
let hideText = document.querySelectorAll(".hide-text");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        hideText[i].classList.toggle("hide-text");


        arrow[i].classList.toggle("arrowUp");

        title[i].classList.toggle("title-update");
        
    })
}