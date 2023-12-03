const myLibrary = []

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages= pages
    this.read = read
}


const papu = new Book("papu", "pipo", 1, "no")
const poporrote = new Book("poporrote", "Bruh", 3, "yes")


function addToLibrary(book){
    myLibrary.push(book)
}
addToLibrary(papu)
addToLibrary(poporrote)

function showBook(book){
    
}



console.table(myLibrary)