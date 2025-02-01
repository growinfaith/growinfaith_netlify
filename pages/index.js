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
          <p>Discover features designed to deepen your faith and support your spiritual growth.</p>
          <div className="hero-buttons">
            <a href="#">
              <img src="/google-play-store.png" alt="Google Play Icon" /> Download on Google Play
            </a>
          </div>
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
    </div>
  );
}
