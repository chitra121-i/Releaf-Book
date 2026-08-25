// ================= GET FORM =================

const sellForm =
    document.getElementById("sell-form");


// ================= GET FORM FIELDS =================

const isbnInput =
    document.getElementById("isbn");

const titleInput =
    document.getElementById("book-title");

const authorInput =
    document.getElementById("author");

const categoryInput =
    document.getElementById("category");

const priceInput =
    document.getElementById("price");

const conditionInput =
    document.getElementById("condition");

const descriptionInput =
    document.getElementById("description");

const imageInput =
    document.getElementById("book-image");

const imagePreview =
    document.getElementById("image-preview");


// ================= IMAGE PREVIEW =================

imageInput.addEventListener(
    "change",
    function() {

        const image =
            imageInput.files[0];


        if (!image) {

            imagePreview.src = "";

            imagePreview.style.display =
                "none";

            return;
        }


        // Check image type

        if (!image.type.startsWith("image/")) {

            alert(
                "Please select an image file."
            );

            imageInput.value = "";

            imagePreview.src = "";

            imagePreview.style.display =
                "none";

            return;
        }


        // Create preview

        const imageURL =
            URL.createObjectURL(image);

        imagePreview.src =
            imageURL;

        imagePreview.style.display =
            "block";

    }
);


// ================= FORM SUBMIT =================

sellForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // ================= GET VALUES =================

        const isbn =
            isbnInput.value.trim();

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

        if (isbn === "") {

            alert(
                "Please enter the ISBN."
            );

            isbnInput.focus();

            return;
        }


        if (title === "") {

            alert(
                "Please enter the book title."
            );

            titleInput.focus();

            return;
        }


        if (author === "") {

            alert(
                "Please enter the author's name."
            );

            authorInput.focus();

            return;
        }


        if (category === "") {

            alert(
                "Please select a category."
            );

            categoryInput.focus();

            return;
        }


        if (
            price === "" ||
            Number(price) <= 0
        ) {

            alert(
                "Please enter a valid selling price."
            );

            priceInput.focus();

            return;
        }


        if (condition === "") {

            alert(
                "Please select the book condition."
            );

            conditionInput.focus();

            return;
        }


        if (description === "") {

            alert(
                "Please enter a description of the book."
            );

            descriptionInput.focus();

            return;
        }


        if (!image) {

            alert(
                "Please upload a book cover."
            );

            imageInput.focus();

            return;
        }


        // ================= READ IMAGE =================

        const reader =
            new FileReader();


        reader.onload =
            function() {

                const imageData =
                    reader.result;


                // ================= CREATE BOOK =================

                const newBook = {

                    isbn: isbn,

                    title: title,

                    author: author,

                    category: category,

                    price: price,

                    condition: condition,

                    description: description,

                    image: imageData,

                    status: "available"

                };


                // ================= GET EXISTING BOOKS =================

                const books =
                    JSON.parse(
                        localStorage.getItem(
                            "releafBooks"
                        )
                    ) || [];


                // ================= ADD BOOK =================

                books.push(newBook);


                // ================= SAVE =================

                localStorage.setItem(
                    "releafBooks",
                    JSON.stringify(books)
                );


                // ================= SUCCESS =================

                alert(
                    "Book listed successfully!"
                );


                // ================= RETURN TO SELL PAGE =================

                window.location.href =
                    "sell.html";

            };


        // Convert image to Base64

        reader.readAsDataURL(image);

    }
);