// Create a new instance of the Bookshelf class.
const bookShelfInstance = new Bookshelf();
bookShelfInstance.seed(bookData);

// Add a new book to the bookshelf when the "add book" button is clicked.
document.querySelector("#addBook").addEventListener("click", () => {
    // Get values from input fields.
    const { value: author } = document.querySelector("#author");
    const { value: language } = document.querySelector("#language");
    const { value: subject } = document.querySelector("#subject");
    const { value: title } = document.querySelector("#title");


    const newBook = new Book(author, language, subject, title);
    bookShelfInstance.addBook(newBook);
    localStorage.setItem("bookshelf", JSON.stringify(bookShelfInstance.books));
});
// Load bookshelf data from localStorage if available, otherwise render empty bookshelf.
const bookshelfFromLocalStorage = localStorage.getItem("bookshelf");
if (bookshelfFromLocalStorage) {
    const parsedBookshelf = JSON.parse(bookshelfFromLocalStorage);
    parsedBookshelf.forEach((book) => {
        const { author, language, subject, title, comments } = book;
        const newBook = new Book(author, language, subject, title);
        newBook.comments = comments;
        bookShelfInstance.addBook(newBook);
    });
    bookShelfInstance.render();
} else {
    bookShelfInstance.render();
}





