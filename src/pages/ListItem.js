import aboutus from '../assets/images/aboutus.png';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ListItem = () => {
  return (
    <Fragment>
    <section class="header">
        <div class="container">
            <div class="header_sub">
                <Link to='/profile'><i class="fas fa-angle-left"></i></Link>
                <img src={aboutus} alt=""/>
                <div>
                  <Link to='/collection' className='btn btn_link'>ICP Bunny #204685388 </Link>
                  <h5>Name</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="list_content">
  <div class="container">
    <div class="row">

    <div class="col-md-6 col-sm-6">
      <h2>List item for sale</h2>
      <div class="content">
          <div class="content_sub">
              <label for="exampleInputEmail1" class="form-label">Type</label>
              <i class="fas fa-info-circle"></i>
          </div>
          <div class="type">
              <h5>$</h5>
              <h5>Fixed Price</h5>
          </div>
          <div class="price">
                    <div class="content_sub">
                        <label for="exampleInputEmail1" class="form-label">Price</label>
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="content_sub">
                        <select class="form-select" aria-label="Default select example">
                            <option selected> ICP</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div style={{width:"50%"}}>
                            <input type="email" class="form-control" placeholder="Ammount"/>
                        </div>
                    </div>
          </div>


          <div class="duration">
            <div class="content_sub">
                <label for="exampleInputEmail1" class="form-label">Duration</label>
                <i class="fas fa-info-circle"></i>
            </div>

            <a type="button" class="btn btn_clder" data-bs-toggle="modal" data-bs-target="#cal_model">
                <i class="far fa-calendar-alt"></i><span>Date</span>
            </a>
            {/* MOdal code start */}
   
            <div class="modal" id="cal_model">
              <div class="modal-dialog">
                  <div class="modal-content">

                      <div class="modal-header">
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      <div class="modal-body">
                        <label class="form-label">Date Range</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>1 Day</option>
                            <option value="1">3 Days</option>
                            <option value="2">6 Days</option>
                            <option value="3">9 Days</option>
                            <option value="4">12 Days</option>
                        </select>
                        <div class="inputs">
                          <div class="type1">
                              <div class="fields">
                                  <div id="id_startCalendar" class="calendar-widget default-today"
                                      data-next="#id_deadlineCalendar" date-min="today"
                                      tabindex="-1">
                                      <div class="input-wrapper">
                                          <label for="type1-start">Starting</label>
                                          <input class="date-field" id="type1-start" type="text"
                                              placeholder="Starting" readonly/>
                                      </div>
                                      <div class="calendar-wrapper">
                                          <div class="dual-calendar">
                                              <div class="calendar">
                                                  <div class="calendar-header">
                                                      <div class="prev-btn">
                                                          <i class="fas fa-chevron-left"></i>
                                                      </div>

                                                      <div class="month-text">
                                                          <p>September 2018</p>
                                                      </div>
                                                  </div>
                                                  <div class="calendar-body">
                                                      <div class="date-table">
                                                          <div class="date-table-header">
                                                              <div class="day sunday">S</div>
                                                              <div class="day">M</div>
                                                              <div class="day">T</div>
                                                              <div class="day">W</div>
                                                              <div class="day">T</div>
                                                              <div class="day">F</div>
                                                              <div class="day saturday">S</div>
                                                          </div>
                                                          <div class="date-table-body">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="calendar plus-one">
                                                  <div class="calendar-header">
                                                      <div class="month-text">
                                                          <p>September</p>
                                                      </div>

                                                      <div class="next-btn">
                                                          <i class="fas fa-chevron-right"></i>
                                                      </div>
                                                  </div>
                                                  <div class="calendar-body">
                                                      <div class="date-table">
                                                          <div class="date-table-header">
                                                              <div class="day sunday">S</div>
                                                              <div class="day">M</div>
                                                              <div class="day">T</div>
                                                              <div class="day">W</div>
                                                              <div class="day">T</div>
                                                              <div class="day">F</div>
                                                              <div class="day saturday">S</div>
                                                          </div>
                                                          <div class="date-table-body">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div>
                                      <hr class="btwen"/>
                                  </div>
                                  <div id="id_deadlineCalendar" class="calendar-widget linked"
                                      tabindex="-1" data-link="#id_startCalendar" date-min="link">
                                      <div class="input-wrapper">
                                          <label for="type1-deadline">Ending</label>
                                          <input class="date-field" id="type1-deadline"
                                              type="text" placeholder="Ending" readonly/>
                                      </div>
                                      <div class="calendar-wrapper">
                                          <div class="dual-calendar">
                                              <div class="calendar">
                                                  <div class="calendar-header">
                                                      <div class="prev-btn">
                                                          <i class="fas fa-chevron-left"></i>
                                                      </div>

                                                      <div class="month-text">
                                                          <p>September 2018</p>
                                                      </div>
                                                  </div>
                                                  <div class="calendar-body">
                                                      <div class="date-table">
                                                          <div class="date-table-header">
                                                              <div class="day sunday">S</div>
                                                              <div class="day">M</div>
                                                              <div class="day">T</div>
                                                              <div class="day">W</div>
                                                              <div class="day">T</div>
                                                              <div class="day">F</div>
                                                              <div class="day saturday">S</div>
                                                          </div>
                                                          <div class="date-table-body">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="calendar plus-one">
                                                  <div class="calendar-header">
                                                      <div class="month-text">
                                                          <p>September</p>
                                                      </div>

                                                      <div class="next-btn">
                                                          <i class="fas fa-chevron-right"></i>
                                                      </div>
                                                  </div>
                                                  <div class="calendar-body">
                                                      <div class="date-table">
                                                          <div class="date-table-header">
                                                              <div class="day sunday">S</div>
                                                              <div class="day">M</div>
                                                              <div class="day">T</div>
                                                              <div class="day">W</div>
                                                              <div class="day">T</div>
                                                              <div class="day">F</div>
                                                              <div class="day saturday">S</div>
                                                          </div>
                                                          <div class="date-table-body">
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

                        <div class="caldr_date">
                          <div class="cldr_time">
                              <input type="time" class="form-control"/>
                          </div>
                          <div>
                              <hr class="btwen2"/>
                          </div>
                          <div class="cldr_time">
                              <input type="time" class="form-control"/>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            {/* MOdal code end */}
          </div> 

          <br/>
          <hr/>
          <div class="content_sub">
            <div>
              <h5>Fees</h5>
              <p>Service Fee</p>
            </div>
            <div>
              <i class="fas fa-info-circle"></i>
              <p>2.5%</p>
            </div>
          </div>
      </div>
      <button type="button" class="btn btn_comn2 btn_listing">Complete Listing</button>
    </div>

        <div class="col-md-4 col-sm-4 offset-md-1">
            <div class="section_2">
                <h5>Preview</h5>
                <div class="prfil_img">
                    <img src={aboutus} alt=""/>
                    <div class="p-3">
                        <Link to='/collection' className='btn btn_link'>ICP Bunny #204685388 </Link>
                        <h5>Name</h5>
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

export default ListItem;
