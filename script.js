// Selectors
let rateCard = document.querySelector('.rate');
let thankYouCard = document.querySelector('.ty');
let submitBtn = document.querySelector('.submit');
let ratingBtn = document.querySelectorAll('.btn');
let number = document.querySelector('.number');


var rating;

// when the submit button is clicked, the rate card disappears and the thank you card appears
let submit = () => {

    if (rating == undefined) {
        alert('Please rate :)');
    } else {
        rateCard.style.display = ('none');
        thankYouCard.style.display = ('block');
    };
};



// function for the rating button to add the rating to the paragraph
function rate(num) {
    rating = num;
    number.textContent = rating;
};