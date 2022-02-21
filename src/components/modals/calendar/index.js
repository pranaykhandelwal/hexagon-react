import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import './index.css';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ show, setShow }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} id="cal_model">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <section>
          <label className="form-label">Date Range</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>1 Day</option>
            <option value="1">3 Days</option>
            <option value="2">6 Days</option>
            <option value="3">9 Days</option>
            <option value="4">12 Days</option>
          </select>
          <div className="caldr_date">
              <div className="cldr_time">
              <label className="form-label">Starting</label>
              <Datepicker monthsShown={2} minDate={new Date()} disabledKeyboardNavigation dateFormat="d MMMM yyyy"
                onChange={(date) => setStartDate(date)} selected={startDate} className="form-control" />
              </div>
              <div>
                <hr className="btwen"/>
              </div>
              <div className="cldr_time">
              <label className="form-label">Ending</label>
              <Datepicker monthsShown={2} minDate={new Date()} disabledKeyboardNavigation dateFormat="d MMMM yyyy"
                onChange={(date) => setEndDate(date)} selected={endDate}  className="form-control"/>
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
          </section>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
  );
};

export default Calendar;
