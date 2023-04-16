class Book{
    constructor(title, author, language, subject){
        this.title = title;
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.comments = [];
    }

    render(){
        const bookInformationDetails = document.createElement("li");
        const booksCommentButton = document.createElement("button")
        booksCommentButton.innerHTML = "Book Comment";
        booksCommentButton.addEventListener("click", () =>{
            const bookCommentInput = document.createElement("input");
            bookCommentInput.type = "text";
            bookCommentInput.maxLength = "280";
            const bookCommentSendButton = document.createElement("button");
            bookCommentSendButton.innerHTML = "Send Book Comment";
            bookCommentSendButton.addEventListener("click", () =>{
                const bookCommentText = bookCommentInput.value;
                if(bookCommentText){
                    this.comments.push(bookCommentText);
                    bookInformationDetails.append(this.renderComments());
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
        bookInformationDetails.append(this.renderComments())
        return bookInformationDetails
    }
    renderComments(){
        const bookCommentsList = document.createElement("ul");
        for(const comments of this.comments){
            const booksCommentListItem = document.createElement("li");
            booksCommentListItem.textContent = comments;
            bookCommentsList.append(booksCommentListItem);
        }
        const commentsContainer = document.querySelector("#bookCommentsContainer");
        commentsContainer.append(bookCommentsList);
        return bookCommentsList;
    }
}