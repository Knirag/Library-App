
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

function changeBook(bookIndex) {
  // Get all book items in the sidebar
  const bookItems = document.querySelectorAll('.sidebar ul li');

  // Remove 'active' class from all book items
  bookItems.forEach((item) => {
      item.classList.remove('active');
  });

  // Add 'active' class to the selected book item
  bookItems[bookIndex].classList.add('active');

  // Update book info in the main content section
  const bookInfo = document.getElementById('bookInfo');
  const bookTitle = bookItems[bookIndex].innerText;
  const bookDescription = bookItems[bookIndex].querySelector('a').getAttribute('data-description');
  const bookImage = bookItems[bookIndex].querySelector('a').getAttribute('data-image');

  bookInfo.querySelector('img').src = bookImage;
  bookInfo.querySelector('h1').innerText = bookTitle;
  bookInfo.querySelector('p').innerText = bookDescription;
}
