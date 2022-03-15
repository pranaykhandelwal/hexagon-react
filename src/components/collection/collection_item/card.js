import * as images from '../../../services/images';

const Card = ({collection}) => {


  return (
    <div className="col-md-4 col-sm-4">
      <div className="item_sec">
          <div className="prfil_img">
              <img src={collection?.imageName && images[collection?.imageName]} alt={collection.imageName}/>
              <div className="box">
                  <a href="collection.html" type="button"
                      className="btn btn_link">{collection?.collectionType} &nbsp;
                      #{collection?.id} <br/> <span>{collection?.name}</span></a>
                  <span className="box-price float-right">Price <br/><span>{ `${collection.priceType} ${collection?.price}`}</span></span>
              </div>

              <div className="prfil_ftr">
                  <div className="ftr_main">
                      <button type="button" className="btn btn_crd_ftr"><i
                              className="fas fa-ellipsis-h"></i></button>
                      <i className="fas fa-paperclip"></i>
                  </div>
                  <div className="ftr_main">
                      <i className="far fa-heart"></i>
                      <h4>{collection?.likes}</h4>
                  </div>

              </div>
          </div>
      </div>
  </div>

  );
}

export default Card;
