import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CreateItemPropertiesModal = ({ show, handleState}) => {
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
    <Modal show={show}  centered={true} onHide={() => {handleState('properties')}} backdrop='static' className="create-item-modal">
        <Modal.Header closeButton>
        <h5 className="modal-title" id="staticBackdropLabel">Add Properties</h5>
        </Modal.Header>
        <Modal.Body>
          <h4>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
          </h4> <br/>
          {arr.map((item, i) => {
              return (
                <div className="row g-1">
                  <div className="col-md-6 col-sm-6">
                      <label className="form-label">Type</label>
                      <div className="input-group mb-3">
                          <span className="input-group-text cursorPointer" onClick={removeInput} data-id={item.id}>X</span>
                          <input type="text" className="form-control"  placeholder="Character"/>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Male"/>
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
      </ Modal>
  );
};

export default CreateItemPropertiesModal;
