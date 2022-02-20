import aboutus from '../assets/images/aboutus.png';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ListItem = () => {
  return (
    <Fragment>
    <section className="header">
        <div className="container">
          <div className="header_sub">
            <img src={aboutus} alt=""/>
            <div>
              <Link to='/collection' className='btn btn_link'>ICP Bunny #204685388 </Link>
              <h5>Name</h5>
            </div>
          </div>
        </div>
    </section>
    <section className="list_content">
      <div className="container">
        <div className="row">

        <div className="col-md-6 col-sm-6">
          <h2>List item for sale</h2>
          <div className="content">
              <div className="content_sub">
                  <label for="exampleInputEmail1" className="form-label">Type</label>
                  <i className="fas fa-info-circle"></i>
              </div>
              <div className="type">
                  <h5>$</h5>
                  <h5>Fixed Price</h5>
              </div>
              <div className="price">
                        <div className="content_sub">
                            <label for="exampleInputEmail1" className="form-label">Price</label>
                            <i className="fas fa-info-circle"></i>
                        </div>
                        <div className="content_sub">
                            <select className="form-select" aria-label="Default select example">
                                <option selected> ICP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div style={{width:"50%"}}>
                                <input type="email" className="form-control" placeholder="Ammount"/>
                            </div>
                        </div>
              </div>


              <div className="duration">
                <div className="content_sub">
                    <label for="exampleInputEmail1" className="form-label">Duration</label>
                    <i className="fas fa-info-circle"></i>
                </div>

                <a type="button" className="btn btn_clder" data-bs-toggle="modal" data-bs-target="#cal_model">
                    <i className="far fa-calendar-alt"></i><span>Date</span>
                </a>
                {/* MOdal code start */}

                <div className="modal" id="cal_model">
                  <div className="modal-dialog">
                      <div className="modal-content">

                          <div className="modal-header">
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>

                          <div className="modal-body">
                            <label className="form-label">Date Range</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>1 Day</option>
                                <option value="1">3 Days</option>
                                <option value="2">6 Days</option>
                                <option value="3">9 Days</option>
                                <option value="4">12 Days</option>
                            </select>
                            <div className="inputs">
                              <div className="type1">
                                  <div className="fields">
                                      <div id="id_startCalendar" className="calendar-widget default-today"
                                          data-next="#id_deadlineCalendar" date-min="today"
                                          tabindex="-1">
                                          <div className="input-wrapper">
                                              <label for="type1-start">Starting</label>
                                              <input className="date-field" id="type1-start" type="text"
                                                  placeholder="Starting" readonly/>
                                          </div>
                                          <div className="calendar-wrapper">
                                              <div className="dual-calendar">
                                                  <div className="calendar">
                                                      <div className="calendar-header">
                                                          <div className="prev-btn">
                                                              <i className="fas fa-chevron-left"></i>
                                                          </div>

                                                          <div className="month-text">
                                                              <p>September 2018</p>
                                                          </div>
                                                      </div>
                                                      <div className="calendar-body">
                                                          <div className="date-table">
                                                              <div className="date-table-header">
                                                                  <div className="day sunday">S</div>
                                                                  <div className="day">M</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">W</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">F</div>
                                                                  <div className="day saturday">S</div>
                                                              </div>
                                                              <div className="date-table-body">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="calendar plus-one">
                                                      <div className="calendar-header">
                                                          <div className="month-text">
                                                              <p>September</p>
                                                          </div>

                                                          <div className="next-btn">
                                                              <i className="fas fa-chevron-right"></i>
                                                          </div>
                                                      </div>
                                                      <div className="calendar-body">
                                                          <div className="date-table">
                                                              <div className="date-table-header">
                                                                  <div className="day sunday">S</div>
                                                                  <div className="day">M</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">W</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">F</div>
                                                                  <div className="day saturday">S</div>
                                                              </div>
                                                              <div className="date-table-body">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <hr className="btwen"/>
                                      </div>
                                      <div id="id_deadlineCalendar" className="calendar-widget linked"
                                          tabindex="-1" data-link="#id_startCalendar" date-min="link">
                                          <div className="input-wrapper">
                                              <label for="type1-deadline">Ending</label>
                                              <input className="date-field" id="type1-deadline"
                                                  type="text" placeholder="Ending" readonly/>
                                          </div>
                                          <div className="calendar-wrapper">
                                              <div className="dual-calendar">
                                                  <div className="calendar">
                                                      <div className="calendar-header">
                                                          <div className="prev-btn">
                                                              <i className="fas fa-chevron-left"></i>
                                                          </div>

                                                          <div className="month-text">
                                                              <p>September 2018</p>
                                                          </div>
                                                      </div>
                                                      <div className="calendar-body">
                                                          <div className="date-table">
                                                              <div className="date-table-header">
                                                                  <div className="day sunday">S</div>
                                                                  <div className="day">M</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">W</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">F</div>
                                                                  <div className="day saturday">S</div>
                                                              </div>
                                                              <div className="date-table-body">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="calendar plus-one">
                                                      <div className="calendar-header">
                                                          <div className="month-text">
                                                              <p>September</p>
                                                          </div>

                                                          <div className="next-btn">
                                                              <i className="fas fa-chevron-right"></i>
                                                          </div>
                                                      </div>
                                                      <div className="calendar-body">
                                                          <div className="date-table">
                                                              <div className="date-table-header">
                                                                  <div className="day sunday">S</div>
                                                                  <div className="day">M</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">W</div>
                                                                  <div className="day">T</div>
                                                                  <div className="day">F</div>
                                                                  <div className="day saturday">S</div>
                                                              </div>
                                                              <div className="date-table-body">
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

                            <div className="caldr_date">
                              <div className="cldr_time">
                                  <input type="time" className="form-control"/>
                              </div>
                              <div>
                                  <hr className="btwen2"/>
                              </div>
                              <div className="cldr_time">
                                  <input type="time" className="form-control"/>
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
              <div className="content_sub">
                <div>
                  <h5>Fees</h5>
                  <p>Service Fee</p>
                </div>
                <div>
                  <i className="fas fa-info-circle"></i>
                  <p>2.5%</p>
                </div>
              </div>
          </div>
          <button type="button" className="btn btn_comn2 btn_listing">Complete Listing</button>
        </div>

            <div className="col-md-4 col-sm-4 offset-md-1">
                <div className="section_2">
                    <h5>Preview</h5>
                    <div className="prfil_img">
                        <img src={aboutus} alt=""/>
                        <div className="p-3">
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
