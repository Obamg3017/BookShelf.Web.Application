const bookShelfInstance = new Bookshelf();
bookShelfInstance.seed(bookData);

document.querySelector("#addBook").addEventListener("click", () => {
    const { value: title } = document.querySelector("#title");
    const { value: author } = document.querySelector("#author");
    const { value: subject } = document.querySelector("#subject");
    const { value: language } = document.querySelector("#language");

    bookShelfInstance.addBook(new Book(title, author, subject, language));
});