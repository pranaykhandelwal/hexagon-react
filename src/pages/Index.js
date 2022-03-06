import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import INDEX_PAGE from '../assets/images/index_page.jpg';
import ABOUT_US from'../assets/images/aboutus.png';
import HomePageInfoModal from '../components/modals/home-page-info';

const Index = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const goToUserProfile = () => {
    let path = `/profile`;
    history.push(path);
  }

  return (
    <section className="hero">
      <div className="hero_sub">
        <div className="row">
          <div className="col-md-7 col-sm-7" style={{margin: "auto"}}>
            <h1> Discover, collect, and sell extraordinary NFTs</h1>
            <p>Hexagon is the world's first and largest <br/> NFT marketplace</p>
            <div className="btn_group">
              <Link to='/collection' className="btn btn_comn2">Explore</Link>
              <Link to='/create-item' className="btn btn_comn1">Create</Link>
            </div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div className="hero_card">
              <img src={INDEX_PAGE} alt="" />
              <div className="card_btm">
                <div className="d-flex justify-content-between align-items-center" onClick={goToUserProfile}>
                  <img src={ABOUT_US} alt="" />
                    <div className="cursorPointer">
                      <p>connected</p>
                      <p>User</p>
                    </div>
                </div>
                <i className="fa fa-info-circle fa-lg cursorPointer" onClick={ handleShow }></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePageInfoModal show={show} setShow={setShow}/>
    </section>
  );
};

export default Index;
