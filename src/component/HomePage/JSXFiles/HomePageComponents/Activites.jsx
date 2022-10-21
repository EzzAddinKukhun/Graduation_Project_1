import React from 'react';
import '../../CSSFiles/Activites.css';
import img1 from '../../../../imgs/a-4.jpg';
import img2 from '../../../../imgs/b-4.jpg';
import img3 from '../../../../imgs/c-4.jpg';
import img4 from '../../../../imgs/d-4.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



export default function Activites() {
    return (
        <>
            <div className="activites">
                <div className="container d-flex justify-content-between">
                    <div className="first-half-act">
                        <Fade>
                            <h1 className='pt-3'><span className='span-style'><b>Activites</b></span> that empowers you...</h1>
                        </Fade>
                        <div className="act mt-5">
                            <p>
                                <Fade left cascade>
                                    We aim to offer reduce an unemployment level in our countries, so through
                                    our website, if you are fresh graduate you can apply to a training, or you
                                    can apply to an employment, so you may find the job that will suit you.
                                    And if you wish to study or complete your study abroad, you can apply
                                    to any organization or society which is in our website ..
                                </Fade>
                            </p>
                            <Fade delay={1000}>
                                <button className='read-more-btn-act'>Read More</button>
                            </Fade>
                        </div>
                        <Fade>
                            <div className="stick">
                            </div>
                        </Fade>
                    </div>

                    <div className="row  second-half-act  ">
                        <Zoom top delay={0}>
                            <div className="col-md-6 position-relative act-div   ">
                                <img className='img-act ' src={img1}></img>
                                <h4 className='position-absolute bottom-0'><b>From ideal to <br></br> implementation</b></h4>

                            </div>
                        </Zoom>
                        <Zoom top delay={1000}>
                            <div className="col-md-6 position-relative act-div ">
                                <img className='img-act' src={img2}></img>
                                <h4 className='position-absolute bottom-0'><b>The Digital Statement</b></h4>
                            </div>
                        </Zoom>

                        <Zoom top delay={2000}>
                            <div className="col-md-6 position-relative act-div ">
                                <img className='img-act' src={img3}></img>
                                <h4 className='position-absolute bottom-0'><b>The Team that <br></br> Delivers Results </b></h4>
                            </div>
                        </Zoom>

                        <Zoom top delay={3000}>
                            <div className="col-md-6 position-relative act-div ">
                                <img className='img-act ' src={img4}></img>
                                <h4 className='position-absolute bottom-0'><b>We touch your life in  <br></br> more ways!</b></h4>
                            </div>
                        </Zoom>



                    </div>

                </div>
            </div>
        </>

    )
}
