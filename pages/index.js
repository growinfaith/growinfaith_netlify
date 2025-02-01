import Head from 'next/head';
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

      {/* ✅ Fixed hero image and download button */}
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

      <section className="features">
        <h2>Explore Our Features</h2>
        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-button left" onClick={prevGif}>❮</button>
          <div className={carousel-image-container ${fade ? "fade-in" : "fade-out"}}>
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

        {/* Indicators */}
        <div className="carousel-indicators">
          {gifs.map((_, index) => (
            <span
              key={index}
              className={dot ${index === currentIndex ? "active" : ""}}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <style jsx>{
        /* ✅ Restore hero layout */
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

        .hero-content h1 {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          justify-content: flex-start;
        }

        .download-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00C9FF, #92FE9D);
          padding: 1rem 2rem;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
          transition: 0.3s;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .download-button img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }

        .download-button:hover {
          transform: scale(1.05);
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
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* ✅ Carousel */
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .carousel-image-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-image {
          width: 100%;
          max-width: 500px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: opacity 0.5s ease-in-out;
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }

        .carousel-button {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 24px;
          border-radius: 50%;
          transition: 0.3s;
        }

        .carousel-button:hover {
          background: white;
        }

        .left {
          left: -50px;
        }

        .right {
          right: -50px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.3s;
          cursor: pointer;
        }

        .dot.active {
          background-color: #555;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 5rem 5%;
          }

          .hero-image {
            max-width: 100%;
            margin-top: 20px;
          }

          .left {
            left: -30px;
          }

          .right {
            right: -30px;
          }

          .carousel-image {
            max-width: 300px;
          }
        }
      }</style>
    </div>
  );
}
