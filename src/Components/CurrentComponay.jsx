import React from 'react';
import Logo from "../Image/logo.png"
import PdfImg from "../Image/PdfImg.png"
import UploadArrow from "../Image/UploadArrow.png"
import UploadArrowBlack from "../Image/UploadArrowBlack.png"
import verificationImg from "../Image/verificationImg.png"
import "../CSS/CurrentComponay.css"

const CurrentCompany = () => {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Current Company
                    </h1>
                </div>
                <div className="maindivCurrentCompanys">
                    <div className='CurrentCompanyDiv1'>
                        <img src={Logo} />
                        <h2>Ecubix Solution Pvt. Ltd.</h2>
                        <img src={verificationImg} />
                        <div className='vertical-dotted-border'></div>
                        <div>
                            <h1 className='A'>A</h1>
                            <p className='Grade'>Grade</p>
                        </div>
                        <div className='vertical-dotted-border'></div>
                        <div>
                            <p className='title'>Designation</p>
                            <p className='P-Tag'>E-Commerce Marketplace</p>
                            <p className='P-Tag'>Listing & Management</p>
                        </div>
                        <div className='vertical-dotted-border'></div>
                        <div>
                            <p className='title'>Working Period</p>
                            <p className='P-Tag'>January, 2024-present</p>
                            <a href="" className='link'>Apply for Registration</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-caret-up"></i>
                        </div>
                    </div>
                    <div className='companycard'>
                        <div className='CurrentCompanyCard'>
                            <div className='CurrentCompanyCardBold'>
                                <h2 className='Card-h2'> Workbook Still Pending.</h2>
                                <p className='Card-p'>Last Updated August 29,2024</p>
                            </div>
                            <div>
                                <p className='PdfText'><img src={PdfImg} className='PdfImg' /> Work Book - Aug 24 - Priyam...</p>

                            </div>
                            <div >
                                <button className='CardBtn'><img src={UploadArrow} className='UploadArrow' /> Submit Workbook</button>
                            </div>
                            <div className='CardLinkSpace'>
                                <a href="" className='CardLink'>View All Your Previous Workbooks</a>
                            </div>
                        </div>
                        <div className='CurrentCompanyCard'>
                            <div className='CurrentCompanyCardBold'>
                                <h2 className='Card-h2'>Missing Attendence Sheet</h2>
                                <p className='Card-p'>Last Updated August 29,2024</p>
                            </div>
                            <div>
                                <p className='PdfText'><img src={PdfImg} className='PdfImg' /> Attendence Sheet - Aug 24 - Priyam...</p>

                            </div>
                            <div >
                                <button className='CardBtn'><img src={UploadArrow} className='UploadArrow' /> Submit Attendence</button>
                            </div>
                            <div className='CardLinkSpace'>
                                <a href=""  className='CardLink'>View All Your Previous Attendence</a>
                            </div>
                        </div>
                        <div className='FileUploadCard'>
                            <div>
                                <p className='FileUploadCardText'>Other Placement Related<br />
                                    Company Documets</p>
                            </div>

                            <div>
                                <button className='CardUploadBtn'><img src={UploadArrowBlack} className='UploadArrow' /> Upload</button>
                            </div>
                            <div className='CardLinkSpace'>
                                <a href="" className='CardUploadLink'>View All Your Previous Documents</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentCompany;