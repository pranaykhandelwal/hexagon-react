import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <div className="brdr_ftr"></div>
          <div className="ftr_main">
            <ul>
              <li>Copyright @ 2022 Marketplace Private Limited. All rights reserved.</li>
            </ul>
            <ul className="ftr_right">
              <li>Privacy Policy</li>
              <li>Terms of Condition</li>
            </ul>
          </div>
        </div>
      </section>
     </footer>
  );
};

export default Footer;
