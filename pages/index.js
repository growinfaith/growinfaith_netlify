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
          <p>
            Discover features designed to deepen your faith and support your spiritual growth.
          </p>
          <div className="hero-buttons">
            <a
              href="https://growinfaithapp.s3.ap-southeast-2.amazonaws.com/growinfaith.apk?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaDmFwLXNvdXRoZWFzdC0yIkYwRAIgbeHIhgcIqyBfUC9hGmF7vbLe9uJ7B4kD%2B7Uf1BarxmoCIG2dD3D7BrhmH8q8ouW7VpqcNSwTPg%2FTTmw9hRH9H9nlKscDCG0QABoMNDQyNDI2ODQ5MjQxIgzOwqMvIRMFLIzDWzsqpAOdILHxgxYeGrovLuD4vUvq8DL8ze2TL3yqxXX83nAr3fdxTvOhCb8cHQK2gI77ol%2BT34dCvj1qaW6WEBupYOnmifZ3fARDBhFc4UiW1Ts6dc1AA%2FbH38nyLoEvItI2AOMMd2YnEAF0obbMNfsZmpzj35N9ysfxrVYBwdX3WYH3v6BwcQb619ZtbbFwkW4TY%2BrtSYwLu7%2BSLty1kEFvjbxjZzZzWXsWFqvIc8Y%2FkJPY22JNPwemk0JZlU%2FK8m%2BDwil78LYrtkBReAkUFUB08gMxxL2cKzwAoeSR1WdLoBZAjt%2BogorR2hHrqq8Un%2B1VEPy%2BaLIbDHvY0RJAxJ4yFOvPHmpZCFW7h1HT%2FMSfsflSBVdazYGZnqw%2BAJjj7GUirk0xN5zlEuJ5nYxgmsllOGSJMyevBBEXb6bs32C23ZfPzPxVPPWPRi1mwYhtZwPC04fhaM3aQJFztn4aZDQA3tclJ6Y3CN5rzFKktHcg1Mwyc%2FkEwptWPElWueq5rp9n6QsJ08WjTeH8eSn42cTOlBNLm78cbM0ChQLlcnl1MKZmao2sFv4wiProvgY65QLRG0RtbqzAw1k5gf%2FBp5hoq9bW%2FFzm89wgAGtpoWR8%2FDhDrHjjoVZJcnyPvbIwIM%2FIJai12JH0l5lFTOCy9Fb7BNFmyCJn32WZQ0eFGC3EFiiluu7LmTw9OSx81llfXZFmqFXgqPJzz5OvVwe%2Bu74hhBATUlCtIG5l0zfj9yltTZvMzQvgSHVeCi0vX4PIuxpVIog5YE7gAL2N4J9FcA%2BmfMCDX2DqA6lICYCvtp5yyr2D4zW1W4E3fIUeR9lXCT2pUn1YFWogZyKlPrHaUbtwGZP%2BqIdtt3bWM6AkU7S3vOHAV0aK2emPZtt1kvrsTmle6kEzoveTs9VvUr9mUuma1ldIOTHnf4rhN80CSNto45xEjsxcOxXyXVy3UHEgKfAe2ULwfdxjrC3M4pltIeCF1juQ6%2FPHoNIwDkp6p%2F%2B%2BwwSzRJH5F0DbcSUpxSXBkx0QjX4qOO88MIWgP2i7mFLxFkbiyN8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWOAVR67MYZGCIWHT%2F20250319%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T034523Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=27d71f120c0255a75ffd5c4867c883c859acd2501cf64e2d991d2ed04a5c42e7"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/gif_home2.png" alt="GrowInFaith App Screenshot" />
        </div>
      </main>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: growinfaithapp@gmail.com</p>
        <p>Phone: 09687407712</p>
        <p>Follow us on Meta</p>
      </section>

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
          padding: 15px 30px; /* Increased padding for a larger button */
          border-radius: 5px;
          text-decoration: none;
          font-size: 1.2rem; /* Increased font size */
          transition: background-color 0.3s;
        }

        .download-button:hover {
          background-color: #357ae8;
        }

        .contact {
          padding: 2rem 5%;
          text-align: center;
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
