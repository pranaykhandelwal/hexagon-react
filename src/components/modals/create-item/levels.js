import Modal from "react-bootstrap/Modal";

const CreateItemLevelsModal = ({ show, handleState}) => {
  return (
    <Modal show={show}  centered={true} onHide={() => {handleState('levels')}} backdrop='static' className="create-item-modal">
        <Modal.Header closeButton>
        <h5 className="modal-title" id="staticBackdropLabel">Add Levels</h5>
        </Modal.Header>
        <Modal.Body>
          <h4>Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</h4>
          <br/>
          <div className="row g-1">
            <div className="col-md-6 col-sm-6">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">X</span>
                <input type="text" className="form-control" placeholder="Speed"/>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 mb-3">
                <label for="exampleInputEmail1" className="form-label">Value</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="3"/>
                    <span className="input-group-text" id="basic-addon1">Of</span>
                    <input type="number" className="form-control" placeholder="5"/>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn_addmore">Add More</button>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn_save">Save</button>
        </Modal.Footer>
      </Modal>
  );
};

export default CreateItemLevelsModal;
