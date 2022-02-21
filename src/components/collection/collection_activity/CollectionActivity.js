import { Fragment, useState } from 'react';
import NO_HISTORY_DATA from '../../../assets/images/no-history-data.svg'

const CollectionActivity = () => {

  const [filterContent, showfilterContent] = useState(false);

  const togglefilterContent = () => {
    showfilterContent(!filterContent)
  }

  return (
    <Fragment>
    <div className="tab-pane active" id="activity">
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
                        data-bs-target="#status" aria-expanded={filterContent} onClick={togglefilterContent}>Event Type<i className="fas fa-chevron-down" ></i></a>
                    {filterContent &&
                    <div id="status" className="collapse show">
                        <div className="content">
                            <div className="background">
                                <button type="button" className="btn btn_status">Listing</button>
                                <button type="button" className="btn btn_status">Sales</button>
                                <button type="button" className="btn btn_status">Bids</button>
                                <button type="button" className="btn btn_status">Transfers</button>
                            </div>
                        </div>
                    </div> }
                </div>
            </div>
        </div>
        <div className="col-md-9 col-sm-9">
            <div className="prfil_sec_2">
                <img src={NO_HISTORY_DATA}/>
                <h4>No trading history yet</h4>
            </div>
        </div>
    </div>
  </div>
</Fragment>
  );
};

export default CollectionActivity;
