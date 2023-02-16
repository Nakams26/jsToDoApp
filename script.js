//Pseudo code

//1 Save the value
//Let's query the dom the form element and save it as a variable
const formElement = document.querySelector("form");
// Let's query the dom for the input
const inputElement = document.querySelector("input");
// Let's query the dom for the ul
const ulElement = document.querySelector("ul");


//2 Attach a submit event listener to the form element
//Pass in 2 argument the event listener method
//a) the event you are listing for
//b)The callback fucntion which will hold the logic we wish to run once the event is heard (AKA occurs on the page)

formElement.addEventListener("submit", function (event) {
  //Defaut behavior of submit is to refresh, so we need to tell the page not to do it
  event.preventDefault();
  // console.log(event);

  //Save the entered text value from the input within a variable. Adding a trim to avoid any "only space" data
  const userAnswer = inputElement.value.trim();

  //  NOTE: A form will always return a value as string
  //  if the user submit an item (check wether the value of the input is not empty), then do some thing:
  //console.log(userAnswer); Check the userAnswer value
  if (userAnswer !== "") {
    // Create a li element
    const liElement = document.createElement("li");

    // a font awesome to it
    liElement.innerHTML = '<i class="fa-regular fa-square"></i>';

    // liElement.textContent = userAnswer; this will not work>>>> becaus etext content replace everything, so the <i> will be replaced with the text
    const itemText = document.createTextNode(userAnswer);
    liElement.appendChild(itemText);
    // add the text from the item to the li
    // console.log(liElement);
    //Append the li element to the ul element
    ulElement.appendChild(liElement);

    //clear the input when submitted
    inputElement.value = "";
  }
  //    else alert the user to submit a valid data
  else {
    alert("Please enter an item you want to add");
  }
});

// 3 How do we track that the item is added to our basket
// Query the dom for our icon and save it within a variable
//This will not work because the icon doesnt exist when we open the page


//Add an event when the UL is clicked, because UL exist when we go on the page
//we can use the event object to find out where the event occured and hone in on that specific icon
ulElement.addEventListener("click", function (event) {
  const iElement = event.target;
  //Only when the icon is clicked, we update the checkbox
  if (event.target.tagName==="I") {
    //Let's toggle the fontawesoe icon class so that it go to check and unckeded 
    
    iElement.classList.toggle('fa-square');
    iElement.classList.toggle('fa-square-check');
    iElement.parentElement.classList.toggle('text-muted');
    console.log(event);
    
  }



});
