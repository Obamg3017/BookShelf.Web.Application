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
        bookContainer.style.backgroundImage = "url('https://i0.wp.com/vrscout.com/wp-content/uploads/2019/02/LeBronJamesSnapImage-1.jpg?resize=810%2C464&ssl=1')"
        bookContainer.textContent = " ";

        const bookShelfInfo = document.createElement("ul");

        for(const book of this.books){
            const bookListItem = book.render();
            const commentsListItem = book.renderComms();
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




  

