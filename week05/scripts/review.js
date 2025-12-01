const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&copy; <span id="currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;


const counterKey = 'reviewsCompleted';

function updateReviewCounter() {
    let currentCount = 0;

    const storedCount = localStorage.getItem(counterKey);

    if (storedCount) {
        currentCount = parseInt(storedCount, 10);
    }

    currentCount++;

    localStorage.setItem(counterKey, currentCount);

    const displayElement = document.getElementById('total-reviews');
    if (displayElement) {
        displayElement.textContent = currentCount;
    }
}

updateReviewCounter();


function getStarRating(rating) {

    const fullStar = '&#9733;'; 
    
    const numRating = parseInt(rating, 10);
    
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
        return ''; 
    } 
    
    if (numRating === 5) {
        return fullStar.repeat(5); 
    } else if (numRating === 4) {
        return fullStar.repeat(4); 
    } else if (numRating === 3) {
        return fullStar.repeat(3); 
    } else if (numRating === 2) {
        return fullStar.repeat(2); 
    } else if (numRating === 1) {
        return fullStar.repeat(1); 
    } else {
        return ''; 
    }
}

function populateFieldsFromUrl() {
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);

    const product = urlParams.get('product');
    const rating = urlParams.get('rating');
    const date = urlParams.get('date');
    const name = urlParams.get('name');
    
    const featuresArray = urlParams.getAll('features');
    const features = featuresArray.join(', ');
    
    const starRating = getStarRating(rating);

    const productElement = document.getElementById('product');
    if (productElement) {
        productElement.textContent = product || 'N/A';
    }

    const ratingElement = document.getElementById('rating');
    if (ratingElement) {
        ratingElement.innerHTML = starRating;
    }

    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = date || 'N/A';
    }

    const featuresElement = document.getElementById('features');
    if (featuresElement) {
        featuresElement.textContent = features || 'N/A';
    }

    const nameElement = document.getElementById('name');
    if (nameElement) {
        nameElement.textContent = name || 'Anonymous';
    }
}

document.addEventListener('DOMContentLoaded', populateFieldsFromUrl);