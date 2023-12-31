const myLibrary = []
const main = document.querySelector("main")

class Book{
    constructor(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages= pages
    this.read = read
    }
}


function addToLibrary(book){
    myLibrary.push(book)
}


function showBook(book){
    const card = document.createElement("div")
    card.classList = "card"
    const divTitle = document.createElement("div")
    const title = document.createElement("h2")
    divTitle.classList = "title"
    title.textContent = book.title
    divTitle.appendChild(title)
    const divAuthor = document.createElement("div")
    const author = document.createElement("div")
    author.classList = "info"
    author.textContent = `Author: ${book.author}`
    divAuthor.appendChild(author)
    const divPages = document.createElement("div")
    const pages = document.createElement("div")
    divPages.textContent = `Pages: ${book.pages}`
    pages.classList = "info"
    divPages.appendChild(pages)
    const buttonRead = document.createElement("button")
    const buttonDelete = document.createElement("button")
    
    if(book.read.toLowerCase().includes("yes")){
        buttonRead.classList = "read yes"
    }
    else{
        buttonRead.classList = "read no"
    }
    buttonRead.textContent = `Read?: ${book.read}`
    buttonDelete.classList = "delete"
    buttonDelete.textContent = "Delete"
    card.appendChild(divTitle)
    card.appendChild(divAuthor)
    card.appendChild(divPages)
    card.appendChild(buttonRead)
    card.appendChild(buttonDelete)
    main.appendChild(card)
    buttonRead.addEventListener("click", (event) => {
        event.target.classList.toggle("yes")
        if(event.target.classList.contains("yes")){
            event.target.textContent = `Read?: yes`
        }
        else{
        event.target.textContent = `Read?: no`
        }
        const index = myLibrary.findIndex( item => item.title === book.title)
        if (myLibrary[index].read === "yes"){
            myLibrary[index].read = "no"
        }
        else{
            myLibrary[index].read = 'yes'
        }   
    })

    buttonDelete.addEventListener("click", () => {
        const index = myLibrary.findIndex( item => item.title === book.title)
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }
        card.remove()
    })
}



const readButtons = document.querySelectorAll(".read")
const dialog = document.querySelector("dialog")
const newBook = document.querySelector(".new-book")
newBook.addEventListener("click", () => dialog.showModal())
const close = document.querySelector(".close")
close.addEventListener("click", () => dialog.close())



const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, pages, read)
    addToLibrary(newBook)
    showBook(newBook)
    dialog.close();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.value = "") 
}
)
