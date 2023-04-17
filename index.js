const bookShelfInstance = new Bookshelf();
bookShelfInstance.seed(bookData);

document.querySelector("#addBook").addEventListener("click", () => {
    const { value: author } = document.querySelector("#author");
    const { value: language } = document.querySelector("#language");
    const { value: subject } = document.querySelector("#subject");
    const { value: title } = document.querySelector("#title");


    const newBook = new Book(author, language, subject, title);
    bookShelfInstance.addBook(newBook);
    localStorage.setItem("bookshelf", JSON.stringify(bookShelfInstance.books));
});

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





