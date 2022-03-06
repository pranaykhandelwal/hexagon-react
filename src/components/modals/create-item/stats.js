import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CreateItemStatsModal = ({ show, handleState}) => {
  let inputArr = [
    {
      id: 1,
      typeVal: '',
      nameVal: ''
    }
  ];
  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr( ps => {
      return [
        ...ps,
        {
          id: (ps.length + 1),
          typeVal: '',
          nameVal: ''
        }
      ]
    })
  }

  const removeInput = e => {
    e.preventDefault();
    if(arr.length === 1) {
      return;
    }
    const newArr = arr.filter( val => val.id !== parseInt(e.target.dataset['id']));
    setArr([...newArr]);
  };

  return (
    <Modal show={show}  centered={true} onHide={() => {handleState('stats')}} backdrop='static' className="create-item-modal">
        <Modal.Header closeButton>
        <h5 className="modal-title" id="staticBackdropLabel">Add Stats</h5>
        </Modal.Header>
        <Modal.Body>
          <h4>Stats show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</h4>
          <br/>
          {arr.map((item, i) => {
              return (
                <div className="row g-1">
                  <div className="col-md-6 col-sm-6">
                    <label className="form-label">Name</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text cursorPointer" onClick={removeInput} data-id={item.id}>X</span>
                      <input type="text" className="form-control" placeholder="Speed"/>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-3">
                    <label className="form-label">Value</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="3"/>
                      <span className="input-group-text">Of</span>
                      <input type="number" className="form-control" placeholder="5"/>
                    </div>
                  </div>
                </div>
                );
              })
            }
          <button type="button" className="btn btn_addmore" onClick={addInput}>Add More</button>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn_save">Save</button>
        </Modal.Footer>
      </Modal>
  );
};

export default CreateItemStatsModal;
