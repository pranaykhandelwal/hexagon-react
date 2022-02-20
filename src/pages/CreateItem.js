import { Fragment, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {CreateItemLevelsModal, CreateItemPropertiesModal, CreateItemStatsModal } from '../components/modals/create-item';

const CreateItem = () => {
  let [state, setState] = useState({
    properties: false,
    levels: false,
    stats: false,
    unlockaleContent: false,
    explicitSensitiveContent: false
  });

  let handleState = (stateName) => {
    setState({
      ...state,
      [stateName]: !state[stateName]
    });
  }

  return (
    <Fragment>
      <section className="create">
  <div className="container">
      <div className="row">
          <div className="col-md-10 col-sm-10 offset-md-1">
              <div className="row">
                  <div className="col-md-6 col-sm-6" style={{margin: "auto;"}}>
                      <h1>Create New Item</h1>
                      <p>* Required fields</p>
                      <h5>Image, Video, Audio, or 3D Model</h5>
                      <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size:
                          100 MB
                      </p>
                  </div>
                  <div className="col-md-5 col-sm-5 offset-md-1">
                      <div className="img-section">
                          <form action="" method="POST" enctype="multipart/form-data">
                              <div className="row g-0">
                                  <div className="col-md-12">
                                      <div className="form-group">
                                          <div className="dropzone-wrapper">
                                              <div className="dropzone-desc">
                                                  <i className="fas fa-image"></i>
                                              </div>
                                              <input type="file" name="img_logo" className="dropzone"/>
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

  <section className="form">
  <div className="container">
      <div className="row">
          <div className="col-md-10 col-sm-10 offset-md-1">
              <div className="card_frm">
                  <form>
                      <div className="row">
                          <div className="col-md-6 col-sm-6">
                              <div className="spacing">
                                  <label for="exampleInputEmail1" className="form-label first">Name *</label>
                                  <input type="text" className="form-control" placeholder="Item Name"/>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="spacing">
                                  <label for="sel1" className="form-label">Collection <br/> <span>This is the
                                          collection where your
                                          item
                                          will appear. &nbsp;<i
                                              className="fas fa-info-circle fa-lg"></i></span></label>
                                  <select className="form-select" id="sel1" name="sellist1">
                                      <option hidden>Select Collection</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="spacing">
                          <label for="exampleInputEmail1" className="form-label">External link <br/> <span>OpenSea will
                                  include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span> </label>
                          <input type="email" className="form-control" placeholder="https://yoursite.io/item/123"/>
                      </div>
                      <div className="spacing">
                          <label for="comment">Description <br/> <span>The description will be included on the
                                  item's detail page underneath its image. <span>Markdown</span> syntax is
                                  supported.</span></label>
                          <textarea className="form-control" rows="5" id="comment" name="text"
                              placeholder="Provide a detailed description of your item"></textarea>
                      </div>

                  </form>
              </div>
          </div>
      </div>
  </div>

</section>

      <section className="properties">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-10 offset-md-1">
                    <div className="card_frm">
                        <div className="main_sec">
                            <div className="sub_sec">
                                <i className="fas fa-list-ul"></i>
                                <div className="space">
                                    <h5>Properties</h5>
                                    <h4>Textual traits that show up as rectangles</h4>
                                </div>
                            </div>
                            <div className="space_2">
                                {/* MOdal calling*/}
                                <button type="button" className="btn btn-add" onClick={() => {handleState('properties')}}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                <CreateItemPropertiesModal handleState={handleState} show={state.properties} />
                            </div>
                        </div>
                        <hr/>
                        <div className="main_sec">
                            <div className="sub_sec">
                                <i className="fas fa-star"></i>
                                <div className="space">
                                    <h5>Levels</h5>
                                    <h4>Numerical traits that show as a progress bar</h4>
                                </div>
                            </div>
                            <div className="space_2">
                                {/*Button trigger modal*/}
                                <button type="button" className="btn btn-add" onClick={() => {handleState('levels')}}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                <CreateItemLevelsModal handleState={handleState} show={state.levels} />
                            </div>
                        </div>
                        <hr/>
                        <div className="main_sec">
                            <div className="sub_sec">
                                <i className="far fa-chart-bar"></i>
                                <div className="space">
                                    <h5>Stats</h5>
                                    <h4>Numerical traits that just show as numbers</h4>
                                </div>
                            </div>
                            <div className="space_2">
                                {/* Button trigger modal*/}
                                <button type="button" className="btn btn-add" onClick={() => {handleState('stats')}}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                <CreateItemStatsModal handleState={handleState} show={state.stats} />
                            </div>
                        </div>
                        <hr/>
                        <div className="main_sec">
                            <div className="sub_sec">
                                <i className="fas fa-lock"></i>
                                <div className="space">
                                    <h5>Unlockable Content</h5>
                                    <h4>Include unlockable content that can only be revealed by the owner of the item.
                                    </h4>
                                </div>
                            </div>
                            <div className="space_2">
                                <div className="form-check form-switch" onClick={ () => handleState('unlockaleContent') }
                                aria-controls="demo" aria-expanded={state.unlockaleContent} >
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>
                        <Collapse in={state.unlockaleContent}>
                          <div id="demo">
                            <textarea className="form-control" rows="5" id="comment" name="text"
                                placeholder="Enter content (acess key,code to redeem,link to a file,etc.)"></textarea>
                            <h3><span>Markdown</span> syntax is supported.</h3>
                          </div>
                        </Collapse>
                        <hr/>
                        <div className="main_sec">
                            <div className="sub_sec">
                                <i className="fas fa-exclamation-triangle"></i>
                                <div className="space">
                                    <h5>Explicit & Sensitive Content</h5>
                                    <h4>Set this item as explicit and sensitive content &nbsp;<i
                                            className="fas fa-info-circle"></i>
                                    </h4>
                                </div>
                            </div>
                            <div className="space_2">
                                <div className="form-check form-switch" data-bs-toggle="collapse" data-bs-target="#demo2">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_frm">
                        <form>
                            <div className="spacing">
                                <label for="exampleInputEmail1" className="form-label">Supply <br/> <span>The number of
                                        copies that can be minted. No gas cost to you! Quantities above one coming soon.&nbsp;<i className="fas fa-info-circle fa-lg"></i></span></label>
                                <input type="number" className="form-control" placeholder="1"/>
                            </div>
                            <div className="spacing">
                                <label for="sel1" className="form-label">Blockchain</label>
                                <select className="form-select" id="sel1" name="sellist1">
                                    <option hidden>ICP</option>
                                    <option>Polygun</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="spacing">
                                <label for="exampleInputEmail1" className="form-label">Freeze metadata &nbsp;<i
                                        className="fas fa-info-circle fa-lg"></i> <br/> <span>Freezing your metadata will
                                        allow you to permanently lock and store all of this item's content in decentralized file storage.</span></label>
                                <input type="text" className="form-control"
                                    placeholder="To freeze your metadata, you must create your item first."/>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5">
                        <a href="profile.html" type="button" className="btn btn_comn2">Create</a>
                    </div>

                </div>
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CreateItem;
