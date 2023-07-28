const books = {
  'treasure-island': {
    title: 'Treasure Island',
    description: 'A classic adventure novel by Robert Louis Stevenson.',
    cover: 'treasure-island.jpg'
  },
  'frankenstein': {
    title: 'Frankenstein',
    description: 'A novel written by Mary Shelley, often considered the first science fiction novel.',
    cover: 'frankenstein.jpg'
  },
  'tale-of-two-cities': {
    title: 'A Tale of Two Cities',
    description: 'A historical novel by Charles Dickens, set in London and Paris during the French Revolution.',
    cover: 'tale-of-two-cities.jpg'
  },
  'black-beauty': {
    title: 'Black Beauty',
    description: 'A novel by Anna Sewell about the life of a horse named Black Beauty.',
    cover: 'black-beauty.jpg'
  },
  'gullivers-travels': {
    title: "Gulliver's Travels",
    description: 'A satirical novel by Jonathan Swift, featuring the adventures of Lemuel Gulliver.',
    cover: 'gullivers-travels.jpg'
  },
  'count-of-monte-cristo': {
    title: 'The Count of Monte Cristo',
    description: 'A historical adventure novel by Alexandre Dumas, set in early 19th-century France and Italy.',
    cover: 'monte-christo.jpg'
  },
  'little-women': {
    title: 'Little Women',
    description: 'A novel by Louisa May Alcott, following the lives of the four March sisters.',
    cover: 'little-women.jpg'
  }
};

// Function to display book information
function showBookInfo(bookId) {
  const book = books[bookId];
  const bookCover = document.getElementById('bookCover');
  const bookTitle = document.getElementById('bookTitle');
  const bookDescription = document.getElementById('bookDescription');

  bookCover.src = book.cover;
  bookTitle.textContent = book.title;
  bookDescription.textContent = book.description;
}

// Function to change the displayed book based on the selected item
function changeBook(bookId) {
  showBookInfo(bookId);
  displayReviews(bookId); // Display reviews for the selected book
}

// click event listener to each book item in the sidebar
const bookItems = document.querySelectorAll('.sidebar ul li');
bookItems.forEach((item) => {
  item.addEventListener('click', () => {
    const bookId = item.getAttribute('data-book'); // Get the book ID from the data-book attribute
    changeBook(bookId);
    bookItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  });
});

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
  // Clear the input fields after submission
  document.getElementById('reviewerName').value = '';
  document.getElementById('reviewContent').value = '';
  // Display the reviews
  displayReviews();
}

// Function to display reviews for the selected book
function displayReviews(bookId) {
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
  const name = document.getElementById('reviewerName').value;
  const review = document.getElementById('reviewContent').value;

  // Add the review
  addReview(name, review);
}

// Add an event listener to the form submission
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', handleFormSubmit);

// Function to toggle the review form visibility
function toggleReviewForm() {
  const reviewForm = document.getElementById('reviewForm');
  const addReviewButton = document.getElementById('addReviewButton');

  if (reviewForm.style.display === 'block') {
    reviewForm.style.display = 'none';
    addReviewButton.innerText = 'Add Review';
  } else {
    reviewForm.style.display = 'block';
    addReviewButton.innerText = 'Cancel';
  }
}

// Add an event listener to the "Add Review" button click
const addReviewButton = document.getElementById('addReviewButton');
addReviewButton.addEventListener('click', toggleReviewForm);
