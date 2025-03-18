import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  let touchStartX = 0;
  let touchEndX = 0;

  const gifs = [
    '/gif1.gif',
    '/gif2.gif',
    '/gif3.gif',
    '/gif4.gif',
    '/gif5.gif',
  ];

  useEffect(() => {
    if (!gifs.length) {
      console.error('GIFs array is empty or undefined');
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

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@growinfaithapp.com</p>
        <p>Phone: 09687407712</p>
        <p>Follow us on Meta</p>
      </section>

      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          background: '#9b3f78',
          color: '#fff',
        }}
      >
        <Link href="/privacy-policy">
          <a style={{ color: '#fff', textDecoration: 'underline', marginRight: '15px' }}>
            Privacy Policy
          </a>
        </Link>
        <Link href="/account/delete-request">
          <a style={{ color: '#fff', textDecoration: 'underline' }}>
            Request Account Deletion
          </a>
        </Link>
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

        .hero-buttons {
          margin-top: 20px;
        }

        .download-button {
          display: inline-flex;
          align-items: center;
          background-color: #4285f4;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        .download-button:hover {
          background-color: #357ae8;
        }

        .contact {
          padding: 2rem 5%;
          text-align: center;
        }

        footer {
          margin-top: 40px;
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
        }
      `}</style>
    </div>
  );
}
