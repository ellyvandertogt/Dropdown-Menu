// get all the dropdown from the document//
const dropdown = document.querySelectorAll(".dropdown");

// Loop through all dropdown Element//
dropdown.forEach(dropdown => {
    //Get inner elements from each dropdown//
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");
//We are using this method in order to have multiple dropdown on the page work//
//add a click event to the "select element"//
select.addEvenListerner("click", () => {
//add the clicked the select style to the select element //
select.classList.toogle("select-clicked");
//add the rotate style to th caret element//
select.classList.toggle("caret-rotate");
//add the open styles to the menu element//
menu.classList.toggle("menu-open");
})
//loop through all option element//
options.forEach(options => {
    //add a click event to the option element//
    options.addEventListener("click", () => {
        //change selected innner test to clicked option inner text
        selected.innerText = options.innerText;
        //add the clicked select style to the select element//
        select.classList.remove("select-clicked");
        //add the rotate style to the caret element
        caret.classList.remove("caret-rotate");
        //add the open styles to the menu element
        menu.classList.remove("menu-open");
        //remove active clase from all option elements
        options.forEach(options => {
            options.classList.remove("active");
        });
        //add active class to clciked option elements
        options.classList.add("active");    
        });
            
        })
    })
