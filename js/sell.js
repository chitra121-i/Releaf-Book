// ================= GET LISTINGS =================

const listingsContainer =
    document.getElementById("listings-container");


// ================= DISPLAY BOOKS =================

function displayBooks() {

    // Get saved books from localStorage

    const books =
        JSON.parse(
            localStorage.getItem("releafBooks")
        ) || [];


    // Clear existing listings

    listingsContainer.innerHTML = "";


    // ================= NO LISTINGS =================

    if (books.length === 0) {

        listingsContainer.innerHTML = `

            <div class="no-listings">

                <h2>
                    No Books Listed Yet
                </h2>

                <p>
                    Start selling your unused books
                    and give them a new reader.
                </p>

                <a
                    href="listing.html"
                    class="list-book-btn"
                >
                    + List Your First Book
                </a>

            </div>

        `;

        return;
    }


    // ================= DISPLAY BOOKS =================

    books.forEach(function(book) {

        const bookCard =
            document.createElement("div");

        bookCard.classList.add(
            "listing-card"
        );


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


                <p class="listing-isbn">
                    ISBN:
                    ${book.isbn || "Not available"}
                </p>


                <p class="listing-author">
                    ${book.author}
                </p>


                <p class="listing-description">
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


                <p class="listing-status">

                    ${
                        book.status === "sold"
                        ? "🔵 Sold"
                        : "🟢 Available"
                    }

                </p>


                <div class="listing-actions">

                    <button
                        type="button"
                        class="edit-btn"
                    >
                        Edit
                    </button>


                    <button
                        type="button"
                        class="delete-btn"
                    >
                        Delete
                    </button>

                </div>

            </div>

        `;


        listingsContainer.appendChild(
            bookCard
        );

    });

}


// ================= LOAD LISTINGS =================

displayBooks();