import { useState } from 'react';
import aboutus from '../assets/images/aboutus.png';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/modals/calendar'

const ListItem = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
    <section className="header">
        <div className="container">
          <div className="header_sub">
            <Link to='/profile'><i className="fas fa-angle-left"></i></Link>
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

                <a type="button" className="btn btn_clder" onClick={ handleShow }>
                    <i className="far fa-calendar-alt"></i><span>Date</span>
                </a>
                <Calendar show={show} setShow={setShow}/>
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
