import { Fragment } from 'react';
import COLLECTION_BNR from '../assets/images/collection_bnr.jpg'
import ABOUTUS from '../assets/images/aboutus.png';
import COMPUTER from '../assets/images/Internet Computer.png'
import RESTAURANTS from '../assets/images/serch_restaurants.svg'
import NO_HISTORY_DATA from '../assets/images/no-history-data.svg'
import STOLIC_WALLET from '../assets/images/Stoic Wallet.png'
import PLUG from '../assets/images/plug.png'

const Collection = () => {

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
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#item"><i class="fas fa-th"></i> Items</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#activity"><i class="fas fa-chart-line"></i>
                        Activity</a>
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane active" id="item">
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <div class="filter">
                                <div class="brdr_btm">
                                    <button type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#close"><span>Filter</span><i
                                            class="fas fa-sort-amount-up"></i></button>
                                </div>
                                <div class="crd_size">
                                    <a role="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#status">Status<i class="fas fa-chevron-down"></i></a>
                                    <div id="status" class="collapse">
                                        <div class="content">
                                            <div class="background">
                                                <a type="button" class="btn btn_status">Buy Now</a>
                                                <a type="button" class="btn btn_status">On Auction</a>
                                                <a type="button" class="btn btn_status">New</a>
                                                <a type="button" class="btn btn_status">Has Offer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="crd_size">
                                    <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#price">Price<i class="fas fa-chevron-down"></i></a>
                                    <div id="price" class="collapse">
                                        <div class="content">
                                            <form>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected> <i class="fas fa-dollar-sign"></i> United State
                                                        Doller
                                                        (USD)
                                                    </option>
                                                    <option value="1">ICP</option>
                                                </select>
                                                <br/>

                                                <div class="d-flex justify-content-between">
                                                    <input type="email" class="form-control" placeholder="Min"/>
                                                    <h4>to</h4>
                                                    <input type="email" class="form-control" placeholder="Max"/>
                                                </div>
                                                <br/>

                                                <button type="button" class="btn btn_comn1 btn_apply">Apply</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="crd_size">
                                    <a href="" type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#onsale">On sale in<i class="fas fa-chevron-down"></i></a>
                                    <div id="onsale" class="collapse">
                                        <div class="content">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck1"/>
                                                <label class="form-check-label" for="defaultCheck1">
                                                    ICP
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-9">
                            <div class="prfil_sec">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4">
                                        <div class="serc_br">
                                            <div class="serch_food">
                                                <form class="searchbox_fd" action="">
                                                    <img src={RESTAURANTS} class="serch_icn"/>
                                                    <input type="search" placeholder="Search"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option hidden>Single Item</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <select class="form-select" aria-label="Default select example">
                                            <option hidden>Price: Low to High</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 col-sm-4">
                                        <div class="item_sec">
                                            <h4>1 Item</h4>
                                            <div class="prfil_img">
                                                <img src={ABOUTUS} alt=""/>
                                                <div class="box">
                                                    <a href="collection.html" type="button"
                                                        class="btn btn_link">Untitled
                                                        Collection
                                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                                </div>

                                                <div class="prfil_ftr">
                                                    <div class="ftr_main">
                                                        <button type="button" class="btn btn_crd_ftr"><i
                                                                class="fas fa-ellipsis-h"></i></button>
                                                        <i class="fas fa-paperclip"></i>
                                                    </div>
                                                    <div class="ftr_main">
                                                        <i class="far fa-heart"></i>
                                                        <h4>0</h4>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="item_sec">
                                            <h4>1 Item</h4>
                                            <div class="prfil_img">
                                                <img src={ABOUTUS} alt=""/>
                                                <div class="box">
                                                    <a href="collection.html" type="button"
                                                        class="btn btn_link">Untitled
                                                        Collection
                                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                                </div>

                                                <div class="prfil_ftr">
                                                    <div class="ftr_main">
                                                        <button type="button" class="btn btn_crd_ftr"><i
                                                                class="fas fa-ellipsis-h"></i></button>
                                                        <i class="fas fa-paperclip"></i>
                                                    </div>
                                                    <div class="ftr_main">
                                                        <i class="far fa-heart"></i>
                                                        <h4>0</h4>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="item_sec">
                                            <h4>1 Item</h4>
                                            <div class="prfil_img">
                                                <img src={ABOUTUS} alt=""/>
                                                <div class="box">
                                                    <a href="collection.html" type="button"
                                                        class="btn btn_link">Untitled
                                                        Collection
                                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                                </div>

                                                <div class="prfil_ftr">
                                                    <div class="ftr_main">
                                                        <button type="button" class="btn btn_crd_ftr"><i
                                                                class="fas fa-ellipsis-h"></i></button>
                                                        <i class="fas fa-paperclip"></i>
                                                    </div>
                                                    <div class="ftr_main">
                                                        <i class="far fa-heart"></i>
                                                        <h4>0</h4>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="activity">
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <div class="filter">
                                <div class="brdr_btm">
                                    <button type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#close"><span>Filter</span><i
                                            class="fas fa-sort-amount-up"></i></button>
                                </div>
                                <div class="crd_size">
                                    <a role="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                        data-bs-target="#status">Event Type<i class="fas fa-chevron-down"></i></a>
                                    <div id="status" class="collapse">
                                        <div class="content">
                                            <div class="background">
                                                <a type="button" class="btn btn_status">Listing</a>
                                                <a type="button" class="btn btn_status">Sales</a>
                                                <a type="button" class="btn btn_status">Bids</a>
                                                <a type="button" class="btn btn_status">Transfers</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-9">
                            <div class="prfil_sec_2">
                                <img src={NO_HISTORY_DATA}/>
                                <h4>No trading history yet</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* MOdal code start */}
    <div class="modal fade wallet_mdl" id="wallet_model" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-circle"></i> My Wallet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Connect with one of our available wallet providers or create a new one.</p>
                    <div class="wlt_type">
                        <div class="wlt_area">
                            <a href="https://www.stoicwallet.com/"><img src={STOLIC_WALLET}/>Stoic
                                Wallet</a>
                        </div>
                        <div class="wlt_area">
                            <a href="https://plugwallet.ooo/"><img src={PLUG}/>Plug Wallet</a>
                        </div>
                        <div class="wlt_area">
                            <a href="https://dfinity.org/"><img src={COMPUTER}/>Internet
                                Computer </a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    {/* MOdal code end */}

    </Fragment>
  );
};

export default Collection;
