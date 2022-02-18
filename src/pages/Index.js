import INDEX_PAGE from '../assets/images/index_page.jpg';
import ABOUT_US from'../assets/images/aboutus.png';

const Index = () => {
  return (
    <section class="hero">
    <div class="hero_sub">
      <div class="row">
        <div class="col-md-7 col-sm-7" style={{margin: "auto"}}>
          <h1> Discover, collect, and sell extraordinary NFTs</h1>
          <p>Hexagon is the world's first and largest <br/> NFT marketplace</p>

          <div class="btn_group">
            <a href="#" class="btn btn_comn2" type="button">Explore</a>
            <a href="create-item.html" class="btn btn_comn1" type="button">Create</a>
          </div>
        </div>
        <div class="col-md-5 col-sm-5">
          <div class="hero_card">
            <img src={INDEX_PAGE} alt="" />
            <div class="card_btm">
              <div class="d-flex justify-content-between align-items-center">
                <img src={ABOUT_US} alt="" />
                <div>
                  <p>connected</p>
                  <p>User</p>
                </div>

              </div>
              <i class="fas fa-info-circle fa-lg"></i>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Index;
