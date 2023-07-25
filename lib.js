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
  }
};

function showBookInfo(bookId) {
  const book = books[bookId];
  const bookCover = document.getElementById('bookCover');
  const bookTitle = document.getElementById('bookTitle');
  const bookDescription = document.getElementById('bookDescription');

  bookCover.src = book.cover;
  bookTitle.textContent = book.title;
  bookDescription.textContent = book.description;
}

// ... Your existing code ...

function changeBook(bookId) {
  // Remove 'active' class from all book items
  const bookItems = document.querySelectorAll('.sidebar ul li');
  bookItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Add 'active' class to the selected book item
  const selectedBookItem = document.getElementById(bookId);
  selectedBookItem.classList.add('active');

  // Update book info in the main content section
  showBookInfo(bookId);
}

// Function to handle book item click in the sidebar
function handleBookItemClick(event) {
  const clickedBookLink = event.currentTarget.querySelector('a');
  const clickedBookId = clickedBookLink.getAttribute('href').substring(1);
  changeBook(clickedBookId);
}

// Add click event listener to each book item in the sidebar
const bookItems = document.querySelectorAll('.sidebar ul li');
bookItems.forEach((item) => {
  item.addEventListener('click', handleBookItemClick);
});

// ... Your existing code ...


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

// Function to submit a review
function submitReview(event) {
  event.preventDefault();

  // Get the values from the review form
  const reviewerName = document.getElementById('reviewerName').value;
  const reviewContent = document.getElementById('reviewContent').value;

  // Create a new review item
  const reviewItem = document.createElement('li');
  const reviewInfo = document.createElement('div');
  const reviewerNameElement = document.createElement('strong');
  reviewerNameElement.textContent = reviewerName;
  const reviewDescription = document.createElement('p');
  reviewDescription.textContent = reviewContent;
  reviewInfo.appendChild(reviewerNameElement);
  reviewInfo.appendChild(reviewDescription);
  reviewItem.appendChild(reviewInfo);

  // Add the review item to the reviews list
  const reviewsList = document.getElementById('reviews');
  reviewsList.appendChild(reviewItem);

  // Clear the review form fields after submission
  document.getElementById('reviewerName').value = '';
  document.getElementById('reviewContent').value = '';

  // Hide the review form and show the reviews section
  toggleReviewForm();
}

// Add an event listener to the review form submission
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', submitReview);

// Initial book selection when the page loads
changeBook('treasure-island');
