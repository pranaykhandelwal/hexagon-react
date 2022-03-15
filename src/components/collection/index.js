import { Fragment, useState } from 'react';
import COLLECTION_BNR from '../../assets/images/collection_bnr.png';
import ABOUTUS from '../../assets/images/aboutus.png';
import COMPUTER from '../../assets/images/Internet Computer.png';
import CollectionItems from './collection_item';
import CollectionActivity from './collection_activity/CollectionActivity';

const Index = () => {

  const [showCollectionItem, setshowCollectionItem] = useState(true);

  const HandleShowCollectionItem = (e) =>{
    e.preventDefault();
    setshowCollectionItem(true);
  }

  const HandleHideCollectionItem = () =>{
    // e.preventDefault();
    setshowCollectionItem(false);
  }

  return (
    <Fragment>
    <section className="clctn_prfil">
        <div className="background">
            <img src={COLLECTION_BNR} alt=""/>
        </div>
        <div className="prfil_main">
            <img src={ABOUTUS} className="mx-auto d-block" alt="profile"/>
        </div>
    </section>

    <section className="clctn_content">
        <div className="container">
            <h1>ICP Bunny</h1>
            <h3>Collection of 77</h3>
            <div className="row">
                <div className="col-md-2 col-sm-2 offset-md-2">
                    <div className="card_clection">
                        <button type="button" className="btn btn_cont">10K <br/> <span>item</span></button>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2">
                    <div className="card_clection">
                        <button type="button" className="btn btn_cont">985 <br/> <span>owner</span></button>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2">
                    <div className="card_clection">
                        <button type="button" className="btn btn_cont">
                          <img src={COMPUTER} alt=""/>
                          2.43
                          <br/>
                          <span>floor price</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2">
                    <div className="card_clection">
                        <button type="button" className="btn btn_cont"><img src={COMPUTER}
                                alt=""/> 4.5K <br/> <span>valume
                                traded</span></button>
                    </div>
                </div>
            </div>
            <br/>
            <h4 align="center">10,000 ICPBunny NFTs live in BunnyIsland powered by Internet Computers and earn
                ICPCarrots daily and breed baby bunnies periodically. Holding ICPBunny is an entry ticket for BunnyDAO.
                3D Bunny are the avatars for the Bunny metaverse in development.</h4>
        </div>
    </section>

    <section className="prfil_fltr">
        <div className="container">
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item" onClick={(e) => HandleShowCollectionItem(e)}>
                <a className={`nav-link ${showCollectionItem ? 'active' : '' }`} active data-bs-toggle="tab" href="#item"><i className="fas fa-th"></i> Items</a>
                </li>
                <li className="nav-item" onClick={(e) => HandleHideCollectionItem(e)}>
                    <a className={`nav-link ${showCollectionItem ? '' : 'active' }`} data-bs-toggle="tab" href="#activity"><i className="fas fa-chart-line"></i>
                        Activity</a>
                </li>
            </ul>

            <div className="tab-content">
                {showCollectionItem && <CollectionItems/>}
                {!showCollectionItem && <CollectionActivity/>}
            </div>
        </div>
    </section>
    </Fragment>
  );
};

export default Index;
