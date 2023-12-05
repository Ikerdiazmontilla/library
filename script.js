const myLibrary = []
const main = document.querySelector("main")

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages= pages
    this.read = read
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
    const buttonEdit = document.createElement("button")
    const buttonDelete = document.createElement("button")
    
    if(book.read.toLowerCase().includes("yes")){
        buttonRead.classList = "read yes"
    }
    else{
        buttonRead.classList = "read no"
    }
    buttonRead.textContent = `Read?: ${book.read}`
    buttonEdit.classList = "edit"
    buttonEdit.textContent = "Edit"
    buttonDelete.classList = "delete"
    buttonDelete.textContent = "Delete"
    card.appendChild(divTitle)
    card.appendChild(divAuthor)
    card.appendChild(divPages)
    card.appendChild(buttonRead)
    card.appendChild(buttonEdit)
    card.appendChild(buttonDelete)
    main.appendChild(card)
    buttonRead.addEventListener("click", changeRead)
    buttonDelete.addEventListener("click", () => {
        const index = myLibrary.findIndex( book => book.title === divTitle)
        if (index !== -1) {
            array.splice(index, 1);
        }
        card.remove()
        })
}

function changeRead(event){
    event.target.classList.toggle("yes")
    if(event.target.classList.contains("yes")){
        event.target.textContent = `Read?: yes`
    }
    else{
        event.target.textContent = `Read?: no`
    }
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
    showBook(newBook)
    dialog.close();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.value = "") 
}
)