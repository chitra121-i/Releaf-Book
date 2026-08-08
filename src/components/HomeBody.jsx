function HomeBody() {
  return (
    <main>

      <section className="hero">

        <div className="hero-text">

          <h1>
            Buy and Sell Books Easily
          </h1>

          <p>
            Find affordable second-hand books or sell the books
            you no longer need.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Browse Books
            </button>

            <button className="secondary-btn">
              Sell Your Books
            </button>
          </div>

        </div>

        

      </section>


      <section className="categories">

        <h2>Explore Categories</h2>

        <div className="category-container">

          <div className="category-card">
            <h3>Engineering</h3>
            <p>Books for engineering students</p>
          </div>

          <div className="category-card">
            <h3>Medical</h3>
            <p>Medical and healthcare books</p>
          </div>

          <div className="category-card">
            <h3>Competitive Exams</h3>
            <p>Preparation books and guides</p>
          </div>

          <div className="category-card">
            <h3>Novels</h3>
            <p>Fiction and non-fiction books</p>
          </div>

        </div>

      </section>


      <section className="how-it-works">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>Find a Book</h3>
            <p>Search for the book you want to buy.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Contact Seller</h3>
            <p>Connect with the seller and discuss the book.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Buy or Sell</h3>
            <p>Complete the transaction and get your book.</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default HomeBody;