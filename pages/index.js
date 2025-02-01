import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gifs = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif"
  ];

  const nextGif = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
  };

  const prevGif = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gifs.length) % gifs.length);
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
            <a href="#">
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
        <div className="carousel">
          <button className="carousel-button left" onClick={prevGif}>❮</button>
          <img src={gifs[currentIndex]} alt="Feature GIF" className="carousel-image" />
          <button className="carousel-button right" onClick={nextGif}>❯</button>
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
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .carousel-image {
          width: 100%;
          max-width: 500px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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

        @media (max-width: 768px) {
          .carousel-button {
            font-size: 18px;
            padding: 8px 12px;
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
      `}</style>
    </div>
  );
}
