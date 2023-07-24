// Book objects
const books = [
    {
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      year: 1883,
    },
    {
      title: "Gulliver's Travels",
      author: "Jonathan Swift",
      year: 1726,
    },
    {
      title: "Black Beauty",
      author: "Anna Sewell",
      year: 1877,
    },
    {
      title: "A Tale of Two Cities",
      author: "Charles Dickens",
      year: 1859,
    },
  ];
  
  // Function to display books
  function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = ""; // Clear previous content
  
    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.innerHTML = `<b>${book.title}</b> - ${book.year} - ${book.author}`;
      booksContainer.appendChild(bookElement);
    });
  }
  
  // Function to enable adding new books
  function addBook(title, author, year) {
    const newBook = {
      title: title,
      author: author,
      year: year,
    };
    books.push(newBook);
    displayBooks();
  }
  
  // Initial display of books
  displayBooks();
  