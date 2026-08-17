import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
     "/for1.png",
     "/for2.png",
     "/for3.png",
  ];

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">

  <div className="hero-content">
    <span className="hero-small">
      <b>NEW COLLECTION 2026</b>
    </span>

    <h1>
      Complete Home
      <span>Furniture</span>
    </h1>

    <p>
      <b>
        Discover modern furniture designed to make
        your home comfortable, stylish and unique.
      </b>
    </p>

    <Link to="/products" className="hero-btn">
      Shop Collection →
    </Link>
  </div>

  <div className="hero-image">

    <button
      className="slider-btn slider-prev"
      onClick={previousImage}
    >
      ❮
    </button>

    <img
      src={images[currentImage]}
      alt="Modern Furniture"
    />

    <button
      className="slider-btn slider-next"
      onClick={nextImage}
    >
      ❯
    </button>

    <div className="slider-dots">
      {images.map((_, index) => (
        <button
          key={index}
          className={currentImage === index ? "active" : ""}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </div>

  </div>

</section>
      {/* CATEGORIES */}
      <section className="home-categories">

        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Shop By Category</h2>
          <p>Find something perfect for every room.</p>
        </div>

        <div className="category-grid">

          <Link to="/products" className="category-card">
            <div className="category-icon"><img src="son4.png" alt="Modern Sofa" /></div>
            <h3>Sofas</h3>
            <p>Comfortable & stylish</p>
            <span>Explore →</span>
          </Link>

          <Link to="/products" className="category-card">
            <div className="category-icon"><img src="son1.png" alt="" /></div>
            <h3>Chairs</h3>
            <p>Modern designs</p>
            <span>Explore →</span>
          </Link>

          <Link to="/products" className="category-card">
            <div className="category-icon"> 
              <img src="son3.png" alt="Wooden Table" />
            </div>
            <h3>Tables</h3>
            <p>Elegant furniture</p>
            <span>Explore →</span>
          </Link>

          <Link to="/products" className="category-card">
            <div className="category-icon"><img src="son2.png" alt="" /></div>
            <h3>Beds</h3>
            <p>Relax in comfort</p>
            <span>Explore →</span>
          </Link>

        </div>

      </section>


      {/* BANNER */}
      <section className="home-banner">

        <div>
          <span>DESIGNED FOR YOU</span>

          <h2>
            Modern Furniture.
            <br />
            Timeless Comfort.
          </h2>

          <p>
            Upgrade your living space with our latest collection.
          </p>

          <Link to="/products" className="banner-btn">
            View Collection →
          </Link>
        </div>

      </section>


      

    </div>
  );
}

export default Home;