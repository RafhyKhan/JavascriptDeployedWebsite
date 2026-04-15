// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.



var submitButton = document.querySelector('#submit-button');

var submitFunction = function (e) {
    e.preventDefault(); //To stop form from submitting everytime
    const submitChange = document.getElementById("contact-page");
    submitChange.innerHTML = "<p style='font-size: 24px;'>Thank you for your message!</p>"
    
};

submitButton.addEventListener('click', submitFunction);