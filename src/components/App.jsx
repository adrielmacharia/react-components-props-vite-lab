import { useState } from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="App">
      <Header name={blogData.name} />

      <div className="page-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A little corner of the internet</p>
            <h2 id="hero-title">
              Notes on making
              <br />
              <span>life a little more</span> <em>thoughtful.</em>
            </h2>
            <p className="hero-description">
              Ideas, observations, and useful things I&apos;ve picked up along
              the way. Written slowly, shared with care.
            </p>
            <a className="text-link" href="#stories">
              Find a good read <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-sun" />
            <div className="hero-art-card">
              <span className="hero-art-label">FIELD NOTES · Nº 01</span>
              <span className="hero-art-flower">✳</span>
              <span className="hero-art-caption">stay curious</span>
            </div>
            <span className="hero-art-spark hero-art-spark-one">✳</span>
            <span className="hero-art-spark hero-art-spark-two">✴</span>
            <span className="hero-art-note">GOOD THINGS TAKE TIME</span>
          </div>
        </section>

        <section className="about-section" id="about" aria-label="About">
          <About image={blogData.image} about={blogData.about} />
          <div className="about-aside">
            <span className="about-aside-mark" aria-hidden="true">✳</span>
            <p>Curious by nature. Collecting small moments and big ideas.</p>
          </div>
        </section>

        <ArticleList posts={blogData.posts} />

        <section className="newsletter-section" id="newsletter" aria-labelledby="newsletter-title">
          <div className="newsletter-mark" aria-hidden="true">✳</div>
          <div className="newsletter-copy">
            <p className="eyebrow">A note for your inbox</p>
            <h2 id="newsletter-title">A slower kind of scroll.</h2>
            <p>Occasional letters with new stories and things worth keeping.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="visually-hidden" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              required
            />
            <button type="submit" aria-label="Subscribe to the newsletter">
              <span>Count me in</span><span aria-hidden="true">→</span>
            </button>
            {subscribed && (
              <p className="form-feedback" role="status">
                You&apos;re on the list. Talk soon!
              </p>
            )}
          </form>
        </section>
      </div>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          {blogData.name}<span aria-hidden="true">.</span>
        </a>
        <p>Made with care, and a cup of something warm.</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
