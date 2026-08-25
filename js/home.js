const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 250,
        image: "images/atomic-habits.jpg"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 180,
        image: "images/alchemist.jpg"
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 350,
        image: "images/clean-code.jpg"
    }
];


const bookContainer =
    document.getElementById("home-books");


books.forEach(function(book) {

    const card =
        document.createElement("div");

    card.className =
        "home-book-card";


    card.innerHTML = `
        <div class="book-image">

            <img
                src="${book.image}"
                alt="${book.title}">

        </div>

        <h3>
            ${book.title}
        </h3>

        <p>
            ${book.author}
        </p>

        <strong>
            ₹${book.price}
        </strong>
    `;


    bookContainer.appendChild(card);

});