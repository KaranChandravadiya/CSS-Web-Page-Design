import React from 'react';
import "../CSS/JobApplication.css"
import Logo from "../Image/logo.png"
import RightImg from "../Image/RightImg.png"
import CrossArrow from "../Image/CrossArrow.png"
import RightYellowImg from "../Image/RightYellowImg.png"
import RightGrayImg from "../Image/RightGrayImg.png"
import ExclamationMarkImg from "../Image/ExclamationMarkImg.png"

const JobApplication = () => {

    return (
        <>
            <div className='MainDiv'>
                <div className='SecondDiv' >
                    <h3>Previous Job Application</h3>
                    <a href="/">View All Your Applications in detail</a>
                </div>
                <div className='JobCard'>
                    <div className='first-column'>
                        <div className="ApplicationDiv">
                            <h4>Application No.</h4>
                            <img src={CrossArrow} alt='' />
                        </div>
                        <h1>008</h1>
                        <h3 ><img src={Logo} className='JobCardLogo' alt='' /> <div> Ecubix Solution Pvt.Ltd.</div></h3>
                        <div className="dotted-border"></div>
                        <div>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Applied</p></p>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Sortlisted</p></p>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Interview Scheduled</p></p>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Appeared for Interview</p></p>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Selected</p></p>
                            <p className='first-column-SetAlign'><img src={RightImg} className='RightImg' alt='' /> <p className='textCenter'>Offer Accepted</p></p>
                        </div>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>007</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightYellowImg} className='RightImage' alt='' /></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>006</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={ExclamationMarkImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>005</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={ExclamationMarkImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt=''/></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>004</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={ExclamationMarkImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>003</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={ExclamationMarkImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>002</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                    </div>
                    <div className='column'>
                        <p><i className="fa-solid fa-arrow-left"></i></p>
                        <h3 className='Number'>001</h3>
                        <h1><img src={Logo} className='ColumnLogo' alt='' /></h1>
                        <div className="dotted-border"></div>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={RightImg} className='RightImage' alt='' /></p>
                        <p><img src={ExclamationMarkImg} className='RightImage' alt='' /></p>
                        <p><img src={RightGrayImg} className='RightImage' alt='' /></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobApplication;