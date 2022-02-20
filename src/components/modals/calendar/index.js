import Modal from "react-bootstrap/Modal";

const MyWallet = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className="fade wallet_mdl" id="wallet_model">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
  );
};

export default MyWallet;
