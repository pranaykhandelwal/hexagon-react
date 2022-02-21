import { useState } from 'react';
import ABOUTUS from '../../../assets/images/aboutus.png';
import RESTAURANTS from '../../../assets/images/serch_restaurants.svg'

const CollectionItems = () => {
    const [statusFilter, setstatusFilter] = useState(false);
    const [priceFilter, setpriceFilter] = useState(false);
    const [saleFilter, setsaleFilter] = useState(false);

    const toggleStatusFilter = () => {
        setstatusFilter(!statusFilter);
    }

    const togglepriceFilter = () => {
        setpriceFilter(!priceFilter);
    }

    const togglesaleFilter = () => {
        setsaleFilter(!saleFilter);
    }

  return (
    <div className="tab-pane active" id="item">
    <div className="row">
        <div className="col-md-3 col-sm-3">
            <div className="filter">
                <div className="brdr_btm">
                    <button type="button" className="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#close"><span>Filter</span><i
                            className="fas fa-sort-amount-up"></i></button>
                </div>
                <div className="crd_size">
                    <a role="button" className="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#status" aria-expanded={statusFilter} onClick={toggleStatusFilter}>Status<i className="fas fa-chevron-down"></i></a>
                    { statusFilter &&
                        <div id="status" className="collapse show">
                            <div className="content">
                                <div className="background">
                                    <a type="button" className="btn btn_status">Buy Now</a>
                                    <a type="button" className="btn btn_status">On Auction</a>
                                    <a type="button" className="btn btn_status">New</a>
                                    <a type="button" className="btn btn_status">Has Offer</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="crd_size">
                    <a type="button" className="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#price" aria-expanded={priceFilter} onClick={togglepriceFilter}>Price<i className="fas fa-chevron-down"></i></a>
                    { priceFilter &&
                    <div id="price" className="collapse show">
                        <div className="content">
                            <form>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected> <i className="fas fa-dollar-sign"></i> United State
                                        Doller
                                        (USD)
                                    </option>
                                    <option value="1">ICP</option>
                                </select>
                                <br/>

                                <div className="d-flex justify-content-between">
                                    <input type="email" className="form-control" placeholder="Min"/>
                                    <h4>to</h4>
                                    <input type="email" className="form-control" placeholder="Max"/>
                                </div>
                                <br/>

                                <button type="button" className="btn btn_comn1 btn_apply">Apply</button>
                            </form>
                        </div>
                    </div> }
                </div>
                <div className="crd_size">
                    <a type="button" className="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#onsale" aria-expanded={saleFilter} onClick={togglesaleFilter}>On sale in<i className="fas fa-chevron-down"></i></a>
                    {saleFilter &&
                    <div id="onsale" className="collapse show">
                        <div className="content">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""
                                    id="defaultCheck1"/>
                                <label className="form-check-label" for="defaultCheck1">
                                    ICP
                                </label>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
        <div className="col-md-9 col-sm-9">
            <div className="prfil_sec">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="serc_br">
                            <div className="serch_food">
                                <form className="searchbox_fd" action="">
                                    <img src={RESTAURANTS} className="serch_icn"/>
                                    <input type="search" placeholder="Search"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <select className="form-select" aria-label="Default select example">
                            <option hidden>Single Item</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <select className="form-select" aria-label="Default select example">
                            <option hidden>Price: Low to High</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="item_sec">
                            <h4>1 Item</h4>
                            <div className="prfil_img">
                                <img src={ABOUTUS} alt=""/>
                                <div className="box">
                                    <a href="collection.html" type="button"
                                        className="btn btn_link">Untitled
                                        Collection
                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                </div>

                                <div className="prfil_ftr">
                                    <div className="ftr_main">
                                        <button type="button" className="btn btn_crd_ftr"><i
                                                className="fas fa-ellipsis-h"></i></button>
                                        <i className="fas fa-paperclip"></i>
                                    </div>
                                    <div className="ftr_main">
                                        <i className="far fa-heart"></i>
                                        <h4>0</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="item_sec">
                            <h4>1 Item</h4>
                            <div className="prfil_img">
                                <img src={ABOUTUS} alt=""/>
                                <div className="box">
                                    <a href="collection.html" type="button"
                                        className="btn btn_link">Untitled
                                        Collection
                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                </div>

                                <div className="prfil_ftr">
                                    <div className="ftr_main">
                                        <button type="button" className="btn btn_crd_ftr"><i
                                                className="fas fa-ellipsis-h"></i></button>
                                        <i className="fas fa-paperclip"></i>
                                    </div>
                                    <div className="ftr_main">
                                        <i className="far fa-heart"></i>
                                        <h4>0</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="item_sec">
                            <h4>1 Item</h4>
                            <div className="prfil_img">
                                <img src={ABOUTUS} alt=""/>
                                <div className="box">
                                    <a href="collection.html" type="button"
                                        className="btn btn_link">Untitled
                                        Collection
                                        #204685388 <br/> <span>Pushpraj Patel</span></a>
                                </div>

                                <div className="prfil_ftr">
                                    <div className="ftr_main">
                                        <button type="button" className="btn btn_crd_ftr"><i
                                                className="fas fa-ellipsis-h"></i></button>
                                        <i className="fas fa-paperclip"></i>
                                    </div>
                                    <div className="ftr_main">
                                        <i className="far fa-heart"></i>
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
  );
};

export default CollectionItems;
