import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  let touchStartX = 0;
  let touchEndX = 0;

  const gifs = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif",
    "/gif5.gif"
  ];

  const nextGif = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
      setFade(true);
    }, 300);
  };

  const prevGif = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + gifs.length) % gifs.length);
      setFade(true);
    }, 300);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextGif();
    } else if (touchEndX - touchStartX > 50) {
      prevGif();
    }
  };

  return (
    <div className="container">
      <Head>
        <title>GrowInFaith</title>
        <link rel="icon" type="image/png" href="/app_logo.png" />
      </Head>

      {/* ✅ Navigation Bar */}
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* ✅ Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1>Grow Your Faith with GrowInFaith</h1>
          <p>Discover features designed to deepen your faith and support your spiritual growth.</p>
          <div className="hero-buttons">
            <a href="#" className="download-button">
              <img src="/google-play-store.png" alt="Google Play Icon" /> Download on Google Play
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/onboard2.png" alt="GrowInFaith App Screenshot" />
        </div>
      </main>

      {/* ✅ Carousel Section */}
      <section className="features">
        <h2>Explore Our Features</h2>
        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-button left" onClick={prevGif}>❮</button>
          <div className={`carousel-image-container ${fade ? "fade-in" : "fade-out"}`}>
            <img
              key={currentIndex}
              src={gifs[currentIndex]}
              alt="Feature GIF"
              className="carousel-image"
              onError={(e) => (e.target.src = "/fallback-image.png")}
            />
          </div>
          <button className="carousel-button right" onClick={nextGif}>❯</button>
        </div>

        {/* ✅ Indicators */}
        <div className="carousel-indicators">
          {gifs.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ✅ Global Styles */}
      <style jsx>{`
        .navbar {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar a {
          text-decoration: none;
          color: black;
          font-weight: bold;
        }

        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 5rem 10%;
        }

        .hero-content {
          flex: 1;
          max-width: 50%;
          text-align: left;
          padding-right: 2rem;
        }

        .hero-buttons {
          display: flex;
          justify-content: flex-start;
        }

        .hero-image {
          flex: 1;
          max-width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 350px;
          border-radius: 20px;
        }

        /* ✅ Center hero content on smaller screens */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 5rem 5%;
          }

          .hero-content {
            max-width: 100%;
            text-align: center;
            padding: 0;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image {
            max-width: 100%;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
