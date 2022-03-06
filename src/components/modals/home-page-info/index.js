import Modal from "react-bootstrap/Modal";
import './home-page-info.css';

const HomePageInfoModal = ({ show, setShow}) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show}  onHide={handleClose} centered={true} backdrop='static' className="home-page-info">
        <Modal.Header closeButton>
        <h5 className="modal-title" id="staticBackdropLabel">Get featured on the homepage</h5>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li><b>Create</b> your NFT on Hexagon</li>
            <li><b>Post</b> a link to your NFT on Twitter or Instagram</li>
            <li><b>Include</b> @Hexagon and #HexagonNFT in your post</li>
            <li>We'll periodically review these NFTs and select one to feature</li>
          </ol>
          <h4 className="s-content">Be sure to <b>follow us on Twitter and Instagram</b> to receive updates on our NFTs.</h4>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn_footer"><i className="fab fa-twitter"></i>Twitter</button>
          <button type="button" className="btn btn_footer"><i className="fab fa-instagram"></i>Instagram</button>
        </Modal.Footer>
      </ Modal>
  );
};

export default HomePageInfoModal;
