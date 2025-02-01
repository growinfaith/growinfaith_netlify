import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GrowInFaith</title>
        <link rel="icon" type="image/png" href="/app_logo.png" />
      </Head>

      <main className="hero">
        <div className="hero-content">
          <h1>Grow Your Faith with GrowInFaith</h1>
          <p>Begin your journey with features designed to deepen your faith and spiritual growth.</p>
          <a className="download-button" href="#">
            <img src="/google-play-store.png" alt="Google Play Icon" /> Download on Google Play
          </a>
        </div>
        <div className="hero-image">
          <img src="/onboard.png" alt="GrowInFaith App Screenshot" />
        </div>
      </main>

      <section className="features">
        <h2>Explore Our Features</h2>
        <div className="feature-box">
          <div className="feature">📖 Daily Devotionals</div>
          <div className="feature">🗣️ Share the Gospel</div>
          <div className="feature">🤝 Community</div>
          <div className="feature">✨ And More...</div>
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        body {
          background: linear-gradient(135deg, #DA70D6, #FF69B4);
          color: white;
          text-align: center;
          overflow-x: hidden;
        }
        .hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 6rem 10%;
          min-height: 100vh;
        }
        .hero-content {
          max-width: 50%;
          text-align: left;
        }
        .hero-content h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
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
          transition: 0.3s;
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
          max-width: 40%;
        }
        .hero-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }
        .features, .plans, .contact {
          padding: 5rem 10%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          color: white;
          text-align: center;
          border-radius: 20px;
          margin: 4rem 2rem 2rem;
          backdrop-filter: blur(10px);
        }
        .features h2, .plans h2 {
          margin-bottom: 2rem;
        }
        .feature-box, .plan-box {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .feature, .plan {
          background: white;
          color: black;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: 0.3s;
          width: 200px;
        }
        .feature:hover, .plan:hover {
          transform: scale(1.05);
        }
        footer {
          background: rgba(0, 0, 0, 0.3);
          padding: 2rem;
          font-size: 1rem;
          text-align: center;
          color: white;
        }
      `}</style>
    </div>
  );
}
