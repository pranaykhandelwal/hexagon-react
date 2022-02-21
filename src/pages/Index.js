import { Link } from 'react-router-dom';
import INDEX_PAGE from '../assets/images/index_page.jpg';
import ABOUT_US from'../assets/images/aboutus.png';

const Index = () => {
  return (
    <section className="hero">
    <div className="hero_sub">
      <div className="row">
        <div className="col-md-7 col-sm-7" style={{margin: "auto"}}>
          <h1> Discover, collect, and sell extraordinary NFTs</h1>
          <p>Hexagon is the world's first and largest <br/> NFT marketplace</p>
          <div className="btn_group">
            <Link to='' className="btn btn_comn2">Explore</Link>
            <Link to='/create-item' className="btn btn_comn1">Create</Link>
          </div>
        </div>
        <div className="col-md-5 col-sm-5">
          <div className="hero_card">
            <img src={INDEX_PAGE} alt="" />
            <div className="card_btm">
              <div className="d-flex justify-content-between align-items-center">
                <img src={ABOUT_US} alt="" />
                <div>
                  <p>connected</p>
                  <p>User</p>
                </div>

              </div>
              <i className="fas fa-info-circle fa-lg"></i>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Index;
