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
              href="https://growinfaithapp.s3.ap-southeast-2.amazonaws.com/growinfaith.apk?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaDmFwLXNvdXRoZWFzdC0yIkcwRQIgFwsLz%2FgcLsTFO%2B%2FjAxKSU%2FFT5ic4DN1bGig1xqXFf%2FgCIQDfFz10%2FSwW0yJX5mGMU%2Fc%2BWZAcGkUb19UG6K295JFpgSrHAwhdEAAaDDQ0MjQyNjg0OTI0MSIM6OKMSR2gRsssFoeGKqQDHtRyiLrSE52ZogyAfOsLKr%2FSqcJh22Uhim4z%2BJ8RYdFDlIbetnsQsvvWRenddeKo3mn554NIWcCqOIBlZ9LJ5qAPzSiQIRiDCSwqUM7r9ON%2BU%2FiMt%2BDd%2Bc2hlKH1nwfxLDcRBFfSXLoMzS0LgDrCVMXcZEiLGW1VdXhmQXjRVUJDjE9p%2B%2BMLTg%2F2GvyWaLdy5P4NziQScR1BC5k%2BIK2cEJz8eyAISL8m0B2M1THfnJSIoIziFQgwWRBIrER0LhM2fmJX2rRKj8YEd3fuGsiTWzy7BUjHJ40n46lgHveLPUUG21ZpZxffO%2F9NEi2CZFOJmZWz59HWrdavcZIOu0A5r4ElQGmQVi%2BHKJVWhWi%2BOnBesphQXEja3O2rRwL3ecbdYZyqPv%2Bg9qJAEU6q9G7BT4ESUZH2eiSHXFsLMDZ6RhpKT8l0UWIbvmcuSMnGbH3hLQUAeMWlclKufAd6M59ZmyWbG20DAOw8n%2BY1UuYKqEOwW06wMZLEUiO9Mkgu1phajkS6O6vAwd6duwSIpQMMB1F%2BZRVGVQFT6FE0fqKYwNba96v%2FMLqt5b4GOuQCNvjYO5b%2FSi23qTB5ITzrbBHrMzkiPR18pKwyOJUKwXeWKc3FiWY6PAwL7%2FlDYj24m4C%2Fvc%2Bf7nnWMwWt%2FKAwEKePNqvOiew6VwAz44hSNXf1htfPeH7bjY50tOYm6CzUH5T1KNmRYpQ7WTcSnskF7kLzaEumJ7ZgL%2Fn83t%2FgadSBiw%2FaOsFrhLo0JUmD9DzsNyxPyqaIvHORduCSQlgNZiMyrxX2YWxclq60mN%2BpRSpVYEdboekGR3Cth9JoifEYygGpnDpylThsSz0EYju9sX66QvT%2FPWPeWqd17sUAxUJmcC91RN6X0ejcKLBer4ApjkcpscVohhFbkQarEDA8cLu5LTjIxEqPdhDHqjVhmMtRNV7pPuHuez71p5iP%2BsRqlAc9F6aHFzPbvp8bt%2FtduNQyb5xl3tG9BHBegPL3pm3jk2NTJE3XS2wQjpeGN8kyAjrOLhLKnQFimNycMAIiNcMw0FQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWOAVR67M5FOM7WNY%2F20250318%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T114037Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=bd2ef17eff2fe9007c833e48e58a002268dba84bb6b025245f5e952db00a0c0b"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
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
