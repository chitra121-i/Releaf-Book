// ================= GET FORM =================

const sellForm = document.querySelector(".sell-form form");


// ================= GET FORM FIELDS =================

const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const conditionInput = document.getElementById("condition");
const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("book-image");

const imagePreview = document.getElementById("image-preview");

const listingsContainer =
    document.getElementById("listings-container");


// ================= IMAGE PREVIEW =================

imageInput.addEventListener("change", function() {

    const image = imageInput.files[0];

    if (image) {

        if (!image.type.startsWith("image/")) {

            alert("Please select an image file.");

            imageInput.value = "";

            imagePreview.style.display = "none";

            return;
        }

        const imageURL = URL.createObjectURL(image);

        imagePreview.src = imageURL;

        imagePreview.style.display = "block";
    }

});


// ================= DISPLAY BOOKS =================

function displayBooks() {

    // Get saved books
    const books =
        JSON.parse(localStorage.getItem("releafBooks")) || [];


    // Clear current listings
    listingsContainer.innerHTML = "";


    // Display every saved book
    books.forEach(function(book) {

        const bookCard =
            document.createElement("div");

        bookCard.classList.add("listing-card");


        bookCard.innerHTML = `

            <img
                src="${book.image}"
                alt="${book.title}"
            >

            <div class="listing-details">

                <p class="listing-category">
                    ${book.category}
                </p>

                <h3>
                    ${book.title}
                </h3>

                <p class="listing-author">
                    ${book.author}
                </p>

                <p>
                    ${book.description}
                </p>

                <div class="listing-bottom">

                    <span class="listing-price">
                        ₹${book.price}
                    </span>

                    <span class="listing-condition">
                        ${book.condition}
                    </span>

                </div>

            </div>

        `;


        listingsContainer.appendChild(bookCard);

    });

}


// ================= FORM SUBMIT =================

sellForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values

    const title =
        titleInput.value.trim();

    const author =
        authorInput.value.trim();

    const category =
        categoryInput.value;

    const price =
        priceInput.value;

    const condition =
        conditionInput.value;

    const description =
        descriptionInput.value.trim();

    const image =
        imageInput.files[0];


    // ================= VALIDATION =================

    if (title === "") {

        alert("Please enter the book title.");

        titleInput.focus();

        return;
    }


    if (author === "") {

        alert("Please enter the author's name.");

        authorInput.focus();

        return;
    }


    if (category === "") {

        alert("Please select a category.");

        categoryInput.focus();

        return;
    }


    if (price === "" || Number(price) <= 0) {

        alert("Please enter a valid selling price.");

        priceInput.focus();

        return;
    }


    if (condition === "") {

        alert("Please select the book condition.");

        conditionInput.focus();

        return;
    }


    if (description === "") {

        alert("Please enter a description of the book.");

        descriptionInput.focus();

        return;
    }


    if (!image) {

        alert("Please upload an image of the book.");

        imageInput.focus();

        return;
    }


    // ================= READ IMAGE =================

    const reader = new FileReader();


    reader.onload = function() {

        const imageData =
            reader.result;


        // Create book object

        const newBook = {

            title: title,

            author: author,

            category: category,

            price: price,

            condition: condition,

            description: description,

            image: imageData

        };


        // Get existing books

        const books =
            JSON.parse(localStorage.getItem("releafBooks")) || [];


        // Add new book

        books.push(newBook);


        // Save books

        localStorage.setItem(
            "releafBooks",
            JSON.stringify(books)
        );


        // Display books

        displayBooks();


        // Success message

        alert(
            "Book listed successfully!\n\n" +

            "Title: " + title + "\n" +

            "Author: " + author + "\n" +

            "Price: ₹" + price
        );


        // Reset form

        sellForm.reset();

        imagePreview.src = "";

        imagePreview.style.display = "none";

    };


    // Convert image to storable data
    reader.readAsDataURL(image);

});


// ================= LOAD SAVED BOOKS =================

// Run when page opens

displayBooks();