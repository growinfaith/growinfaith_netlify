import Head from 'next/head';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (!gifs.length) {
      console.error("GIFs array is empty or undefined");
    }
  }, []);

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
    touchStartX = e.touches[0]?.clientX || 0;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0]?.clientX || 0;
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
        <div className="carousel-container">
          <button className="carousel-button left" onClick={prevGif}>❮</button>
          <div
            className="carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`carousel-image-container ${fade ? "fade-in" : "fade-out"}`}>
              <img
                key={currentIndex}
                src={gifs[currentIndex] || "/fallback-image.png"}
                alt="Feature GIF"
                className="carousel-image"
              />
            </div>
          </div>
          <button className="carousel-button right" onClick={nextGif}>❯</button>
        </div>
        
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

      <section className="plans">
        <h2>Subscription Plans</h2>
        <div className="plan-box">
          <div className="plan">Monthly: ₱49</div>
          <div className="plan">Quarterly: ₱149</div>
          <div className="plan">Annual: ₱499</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@growinfaithapp.com</p>
        <p>Phone: 09687407712</p>
        <p>Follow us on Meta</p>
      </section>

      <footer>
        &copy; 2025 GrowInFaith. All Rights Reserved.
      </footer>

    <style jsx>{`
      .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        padding: 4rem 5%;
        flex-wrap: wrap;
      }
    
      .hero-content {
        flex: 1;
        max-width: 50%;
        min-width: 300px;
      }
    
      .hero-image {
        flex: 1;
        max-width: 50%;
        min-width: 300px;
        display: flex;
        justify-content: center;
      }
    
      .carousel-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 100%;
        overflow: hidden;
        flex-direction: column;
        padding: 20px;
      }
    
      .carousel-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    
      .carousel-image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        position: relative;
      }
    
      .carousel-image {
        width: 80%;
        max-width: 600px;
        height: auto;
        object-fit: contain;
      }
    
      .carousel-indicators {
        display: flex;
        justify-content: center;
        margin-top: 15px;
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
          padding: 3rem 5%;
        }
    
        .hero-content {
          max-width: 100%;
        }
    
        .hero-image {
          max-width: 90%;
          margin-top: 20px;
        }
    
        .carousel-container {
          flex-direction: column;
        }
    
        .carousel-image {
          width: 100%;
          max-width: 90%;
        }
      }
    `}</style>

    </div>
  );
}
