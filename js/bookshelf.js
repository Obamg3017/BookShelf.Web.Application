class Bookshelf {
    // This is the Bookshelf class, which contains methods for rendering, seeding and adding books to the bookshelf.
    constructor(){
        this.books = [];
    }
   

    seed(bookData) {
        // takes an array of book data and creates new Book objects for each item in the array.
        for(const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title);
            this.books.push(newBook);
        }
        this.render();
    }
    render(){
        // The render() method creates a new unordered list element for displaying the book information and comments. 
        //It loops through all the books in the bookshelf and adds their respective list items to the list.
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
        // adds a new Book object to the beginning of the bookshelf and re-renders the bookshelf to reflect the update.
        this.books.unshift(book);
        this.render();
    }
    
}




  

