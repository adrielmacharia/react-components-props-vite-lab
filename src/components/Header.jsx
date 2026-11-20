import PropTypes from "prop-types";

function Header({ name }) {
  return (
    <header className="site-header" id="top">
      <a className="brand-link" href="#top" aria-label={`${name} home`}>
        <span className="brand-mark" aria-hidden="true">s.</span>
        <h1 className="brand-title">{name}</h1>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#stories">Stories</a>
        <a href="#about">About</a>
        <a className="nav-note" href="#newsletter">Say hello <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
