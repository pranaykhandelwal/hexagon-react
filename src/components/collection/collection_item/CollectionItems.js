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
                        data-bs-target="#status" aria-expanded={statusFilter} onClick={toggleStatusFilter}>Status<i class="fas fa-chevron-down"></i></a>
                    { statusFilter && 
                        <div id="status" class="collapse show">
                            <div class="content">
                                <div class="background">
                                    <a type="button" class="btn btn_status">Buy Now</a>
                                    <a type="button" class="btn btn_status">On Auction</a>
                                    <a type="button" class="btn btn_status">New</a>
                                    <a type="button" class="btn btn_status">Has Offer</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div class="crd_size">
                    <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#price" aria-expanded={priceFilter} onClick={togglepriceFilter}>Price<i class="fas fa-chevron-down"></i></a>
                    { priceFilter &&
                    <div id="price" class="collapse show">
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
                    </div> }
                </div>
                <div class="crd_size">
                    <a type="button" class="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#onsale" aria-expanded={saleFilter} onClick={togglesaleFilter}>On sale in<i class="fas fa-chevron-down"></i></a>
                    {saleFilter && 
                    <div id="onsale" class="collapse show">
                        <div class="content">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value=""
                                    id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1">
                                    ICP
                                </label>
                            </div>
                        </div>
                    </div>}
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
  );
};

export default CollectionItems;