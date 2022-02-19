import { Fragment } from "react";
import aboutus from '../assets/images/aboutus.png';
import ASK_SVG from '../assets/images/empty-asks.svg';
import EMPTY_BIRD from '../assets/images/empty-bids.svg';
import NO_SIMILAR_ITEMS from '../assets/images/no-similar-items.svg'

const Profile = () => {

  return (
    <Fragment>
    <section class="header">
        <div class="container">
            <div class="header_main">
                <a href="create-item.html" type="button" class="btn btn_comn1">Edit</a>
                <a href="#" type="button" class="btn btn_comn2">Sell</a>
            </div>
        </div>
    </section>

    <section class="prfil_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-5">
                    <div class="prfil_img">
                        <div class="icon">
                            <i class="far fa-heart"></i>
                            <p>0</p>
                        </div>
                        <img src={aboutus} alt=""/>
                    </div>

                    <div class="prfil_brdr">
                        <div class="brdr_btm">
                            <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                data-bs-target="#description"><span><i class="fas fa-indent"></i>
                                    Description</span><i class="fas fa-chevron-down"></i></a>
                            <div id="description" class="collapse">
                                <div class="content">
                                    <h4>Created by you</h4>
                                </div>
                            </div>
                        </div>
                        <div class="brdr_btm">
                            <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                data-bs-target="#about"><span> <i class="far fa-address-card"></i> About</span><i
                                    class="fas fa-chevron-down"></i></a>
                            <div id="about" class="collapse">
                                <div class="content">
                                    <h4>This collection has no description yet. Contact the owner of this collection
                                        about setting it up on OpenSea!</h4>
                                    <button type="button" class="btn btn_reprt"><i
                                            class="fas fa-ellipsis-v"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="brdr_btm">
                            <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                data-bs-target="#detail"><span><i class="fas fa-info-circle"></i> Details</span><i
                                    class="fas fa-chevron-down"></i></a>
                            <div id="detail" class="collapse">
                                <div class="content">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <h4>Contract Address</h4>
                                            <h4>Token ID</h4>
                                            <h4>Token Standard</h4>
                                            <h4>Blockchain</h4>
                                            <h4>Metadata</h4>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="text-end">
                                                <h4><a href="collection.html">0x2953...4963</a></h4>
                                                <h4>7177398997348012...</h4>
                                                <h4>ERC-1155</h4>
                                                <h4>Polygon</h4>
                                                <h4>Editable</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-md-7 col-sm-7">
                    <div class="section_2">
                        <div>
                            <a href="collection.html" type="button" class="btn btn_link">ICP Bunny</a>
                            <h2>Name</h2>
                            <p>Owned by <span>9EAEA3</span></p>
                        </div>
                        <div class="prfil_brdr p-3">
                            <p>Current Price</p>
                            <h3>◎ 0.015 <span>($38.15)</span>
                            </h3>
                            <button type="button" class="btn btn_card btn_comn2"><i class="fas fa-wallet"></i> Buy
                                Now</button>
                            <div>
                                <button type="button" class="btn btn_offer btn_comn2"><i class="fas fa-credit-card"></i>
                                    Buy with Card</button>
                                <button type="button" class="btn btn_offer btn_comn1"><i class="fas fa-tag"></i> Make
                                    Offer</button>
                            </div>
                        </div>

                        <div class="prfil_brdr">
                            <div class="brdr_btm">
                                <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                    data-bs-target="#listing"><span><i class="fas fa-tag"></i> Listings</span><i
                                        class="fas fa-chevron-down"></i></a>
                                <div id="listing" class="collapse">
                                    <div class="content text-center">
                                        <img src={ASK_SVG} alt=""/>
                                        <h4>Not listing yet</h4>
                                    </div>
                                    <div class="p-3">
                                        <a href="list-item.html" type="button" class="btn btn_comn1 btn_sell">Sell</a>
                                    </div>
                                </div>
                            </div>

                            <div class="brdr_btm">
                                <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                    data-bs-target="#offer"><span><i class="fas fa-list-ul"></i> Offers</span><i
                                        class="fas fa-chevron-down"></i></a>
                                <div id="offer" class="collapse">
                                    <div class="content text-center">
                                        <img src={EMPTY_BIRD} alt=""/>
                                        <h4>No items to display</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12">
                    <div class="prfil_brdr">
                        <div class="brdr_btm">
                            <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                                data-bs-target="#collection" aria-expanded="false"><span><i class="fas fa-th"></i> More
                                    From
                                    This
                                    Collection</span> <i class="fas fa-chevron-down"></i></a>
                            <div id="collection" class="collapse">
                                <div class="content text-center">
                                    <img src={NO_SIMILAR_ITEMS} alt=""/>
                                    <h4>No items to display</h4>
                                </div>
                                <div class="p-3 text-center">
                                    <button class="btn btn_comn1" type="button">View Collection</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
  );
};

export default Profile;
