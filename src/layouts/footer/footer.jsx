import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="left-section">
          <h1 className="title">Ethem KIZILYER</h1>
        </div>
        <div className="right-section">
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/ethem-kizilyer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/ethemkizilyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
