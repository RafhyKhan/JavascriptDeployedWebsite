/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay
var daysSelected


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var dayChangeButton = document.querySelectorAll('.day-selector li');

var dayChangeFunction = function (e) {

  for (var counter = 0; counter < dayChangeButton.length; counter++) {
      dayChangeButton[counter].addEventListener('click', function(e) {
          if (e.target.classList.contains("clicked")) {
              e.target.classList.remove("clicked");
              dayCounter = dayCounter - 1;
          } else {
              e.target.classList.add("clicked");
              dayCounter = dayCounter + 1;
          }
          calculate();
      });
  }
};

dayChangeButton.addEventListener('click', dayChangeFunction);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.querySelector('#clear-button');

var clearFunction = function () {

  //code function
  
  dayCounter = 0;
  dayChangeAction.innerHTML = 0; 
    
};

clearButton.addEventListener('click', clearFunction);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDayButton = document.querySelector('#half');
var fullButton = document.querySelector('#full');

var halfDayFunction = function () {

  halfDayButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  costPerDay = 20;
  calculate();
}

halfDayButton.addEventListener('click', halfDayFunction);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullFunction = function () {

  costPerDay = 35;
  fullButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculate();
};

fullButton.addEventListener('click', fullFunction);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var dayChangeAction = document.getElementById("calculated-cost");

var calculate = function() {
    dayChangeAction.innerHTML = costPerDay * dayCounter;
};