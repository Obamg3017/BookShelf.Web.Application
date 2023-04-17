class Book{
    constructor(author, language, subject, title){
        // This constructor initializes a new instance of a Book object with the given author, language, subject and title
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comments = [];
    }

    render(){
        // This method creates a list of book information details and adds a button to add book comments. 
        //It then appends the book information details and book comments to a new HTML element.
        const bookInformationDetails = document.createElement("li");
        const booksCommentButton = document.createElement("button")
        booksCommentButton.innerHTML = "Book Comment";
        booksCommentButton.addEventListener("click", () =>{
            const bookCommentInput = document.createElement("input");
            bookCommentInput.type = "text";
            bookCommentInput.maxLength = "280";
            const bookCommentSendButton = document.createElement("button");
            bookCommentSendButton.innerHTML = "Add Book Comment";
            bookCommentSendButton.addEventListener("click", () =>{
                const bookCommentText = bookCommentInput.value;
                if(bookCommentText){
                    this.comments.push(bookCommentText);
                    bookInformationDetails.append(this.renderComms());
                    localStorage.setItem(`comments-${this.subject}`, JSON.stringify(this.comments));
                    bookCommentInput.value = " "
                }
            });
            bookInformationDetails.append(bookCommentInput);
            bookInformationDetails.append(bookCommentSendButton);
        });
        const h2 = document.createElement("h2");
        h2.textContent = `Title: ${this.title}`;
        bookInformationDetails.append(h2);

        const h3 = document.createElement("h3");
        h3.textContent = `Author: ${this.author}`;
        bookInformationDetails.append(h3);

        const h4 = document.createElement("h4");
        h4.textContent = `Language: ${this.language}`;
        bookInformationDetails.append(h4);

        const p = document.createElement("p");
        p.textContent = `Subject: ${this.subject}`;
        bookInformationDetails.append(p);
        bookInformationDetails.append(booksCommentButton);
        bookInformationDetails.append(this.renderComms())
        
        return bookInformationDetails
    }
    renderComms(){
        // This method creates a list of book comments and appends them to an HTML element with an id of "bookCommentsContainer". 
        //It also retrieves any saved comments for the current book from local storage and updates the comments array.

        const bookCommentsList = document.createElement("ul");
        const savedComments = localStorage.getItem(`comments-${this.subject}`);
        if(savedComments !== null){
            this.comments = JSON.parse(savedComments)
        }
        for(const comments of this.comments){
            const booksCommentListItem = document.createElement("li");
            booksCommentListItem.textContent = comments;
            booksCommentListItem.style.color = "white";
            bookCommentsList.append(booksCommentListItem);
        }
        const commentsContainer = document.querySelector("#bookCommentsContainer");
        commentsContainer.append(bookCommentsList);
        return bookCommentsList;
    }
}


  


