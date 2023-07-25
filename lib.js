
const books = {
  'treasure-island': {
      title: 'Treasure Island',
      description: 'A classic adventure novel by Robert Louis Stevenson.',
      cover: 'treasure-island.jpg' // Replace with the actual image file path
  },
  'frankenstein': {
      title: 'Frankenstein',
      description: 'A novel written by Mary Shelley, often considered the first science fiction novel.',
      cover: '' // Replace with the actual image file path
  },
  'tale-of-two-cities': {
      title: 'A Tale of Two Cities',
      description: 'A historical novel by Charles Dickens, set in London and Paris during the French Revolution.',
      cover: 'tale-of-two-cities.jpg' // Replace with the actual image file path
  },
  'black-beauty': {
      title: 'Black Beauty',
      description: 'A novel by Anna Sewell about the life of a horse named Black Beauty.',
      cover: 'black-beauty.jpg' // Replace with the actual image file path
  },
  'gullivers-travels': {
      title: "Gulliver's Travels",
      description: 'A satirical novel by Jonathan Swift, featuring the adventures of Lemuel Gulliver.',
      cover: 'gullivers-travels.jpg' // Replace with the actual image file path
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
