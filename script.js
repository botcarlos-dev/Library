const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    console.log(myLibrary); // For debugging purposes
    displayBooks();
}

function displayBooks() {
    const container = document.getElementById('bookCardsContainer');
    container.innerHTML = ''; // Clear existing content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('cards');

        bookCard.innerHTML = `
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <h3>${book.pages} pages</h3>
            <h3>${book.readStatus}</h3>
            <button id="remove_book" onclick="removeBook(${index})">Remove Book</button>
        `;

        container.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Get the modal
var modal = document.getElementById("addBookModal");

// Get the button that opens the modal
var btn = document.getElementById("Add_Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the form element
var form = document.getElementById("addBookForm");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const readStatus = form.read_status.value;

    // Add book to library
    addBookToLibrary(title, author, pages, readStatus);

    // Close the modal
    modal.style.display = "none";

    // Reset the form
    form.reset();
}
