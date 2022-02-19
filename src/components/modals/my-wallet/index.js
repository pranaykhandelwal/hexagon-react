import Stoic_Voilet from '../../../assets/images/Stoic Wallet.png';
import Plug from '../../../assets/images/plug.png';
import Internet_Computer from '../../../assets/images/Internet Computer.png';
import Modal from "react-bootstrap/Modal";

const MyWallet = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className="fade wallet_mdl" id="wallet_model">
        <Modal.Header closeButton>
          <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-circle"></i> My Wallet</h5>
        </Modal.Header>
        <Modal.Body>
          <p>Connect with one of our available wallet providers or create a new one.</p>
          <div class="wlt_type">
            <div class="wlt_area">
              <a href="https://www.stoicwallet.com"><img src={Stoic_Voilet} alt="stoic wallet"/>Stoic Wallet</a>
            </div>
            <div class="wlt_area">
              <a href="https://plugwallet.ooo"><img src={Plug} alt="plug" />Plug Wallet</a>
            </div>
            <div class="wlt_area">
              <a href="https://dfinity.org"><img src={Internet_Computer} alt="internet computer"/>Internet Computer </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
  );
};

export default MyWallet;
