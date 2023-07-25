// Array to store reviews
const reviews = [];

// Function to add a review
function addReview(name, review) {
  // Create a review object
  const reviewObject = {
    name: name,
    review: review
  };

  // Add the review to the reviews array
  reviews.push(reviewObject);
}

// Function to display reviews
function displayReviews() {
  const submittedReviewsElement = document.getElementById('submittedReviews');
  submittedReviewsElement.innerHTML = ''; // Clear previous reviews

  for (const review of reviews) {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    const reviewerNameElement = document.createElement('strong');
    reviewerNameElement.textContent = review.name;
    const reviewDescriptionElement = document.createElement('p');
    reviewDescriptionElement.textContent = review.review;

    reviewItem.appendChild(reviewerNameElement);
    reviewItem.appendChild(reviewDescriptionElement);
    submittedReviewsElement.appendChild(reviewItem);
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the input values
  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;

  // Add the review
  addReview(name, review);

  // Display the updated reviews
  displayReviews();

  // Clear the input fields after submission
  document.getElementById('name').value = '';
  document.getElementById('review').value = '';
}

// Add an event listener to the form submission
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', handleFormSubmit);
