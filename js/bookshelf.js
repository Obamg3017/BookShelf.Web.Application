class Bookshelf {
    constructor(){
        this.books = [];
    }

    seed(bookData) {
        for(const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title);
            this.books.push(newBook);
        }
        this.render();
    }
    render(){
        const bookContainer = document.querySelector("#bookContainer");
        bookContainer.textContent = " ";

        const bookShelfInfo = document.createElement("ul");

        for(const book of this.books){
            const bookListItem = book.render();
            const commentsListItem = book.renderComments();
            bookShelfInfo.append(commentsListItem)
            bookShelfInfo.append(bookListItem);

        }
        bookContainer.append(bookShelfInfo);
    }
    addBook(book){
        this.books.unshift(book);
        this.render();
    }
}

