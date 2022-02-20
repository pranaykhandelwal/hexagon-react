import { Fragment, useState } from 'react';
import NO_HISTORY_DATA from '../../../assets/images/no-history-data.svg'

const CollectionActivity = () => {

  const [filterContent, showfilterContent] = useState(false);

  const togglefilterContent = () => {
    showfilterContent(!filterContent)
  }

  return (
    <Fragment>
    <div class="tab-pane active" id="activity">
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
                        data-bs-target="#status" aria-expanded={filterContent} onClick={togglefilterContent}>Event Type<i class="fas fa-chevron-down" ></i></a>
                    {filterContent && 
                    <div id="status" class="collapse show">
                        <div class="content">
                            <div class="background">
                                <button type="button" class="btn btn_status">Listing</button>
                                <button type="button" class="btn btn_status">Sales</button>
                                <button type="button" class="btn btn_status">Bids</button>
                                <button type="button" class="btn btn_status">Transfers</button>
                            </div>
                        </div>
                    </div> }
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
</Fragment>
  );
};

export default CollectionActivity;