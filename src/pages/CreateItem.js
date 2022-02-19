import { Fragment } from 'react';
import STOLIC_WALLET from '../assets/images/Stoic Wallet.png'
import PLUG from '../assets/images/plug.png'
import COMPUTER from '../assets/images/Internet Computer.png'

const CreateItem = () => {
  return (
    <Fragment>
      <section class="create">
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-sm-10 offset-md-1">
              <div class="row">
                  <div class="col-md-6 col-sm-6" style={{margin: "auto;"}}>
                      <h1>Create New Item</h1>
                      <p>* Required fields</p>
                      <h5>Image, Video, Audio, or 3D Model</h5>
                      <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size:
                          100 MB
                      </p>
                  </div>
                  <div class="col-md-5 col-sm-5 offset-md-1">
                      <div class="img-section">
                          <form action="" method="POST" enctype="multipart/form-data">
                              <div class="row g-0">
                                  <div class="col-md-12">
                                      <div class="form-group">
                                          <div class="dropzone-wrapper">
                                              <div class="dropzone-desc">
                                                  <i class="fas fa-image"></i>
                                              </div>
                                              <input type="file" name="img_logo" class="dropzone"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </section>

  <section class="form">
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-sm-10 offset-md-1">
              <div class="card_frm">
                  <form>
                      <div class="row">
                          <div class="col-md-6 col-sm-6">
                              <div class="spacing">
                                  <label for="exampleInputEmail1" class="form-label first">Name *</label>
                                  <input type="text" class="form-control" placeholder="Item Name"/>
                              </div>
                          </div>
                          <div class="col-md-6 col-sm-6">
                              <div class="spacing">
                                  <label for="sel1" class="form-label">Collection <br/> <span>This is the
                                          collection where your
                                          item
                                          will appear. &nbsp;<i
                                              class="fas fa-info-circle fa-lg"></i></span></label>
                                  <select class="form-select" id="sel1" name="sellist1">
                                      <option hidden>Select Collection</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div class="spacing">
                          <label for="exampleInputEmail1" class="form-label">External link <br/> <span>OpenSea will
                                  include a
                                  link
                                  to this URL on this item's detail page, so that users can click to learn more
                                  about
                                  it. You
                                  are welcome to link to your own webpage with more details.</span> </label>
                          <input type="email" class="form-control" placeholder="https://yoursite.io/item/123"/>
                      </div>
                      <div class="spacing">
                          <label for="comment">Description <br/> <span>The description will be included on the
                                  item's
                                  detail
                                  page underneath its image. <span>Markdown</span> syntax is
                                  supported.</span></label>
                          <textarea class="form-control" rows="5" id="comment" name="text"
                              placeholder="Provide a detailed description of your item"></textarea>
                      </div>

                  </form>
              </div>
          </div>
      </div>
  </div>

</section>

<section class="properties">
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-sm-10 offset-md-1">
              <div class="card_frm">
                  <div class="main_sec">
                      <div class="sub_sec">
                          <i class="fas fa-list-ul"></i>
                          <div class="space">
                              <h5>Properties</h5>
                              <h4>Textual traits that show up as rectangles</h4>
                          </div>
                      </div>
                      <div class="space_2">
                          {/* MOdal calling*/}
                          <button type="button" class="btn btn-add" data-bs-toggle="modal"
                              data-bs-target="#myModal">
                              <i class="fas fa-plus"></i>
                          </button>

                          {/* MOdal start*/}
                          <div class="modal" id="myModal">
                              <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                          <h5 class="modal-title" id="staticBackdropLabel">Add Properties</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <h4>Properties show up underneath your item, are clickable, and can be
                                              filtered in your collection's sidebar.
                                          </h4>
                                          <br/>
                                          <div class="row g-1">
                                              <div class="col-md-6 col-sm-6">
                                                  <label for="exampleInputEmail1" class="form-label">Type</label>
                                                  <div class="input-group mb-3">
                                                      <span class="input-group-text" id="basic-addon1">X</span>
                                                      <input type="text" class="form-control"
                                                          placeholder="Character"/>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-sm-6 mb-3">
                                                  <label class="form-label">Name</label>
                                                  <input type="text" class="form-control" placeholder="Male"/>
                                              </div>
                                          </div>
                                          <button type="button" class="btn btn_addmore">Add More</button>
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn_save">Save</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div class="main_sec">
                      <div class="sub_sec">
                          <i class="fas fa-star"></i>
                          <div class="space">
                              <h5>Levels</h5>
                              <h4>Numerical traits that show as a progress bar</h4>
                          </div>
                      </div>
                      <div class="space_2">
                          {/*Button trigger modal*/}
                          <button type="button" class="btn btn-add" data-bs-toggle="modal"
                              data-bs-target="#myModal2">
                              <i class="fas fa-plus"></i>
                          </button>

                          {/* modal Start*/}
                          <div class="modal" id="myModal2">
                              <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                          <h5 class="modal-title" id="staticBackdropLabel">Add Levels</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <h4>Levels show up underneath your item, are clickable, and can be
                                              filtered
                                              in your collection's sidebar.</h4>
                                          <br/>
                                          <div class="row g-1">
                                              <div class="col-md-6 col-sm-6">
                                                  <label for="exampleInputEmail1" class="form-label">Name</label>
                                                  <div class="input-group mb-3">
                                                      <span class="input-group-text" id="basic-addon1">X</span>
                                                      <input type="text" class="form-control" placeholder="Speed"/>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-sm-6 mb-3">
                                                  <label for="exampleInputEmail1" class="form-label">Value</label>
                                                  <div class="input-group mb-3">
                                                      <input type="number" class="form-control" placeholder="3"/>
                                                      <span class="input-group-text" id="basic-addon1">Of</span>
                                                      <input type="number" class="form-control" placeholder="5"/>
                                                  </div>
                                              </div>
                                          </div>
                                          <button type="button" class="btn btn_addmore">Add More</button>
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn_save">Save</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div class="main_sec">
                      <div class="sub_sec">
                          <i class="far fa-chart-bar"></i>
                          <div class="space">
                              <h5>Stats</h5>
                              <h4>Numerical traits that just show as numbers</h4>
                          </div>
                      </div>
                      <div class="space_2">
                          {/* Button trigger modal*/}
                          <button type="button" class="btn btn-add" data-bs-toggle="modal"
                              data-bs-target="#myModal3">
                              <i class="fas fa-plus"></i>
                          </button>

                          {/*Modal*/}
                          <div class="modal" id="myModal3">
                              <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                          <h5 class="modal-title" id="staticBackdropLabel">Add Stats</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <h4>Stats show up underneath your item, are clickable, and can be
                                              filtered
                                              in your collection's sidebar.
                                          </h4>
                                          <br/>
                                          <div class="row g-1">
                                              <div class="col-md-6 col-sm-6">
                                                  <label for="exampleInputEmail1" class="form-label">Name</label>
                                                  <div class="input-group mb-3">
                                                      <span class="input-group-text" id="basic-addon1">X</span>
                                                      <input type="text" class="form-control" placeholder="Speed"/>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-sm-6 mb-3">
                                                  <label for="exampleInputEmail1" class="form-label">Value</label>
                                                  <div class="input-group mb-3">
                                                      <input type="number" class="form-control" placeholder="3"/>
                                                      <span class="input-group-text" id="basic-addon1">Of</span>
                                                      <input type="number" class="form-control" placeholder="5"/>
                                                  </div>
                                              </div>
                                          </div>
                                          <button type="button" class="btn btn_addmore">Add More</button>
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn_save">Save</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <hr/>
                  <div class="main_sec">
                      <div class="sub_sec">
                          <i class="fas fa-lock"></i>
                          <div class="space">
                              <h5>Unlockable Content</h5>
                              <h4>Include unlockable content that can only be revealed by the owner of the item.
                              </h4>
                          </div>
                      </div>
                      <div class="space_2">
                          <div class="form-check form-switch" data-bs-toggle="collapse" data-bs-target="#demo">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                              <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                          </div>
                      </div>
                  </div>
                  <div id="demo" class="collapse">
                      <textarea class="form-control" rows="5" id="comment" name="text"
                          placeholder="Enter content (acess key,code to redeem,link to a file,etc.)"></textarea>
                      <h3><span>Markdown</span> syntax is supported.</h3>
                  </div>
                  <hr/>
                  <div class="main_sec">
                      <div class="sub_sec">
                          <i class="fas fa-exclamation-triangle"></i>
                          <div class="space">
                              <h5>Explicit & Sensitive Content</h5>
                              <h4>Set this item as explicit and sensitive content &nbsp;<i
                                      class="fas fa-info-circle"></i>
                              </h4>
                          </div>
                      </div>
                      <div class="space_2">
                          <div class="form-check form-switch" data-bs-toggle="collapse" data-bs-target="#demo2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                              <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card_frm">
                  <form>
                      <div class="spacing">
                          <label for="exampleInputEmail1" class="form-label">Supply <br/> <span>The number of
                                  copies
                                  that can
                                  be
                                  minted. No gas cost to you! Quantities above one coming soon.&nbsp;<i
                                      class="fas fa-info-circle fa-lg"></i></span></label>
                          <input type="number" class="form-control" placeholder="1"/>
                      </div>
                      <div class="spacing">
                          <label for="sel1" class="form-label">Blockchain</label>
                          <select class="form-select" id="sel1" name="sellist1">
                              <option hidden>ICP</option>
                              <option>Polygun</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                          </select>
                      </div>
                      <div class="spacing">
                          <label for="exampleInputEmail1" class="form-label">Freeze metadata &nbsp;<i
                                  class="fas fa-info-circle fa-lg"></i> <br/> <span>Freezing your metadata will
                                  allow
                                  you to
                                  permanently lock and store all of this item's content in decentralized file
                                  storage.</span></label>
                          <input type="text" class="form-control"
                              placeholder="To freeze your metadata, you must create your item first."/>
                      </div>
                  </form>
              </div>
              <div class="mt-5">
                  <a href="profile.html" type="button" class="btn btn_comn2">Create</a>
              </div>

          </div>
      </div>
  </div>
</section>

{/*Modal*/}
<div class="modal fade wallet_mdl" id="wallet_model" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-circle"></i> My Wallet</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p>Connect with one of our available wallet providers or create a new one.</p>
              <div class="wlt_type">
                  <div class="wlt_area">
                      <a href="https://www.stoicwallet.com/"><img src={STOLIC_WALLET}/>Stoic
                          Wallet</a>
                  </div>
                  <div class="wlt_area">
                      <a href="https://plugwallet.ooo/"><img src={PLUG}/>Plug Wallet</a>
                  </div>
                  <div class="wlt_area">
                      <a href="https://dfinity.org/"><img src={COMPUTER}/>Internet
                          Computer </a>
                  </div>
              </div>
          </div>
          <div class="modal-footer">

          </div>
      </div>
  </div>
</div>

    </Fragment>
  );
};

export default CreateItem;
