import { useState } from 'react';
import RESTAURANTS from '../../../assets/images/serch_restaurants.svg'
import Card from './card';
import './items.css'

const mainCollections = [
  {
    "id": 1,
    "name" : "Collection 1",
    "imageName": "collection_1",
    "collectionType": "Ether",
    "status": "buyNow",
    "priceType" : "Ether",
    "price" : 1,
    "likes" : 1
  },
  {
    "id": 2,
    "name" : "Collection 2",
    "collectionType": "Ether",
    "imageName": "collection_2",
    "status": "onAuction",
    "priceType" : "Ether",
    "price" : 2,
    "likes" : 2
  },
  {
    "id": 3,
    "name" : "Collection 3",
    "collectionType": "United Collection",
    "imageName": "collection_3",
    "status": "new",
    "priceType" : "USD",
    "price" : 3,
    "likes" : 3
  },
  {
    "id": 4,
    "name" : "Collection 4",
    "collectionType": "United Collection",
    "imageName": "collection_4",
    "status": "hasOffer",
    "priceType" : "USD",
    "price" : 4,
    "likes" : 5
  },
  {
    "id": 5,
    "name" : "Collection 5",
    "collectionType": "United Collection",
    "imageName": "collection_5",
    "status": "buyNow",
    "priceType" : "USD",
    "price" : 5,
    "likes" : 6
  },
  {
    "id": 6,
    "name" : "Collection 6",
    "collectionType": "United Collection",
    "imageName": "collection_6",
    "status": "onAuction",
    "priceType" : "USD",
    "price" : 6,
    "likes" : 7
  },
  {
    "id": 7,
    "name" : "Collection 7",
    "collectionType": "United Collection",
    "imageName": "collection_7",
    "status": "new",
    "priceType" : "USD",
    "price" : 7,
    "likes" : 8
  }
];
const CollectionItems = () => {
    // const [statusFilter, setstatusFilter] = useState(false);
    const [saleFilter, setsaleFilter] = useState(false);
    const [priceFilter, setPriceFilter] = useState({
      show: false,
      minPrice: '',
      maxPrice: '',
      priceType: ''
    });
    const [allCollections, setAllCollections] = useState(mainCollections);

    // const toggleStatusFilter = () => {
    //     setstatusFilter(!statusFilter);
    // }

    const togglesaleFilter = () => {
        setsaleFilter(!saleFilter);
    }

    const togglePriceFilter = () => {
     setPriceFilter({
       ...priceFilter,
       show: !priceFilter.show
     })
    }

  const handlePriceChange = (event, key) => {
    setPriceFilter({
      ...priceFilter,
      [key] : event.target.value
    });
  }

  const applyPriceFilter = () => {
    let collections = [];
    if(priceFilter.minPrice !== '' && priceFilter.maxPrice !== ''){
      collections = mainCollections.filter((val) => {
        let checkPrice = val.price >= priceFilter.minPrice && val.price <= priceFilter.maxPrice;
        return (priceFilter.priceType) ? checkPrice && val.priceType === priceFilter.priceType : checkPrice;
      });
    } else if(priceFilter.minPrice) {
        collections = mainCollections.filter((val) => {
        let checkPrice = val.price >= priceFilter.minPrice;
        return (priceFilter.priceType) ? checkPrice && val.priceType === priceFilter.priceType : checkPrice;
      });
    } else if(priceFilter.maxPrice) {
      collections = mainCollections.filter((val) => {
        let checkPrice = val.price <= priceFilter.maxPrice;
        return (priceFilter.priceType) ? checkPrice && val.priceType === priceFilter.priceType : checkPrice;
      });
    } else if(priceFilter.priceType) {
      collections = mainCollections.filter((val) => {
        return val.priceType === priceFilter.priceType;
      });
    }
    setAllCollections([...collections]);
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
                {/* <div className="crd_size">
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
                </div> */}

                <div className="crd_size">
                    <a type="button" className="btn btn_toggle" data-bs-toggle="collapse"
                        data-bs-target="#price" aria-expanded={priceFilter.show} onClick={togglePriceFilter}>Price<i className="fas fa-chevron-down"></i></a>
                    { priceFilter.show &&
                    <div id="price" className="collapse show">
                        <div className="content">
                            <form>
                                <select className="form-select" aria-label="Default select example" value={priceFilter.priceType} onChange = { (e) => handlePriceChange(e, 'priceType') }>
                                    <option value=""> Select Type</option>
                                    <option value="USD"> United State Dollar(USD)</option>
                                    <option value="Ether"> Ether(ETH)</option>
                                </select>
                                <br/>

                                <div className="d-flex justify-content-between">
                                    <input type="email" className="form-control" placeholder="Min" value={priceFilter.minPrice} onChange = { (e) => handlePriceChange(e, 'minPrice') }/>
                                    <h4>to</h4>
                                    <input type="email" className="form-control" placeholder="Max"value={priceFilter.maxPrice} onChange = { (e) => handlePriceChange(e, 'maxPrice') }/>
                                </div>
                                <br/>

                                <button type="button" className="btn btn_comn1 btn_apply" onClick={applyPriceFilter} disabled={priceFilter.minPrice == null || priceFilter.maxPrice == null}>Apply</button>
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
                  <div className="col-md-12">
                    <h4>{allCollections.length} {allCollections.length > 1 ? 'Items': 'Item'}</h4>
                  </div>
                  {
                    allCollections.map( collection => (
                      <Card collection={collection} key={collection?.id}/>
                    ) )
                  }
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default CollectionItems;
