import { Fragment, useState } from 'react';
import COLLECTION_BNR from '../../assets/images/collection_bnr.jpg'
import ABOUTUS from '../../assets/images/aboutus.png';
import COMPUTER from '../../assets/images/Internet Computer.png'
import RESTAURANTS from '../../assets/images/serch_restaurants.svg'
import NO_HISTORY_DATA from '../../assets/images/no-history-data.svg'
import STOLIC_WALLET from '../../assets/images/Stoic Wallet.png'
import PLUG from '../../assets/images/plug.png'
import CollectionItems from './collection_item/CollectionItems';
import CollectionActivity from './collection_activity/CollectionActivity';
import { Link } from 'react-router-dom';

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
    <section class="clctn_prfil">
        <div class="background">
            <img src={COLLECTION_BNR} alt=""/>
        </div>
        <div class="prfil_main">
            <img src={ABOUTUS} class="mx-auto d-block" alt="profile"/>
        </div>
    </section>

    <section class="clctn_content">
        <div class="container">
            <h1>ICP Bunny</h1>
            <h3>Collection of 77</h3>
            <div class="row">
                <div class="col-md-2 col-sm-2 offset-md-2">
                    <div class="card_clection">
                        <button type="button" class="btn btn_cont">10K <br/> <span>item</span></button>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2">
                    <div class="card_clection">
                        <button type="button" class="btn btn_cont">985 <br/> <span>owner</span></button>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2">
                    <div class="card_clection">
                        <button type="button" class="btn btn_cont">
                          <img src={COMPUTER} alt=""/>
                          2.43
                          <br/> 
                          <span>floor price</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2">
                    <div class="card_clection">
                        <button type="button" class="btn btn_cont"><img src={COMPUTER}
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

    <section class="prfil_fltr">
        <div class="container">
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item" onClick={(e) => HandleShowCollectionItem(e)}>
                <a className={`nav-link ${showCollectionItem ? 'active' : '' }`} active data-bs-toggle="tab" href="#item"><i class="fas fa-th"></i> Items</a>
                </li>
                <li class="nav-item" onClick={(e) => HandleHideCollectionItem(e)}>
                    <a className={`nav-link ${showCollectionItem ? '' : 'active' }`} data-bs-toggle="tab" href="#activity"><i class="fas fa-chart-line"></i>
                        Activity</a>
                </li>
            </ul>

            <div class="tab-content">
                {showCollectionItem && <CollectionItems/>}
                {!showCollectionItem && <CollectionActivity/>}
            </div>
        </div>
    </section>
    </Fragment>
  );
};

export default Index;
