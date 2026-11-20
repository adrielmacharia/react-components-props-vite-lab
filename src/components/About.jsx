import PropTypes from "prop-types";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="about-card">
      <img src={image} alt="blog logo" />
      <div className="about-copy">
        <p className="eyebrow">A note from the author</p>
        <p>{about}</p>
      </div>
      <span className="about-arrow" aria-hidden="true">↗</span>
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;
