import React from 'react';
import Modal from "react-bootstrap/Modal";
import './index.css';

const Calendar = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} id="cal_model">
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
  );
};

export default Calendar;
