
/*
Name: Connor Papas
ID: 160517199
Date: December 10, 2020
WEB222 Final Assessment Website

WEBSITE CHOSEN: https://www.themoviedb.org/

My Website Hosted Link: https://connorpweb222project.netlify.app/
*/

/*Final Assessment Javascript*/

/*Function to show the order number field when the order problem radio button is clicked*/
function orderClicked() {
    if (document.getElementById("problem").checked) {
        document.querySelector(".order-problem").style.display = "block";
        /*Need to extend form height as well so submit button fits on the form after a new field is added*/
        document.querySelector(".contactform").style.height = "850px";
    }
    else {
        /*If another button is clicked, hide the order number field and fix the size*/
        document.querySelector(".order-problem").style.display = "none";
        document.querySelector(".contactform").style.height = "800px";

    }
}


