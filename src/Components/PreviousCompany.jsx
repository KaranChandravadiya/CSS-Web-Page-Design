import React from 'react';
import "../CSS/PreviousCompany.css";
import Logo from "../Image/logo.png";
import verificationImg from "../Image/verificationImg.png";
import UploadArrowBlack from "../Image/UploadArrowBlack.png";
import downloadBlack from "../Image/downloadBlack.png";
import UploadArrow from "../Image/UploadArrow.png";
import eye from "../Image/eye.png";
import barsFilter from "../Image/bars-filter.png";
import Download from "../Image/Download.png";
import PdfImg from "../Image/PdfImg.png";

const PreviousCompany = () => {
    const data = [
        {
            srNo: 1,
            fileName: 'Workbook - Sept 24',
            fileStatus: 'Pending',
            addedOn: '...',
            action: 'Pending',
            timePeriod: '...',
            reminder: '...',
            submitWorkbook: true,
        },
        {
            srNo: 2,
            fileName: 'Workbook - Aug 24',
            fileStatus: 'Uploaded',
            addedOn: '01 Sep 2024',
            action: 'Approved',
            timePeriod: '1D 30H',
            reminder: '2 Reminder',
        },
        {
            srNo: 3,
            fileName: 'Workbook - Sept 24',
            fileStatus: 'Rejected',
            addedOn: '01 Aug 2024',
            action: 'Rejected',
            timePeriod: '8H',
            reminder: '5 Reminder',
        },
        {
            srNo: 4,
            fileName: 'Workbook - Sept 24',
            fileStatus: 'Uploaded',
            addedOn: '30 June 2024',
            action: 'Approved',
            timePeriod: '3D 15H',
            reminder: '0 Reminder',
        },
        {
            srNo: 5,
            fileName: 'Workbook - Sept 24',
            fileStatus: 'Uploaded',
            addedOn: '02 June 2024',
            action: 'Approved',
            timePeriod: '2D 5H',
            reminder: '3 Reminder',
        },
        {
            srNo: 6,
            fileName: 'Workbook - Sept 24',
            fileStatus: 'May',
            addedOn: '01 Sep 2024',
            action: 'Approved',
            timePeriod: '1D 20H',
            reminder: '5 Reminder',
        },
    ];
    const [datas, setData] = React.useState(data);
    const [visibleCards, setVisibleCards] = React.useState({
        cardOne: true,
        cardTwo: false,
        cardThree: false,
        cardFour: false,
        cardFive: false,
    });

    const handleToggleVisibility = (cardName) => {
        setVisibleCards({
            cardOne: cardName === 'cardOne',
            cardTwo: cardName === 'cardTwo',
            cardThree: cardName === 'cardThree',
            cardFour: cardName === 'cardFour',
            cardFive: cardName === 'cardFive',
        });
    };

    const handleSelectChange = (index, value) => {
        const updatedData = [...datas];
        updatedData[index].action = value;
        setData(updatedData);
    };

    return (
        <>
            <div className="AlignSet">
                <h1 className="PreviousCompanyText">Previous Company Timeline</h1>
                <a href="/" className="linkEdit" >View All Your Previous Company List</a>
            </div>
            <div className={visibleCards.cardOne ? "PreviousCompanyMainDivVisible" : "PreviousCompanyMainDiv"}>
                <div className={visibleCards.cardOne ? 'TopDivVisible' : 'TopDiv'} onClick={() => handleToggleVisibility('cardOne')} >
                    <div className='LogoMainDiv'>
                        <img src={Logo} alt="" className={visibleCards.cardOne ? '' : 'TopDivLogoVisible'} />
                        <h1 className={visibleCards.cardOne ? "PreviousCompanyH1Visible" : "PreviousCompanyH1"}>Trades Solution Pvt. Ltd.</h1>
                        <img src={verificationImg} alt="" />
                    </div>
                    <div className="vertical-border"></div>
                    <div className='GradeDiv'>
                        <h1 className={visibleCards.cardOne ? "H1AVisible" : "H1A"}>A</h1>
                        <p className={visibleCards.cardOne ? "PGradeVisible" : "PGrade"}>Grade</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='DesignationDiv'>
                        <p className="Designation-title">Designation</p>
                        <p className={visibleCards.cardOne ? "SameTextTagVisible" : "SameTextTag"}>E-Commerce Marketplace</p>
                        <p className={visibleCards.cardOne ? "SameTextTagVisible" : "SameTextTag"}>Listing & Management</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='WorkingPeriodDiv'>
                        <p className="WorkingPeriod-title">Working Period</p>
                        <p className={visibleCards.cardOne ? "SameTextTagVisible" : "SameTextTag"}>June, 2023- September, 2024</p>
                    </div>
                    <div>
                        {visibleCards.cardOne ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </div>
                </div>
                {visibleCards.cardOne && (
                    <>
                        <div className="previouscompanyCentertText">
                            <button className="UploadedWorkbooksBtn">Uploaded Workbooks</button>
                            <h2>Uploaded Attendance</h2>
                            <h2>Uploaded Other Documents</h2>
                            <button className="downloadBtn">
                                <img src={Download} alt="" className="DownloadPngColor" />
                                Download All
                            </button>
                        </div>
                        <div className="Table-Container">
                            <table className="custom-table">
                                <thead className="tablehead">
                                    <tr>
                                        <th className="thAlign"><input type="checkbox" className="checkbox" /> Sr. No.</th>
                                        <th>File Name<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>File Status<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Added On<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Action<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Time Period<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Reminder<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((row, index) => (
                                        <tr key={index}>
                                            <td className="srNo">
                                                <input type="checkbox" className="checkbox" /> {row.srNo}
                                            </td>
                                            <td className="fileNames">
                                                <img src={PdfImg} className="PdfImage" alt="" />{row.fileName}
                                            </td>
                                            <td>
                                                <p className={`status ${row.fileStatus.toLowerCase()}`}>{row.fileStatus}</p>
                                            </td>
                                            <td className="addedOn">{row.addedOn}</td>
                                            <td>
                                                <select
                                                    className={`action ${row.action}`}
                                                    value={row.action}
                                                    style={{
                                                        backgroundColor:
                                                            row.action === "Pending" ? "#F7F5D4" :
                                                                row.action === "Approved" ? "#DFF0D8" :
                                                                    row.action === "Rejected" ? "#FFCECE" : "white",
                                                        border:
                                                            row.action === "Pending" ? "1px solid #FF9900" :
                                                                row.action === "Approved" ? "1px solid #4CAF50" :
                                                                    row.action === "Rejected" ? "1px solid #FF4D4D" : "1px solid #ccc",
                                                        color: "black"
                                                    }}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td
                                                className="timePeriod"
                                                style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }}
                                            >
                                                {row.timePeriod}
                                            </td>
                                            <td className="reminder">{row.reminder}</td>
                                            <td>
                                                {row.submitWorkbook ? (
                                                    <button className="submitworkbook-btn">
                                                        <img src={UploadArrowBlack} className="uploadArrows" alt="" />Submit Workbook
                                                    </button>
                                                ) : (
                                                    <div className="view-download-container">
                                                        <button className="viewBtn">
                                                            <img src={eye} className="eye" alt="" />View
                                                        </button>
                                                        {row.fileStatus === 'Rejected' ? (
                                                            <button className="reuploadBtn">
                                                                <img src={UploadArrow} className="uploadArrows" alt="" />Re-Upload
                                                            </button>
                                                        ) : (
                                                            <button className="downloadBtns">
                                                                <img src={downloadBlack} className="downloadBlack" alt="" />Download
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
            <div className={visibleCards.cardTwo ? "PreviousCompanyMainDivVisible" : "PreviousCompanyMainDiv"}>
                <div className={visibleCards.cardTwo ? 'TopDivVisible' : 'TopDiv'} onClick={() => handleToggleVisibility('cardTwo')} >
                    <div className='LogoMainDiv'>
                        <img src={Logo} alt="" className={visibleCards.cardTwo ? '' : 'TopDivLogoVisible'} />
                        <h1 className={visibleCards.cardTwo ? "PreviousCompanyH1Visible" : "PreviousCompanyH1"}>Tata Consultancy Services</h1>
                        <img src={verificationImg} alt="" />
                    </div>
                    <div className="vertical-border"></div>
                    <div className='GradeDiv'>
                        <h1 className={visibleCards.cardTwo ? "H1AVisible" : "H1A"}>A</h1>
                        <p className={visibleCards.cardTwo ? "PGradeVisible" : "PGrade"}>Grade</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='DesignationMainDiv'>
                        <p className="Designation-title">Designation</p>
                        <p className={visibleCards.cardTwo ? "SameTextTagVisible" : "SameTextTag"}>Computer Programmer</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='WorkingPeriodDiv'>
                        <p className="WorkingPeriod-title">Working Period</p>
                        <p className={visibleCards.cardTwo ? "SameTextTagVisible" : "SameTextTag"}>June, 2023 - September, 2024</p>
                    </div>
                    <div>
                        {visibleCards.cardTwo ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </div>
                </div>
                {visibleCards.cardTwo && (
                    <>
                        <div className="previouscompanyCentertText">
                            <button className="UploadedWorkbooksBtn">Uploaded Workbooks</button>
                            <h2>Uploaded Attendance</h2>
                            <h2>Uploaded Other Documents</h2>
                            <button className="downloadBtn">
                                <img src={Download} className="DownloadPngColor" alt="" />
                                Download All
                            </button>
                        </div>
                        <div className="Table-Container">
                            <table className="custom-table">
                                <thead className="tablehead">
                                    <tr>
                                        <th className="thAlign"><input type="checkbox" className="checkbox" /> Sr. No.</th>
                                        <th>File Name<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>File Status<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Added On<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Action<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Time Period<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Reminder<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((row, index) => (
                                        <tr key={index}>
                                            <td className="srNo">
                                                <input type="checkbox" className="checkbox" /> {row.srNo}
                                            </td>
                                            <td className="fileNames">
                                                <img src={PdfImg} className="PdfImage" alt="" />{row.fileName}
                                            </td>
                                            <td>
                                                <p className={`status ${row.fileStatus.toLowerCase()}`}>{row.fileStatus}</p>
                                            </td>
                                            <td className="addedOn">{row.addedOn}</td>
                                            <td>
                                                <select
                                                    className={`action ${row.action}`}
                                                    value={row.action}
                                                    style={{
                                                        backgroundColor:
                                                            row.action === "Pending" ? "#F7F5D4" :
                                                                row.action === "Approved" ? "#DFF0D8" :
                                                                    row.action === "Rejected" ? "#FFCECE" : "white",
                                                        border:
                                                            row.action === "Pending" ? "1px solid #FF9900" :
                                                                row.action === "Approved" ? "1px solid #4CAF50" :
                                                                    row.action === "Rejected" ? "1px solid #FF4D4D" : "1px solid #ccc",
                                                        color: "black"
                                                    }}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td
                                                className="timePeriod"
                                                style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }}
                                            >
                                                {row.timePeriod}
                                            </td>
                                            <td className="reminder">{row.reminder}</td>
                                            <td>
                                                {row.submitWorkbook ? (
                                                    <button className="submitworkbook-btn">
                                                        <img src={UploadArrowBlack} className="uploadArrows" alt="" />Submit Workbook
                                                    </button>
                                                ) : (
                                                    <div className="view-download-container">
                                                        <button className="viewBtn">
                                                            <img src={eye} className="eye" alt="" />View
                                                        </button>
                                                        {row.fileStatus === 'Rejected' ? (
                                                            <button className="reuploadBtn">
                                                                <img src={UploadArrow} className="uploadArrows" alt="" />Re-Upload
                                                            </button>
                                                        ) : (
                                                            <button className="downloadBtns">
                                                                <img src={downloadBlack} className="downloadBlack" alt="" />Download
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
            <div className={visibleCards.cardThree ? "PreviousCompanyMainDivVisible" : "PreviousCompanyMainDiv"}>
                <div className={visibleCards.cardThree ? 'TopDivVisible' : 'TopDiv'} onClick={() => handleToggleVisibility('cardThree')} >
                    <div className='LogoMainDiv'>
                        <img src={Logo} alt="" className={visibleCards.cardThree ? '' : 'TopDivLogoVisible'} />
                        <h1 className={visibleCards.cardThree ? "PreviousCompanyH1Visible" : "PreviousCompanyH1"}>The North Face</h1>
                        <img src={verificationImg} alt="" />
                    </div>
                    <div className="vertical-border"></div>
                    <div className='GradeDiv'>
                        <h1 className={visibleCards.cardThree ? "H1AVisible" : "H1A"}>B</h1>
                        <p className={visibleCards.cardThree ? "PGradeVisible" : "PGrade"}>Grade</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='DesignationMainDiv'>
                        <p className="Designation-title">Designation</p>
                        <p className={visibleCards.cardThree ? "SameTextTagVisible" : "SameTextTag"}>Computer System Analyst</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='WorkingPeriodDiv'>
                        <p className="WorkingPeriod-title">Working Period</p>
                        <p className={visibleCards.cardThree ? "SameTextTagVisible" : "SameTextTag"}>January, 2021 - April, 2023</p>
                    </div>
                    <div>
                        {visibleCards.cardThree ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </div>
                </div>
                {visibleCards.cardThree && (
                    <>
                        <div className="previouscompanyCentertText">
                            <button className="UploadedWorkbooksBtn">Uploaded Workbooks</button>
                            <h2>Uploaded Attendance</h2>
                            <h2>Uploaded Other Documents</h2>
                            <button className="downloadBtn">
                                <img src={Download} className="DownloadPngColor" alt="" />
                                Download All
                            </button>
                        </div>
                        <div className="Table-Container">
                            <table className="custom-table">
                                <thead className="tablehead">
                                    <tr>
                                        <th className="thAlign"><input type="checkbox" className="checkbox" /> Sr. No.</th>
                                        <th>File Name<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>File Status<img src={barsFilter} className="barsFilter"  alt=""/></th>
                                        <th>Added On<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Action<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Time Period<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Reminder<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((row, index) => (
                                        <tr key={index}>
                                            <td className="srNo">
                                                <input type="checkbox" className="checkbox" /> {row.srNo}
                                            </td>
                                            <td className="fileNames">
                                                <img src={PdfImg} className="PdfImage" alt="" />{row.fileName}
                                            </td>
                                            <td>
                                                <p className={`status ${row.fileStatus.toLowerCase()}`}>{row.fileStatus}</p>
                                            </td>
                                            <td className="addedOn">{row.addedOn}</td>
                                            <td>
                                                <select
                                                    className={`action ${row.action}`}
                                                    value={row.action}
                                                    style={{
                                                        backgroundColor:
                                                            row.action === "Pending" ? "#F7F5D4" :
                                                                row.action === "Approved" ? "#DFF0D8" :
                                                                    row.action === "Rejected" ? "#FFCECE" : "white",
                                                        border:
                                                            row.action === "Pending" ? "1px solid #FF9900" :
                                                                row.action === "Approved" ? "1px solid #4CAF50" :
                                                                    row.action === "Rejected" ? "1px solid #FF4D4D" : "1px solid #ccc",
                                                        color: "black"
                                                    }}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td
                                                className="timePeriod"
                                                style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }}
                                            >
                                                {row.timePeriod}
                                            </td>
                                            <td className="reminder">{row.reminder}</td>
                                            <td>
                                                {row.submitWorkbook ? (
                                                    <button className="submitworkbook-btn">
                                                        <img src={UploadArrowBlack} className="uploadArrows" alt="" />Submit Workbook
                                                    </button>
                                                ) : (
                                                    <div className="view-download-container">
                                                        <button className="viewBtn">
                                                            <img src={eye} className="eye" alt="" />View
                                                        </button>
                                                        {row.fileStatus === 'Rejected' ? (
                                                            <button className="reuploadBtn">
                                                                <img src={UploadArrow} className="uploadArrows" alt="" />Re-Upload
                                                            </button>
                                                        ) : (
                                                            <button className="downloadBtns">
                                                                <img src={downloadBlack} className="downloadBlack" alt="" />Download
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
            <div className={visibleCards.cardFour ? "PreviousCompanyMainDivVisible" : "PreviousCompanyMainDiv"}>
                <div className={visibleCards.cardFour ? 'TopDivVisible' : 'TopDiv'} onClick={() => handleToggleVisibility('cardFour')} >
                    <div className='LogoMainDiv'>
                        <img src={Logo} className={visibleCards.cardFour ? '' : 'TopDivLogoVisible'} alt="" />
                        <h1 className={visibleCards.cardFour ? "PreviousCompanyH1Visible" : "PreviousCompanyH1"}>Hewlett Packard Enterprise</h1>
                        <img src={verificationImg} alt="" />
                    </div>
                    <div className="vertical-border"></div>
                    <div className='GradeDiv'>
                        <h1 className={visibleCards.cardFour ? "H1AVisible" : "H1A"}>C</h1>
                        <p className={visibleCards.cardFour ? "PGradeVisible" : "PGrade"}>Grade</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='DesignationMainDiv'>
                        <p className="Designation-title">Designation</p>
                        <p className={visibleCards.cardFour ? "SameTextTagVisible" : "SameTextTag"}>Cloud Network Engineer</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='WorkingPeriodDiv'>
                        <p className="WorkingPeriod-title">Working Period</p>
                        <p className={visibleCards.cardFour ? "SameTextTagVisible" : "SameTextTag"}>April, 2018 - December, 2020</p>
                    </div>
                    <div>
                        {visibleCards.cardFour ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </div>
                </div>
                {visibleCards.cardFour && (
                    <>
                        <div className="previouscompanyCentertText">
                            <button className="UploadedWorkbooksBtn">Uploaded Workbooks</button>
                            <h2>Uploaded Attendance</h2>
                            <h2>Uploaded Other Documents</h2>
                            <button className="downloadBtn">
                                <img src={Download} className="DownloadPngColor" alt="" />
                                Download All
                            </button>
                        </div>
                        <div className="Table-Container">
                            <table className="custom-table">
                                <thead className="tablehead">
                                    <tr>
                                        <th className="thAlign"><input type="checkbox" className="checkbox" /> Sr. No.</th>
                                        <th>File Name<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>File Status<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Added On<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Action<img src={barsFilter} className="barsFilter"  alt=""/></th>
                                        <th>Time Period<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Reminder<img src={barsFilter} className="barsFilter"  alt=""/></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((row, index) => (
                                        <tr key={index}>
                                            <td className="srNo">
                                                <input type="checkbox" className="checkbox" /> {row.srNo}
                                            </td>
                                            <td className="fileNames">
                                                <img src={PdfImg} className="PdfImage" alt="" />{row.fileName}
                                            </td>
                                            <td>
                                                <p className={`status ${row.fileStatus.toLowerCase()}`}>{row.fileStatus}</p>
                                            </td>
                                            <td className="addedOn">{row.addedOn}</td>
                                            <td>
                                                <select
                                                    className={`action ${row.action}`}
                                                    value={row.action}
                                                    style={{
                                                        backgroundColor:
                                                            row.action === "Pending" ? "#F7F5D4" :
                                                                row.action === "Approved" ? "#DFF0D8" :
                                                                    row.action === "Rejected" ? "#FFCECE" : "white",
                                                        border:
                                                            row.action === "Pending" ? "1px solid #FF9900" :
                                                                row.action === "Approved" ? "1px solid #4CAF50" :
                                                                    row.action === "Rejected" ? "1px solid #FF4D4D" : "1px solid #ccc",
                                                        color: "black"
                                                    }}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td
                                                className="timePeriod"
                                                style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }}
                                            >
                                                {row.timePeriod}
                                            </td>
                                            <td className="reminder">{row.reminder}</td>
                                            <td>
                                                {row.submitWorkbook ? (
                                                    <button className="submitworkbook-btn">
                                                        <img src={UploadArrowBlack} className="uploadArrows" alt="" />Submit Workbook
                                                    </button>
                                                ) : (
                                                    <div className="view-download-container">
                                                        <button className="viewBtn">
                                                            <img src={eye} className="eye" alt="" />View
                                                        </button>
                                                        {row.fileStatus === 'Rejected' ? (
                                                            <button className="reuploadBtn">
                                                                <img src={UploadArrow} className="uploadArrows" alt="" />Re-Upload
                                                            </button>
                                                        ) : (
                                                            <button className="downloadBtns">
                                                                <img src={downloadBlack} className="downloadBlack" alt="" />Download
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
            <div className={visibleCards.cardFive ? "PreviousCompanyMainDivVisible" : "PreviousCompanyMainDiv"}>
                <div className={visibleCards.cardFive ? 'TopDivVisible' : 'TopDiv'} onClick={() => handleToggleVisibility('cardFive')} >
                    <div className='LogoMainDiv'>
                        <img src={Logo} className={visibleCards.cardFive ? '' : 'TopDivLogoVisible'} alt="" />
                        <h1 className={visibleCards.cardFive ? "PreviousCompanyH1Visible" : "PreviousCompanyH1"}>HCL Technologies</h1>
                        <img src={verificationImg} alt="" />
                    </div>
                    <div className="vertical-border"></div>
                    <div className='GradeDiv'>
                        <h1 className={visibleCards.cardFive ? "H1AVisible" : "H1A"}>C</h1>
                        <p className={visibleCards.cardFive ? "PGradeVisible" : "PGrade"}>Grade</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='DesignationMainDiv'>
                        <p className="Designation-title">Designation</p>
                        <p className={visibleCards.cardFive ? "SameTextTagVisible" : "SameTextTag"}>Cloud Administrator</p>
                    </div>
                    <div className="vertical-border"></div>
                    <div className='WorkingPeriodDiv'>
                        <p className="WorkingPeriod-title">Working Period</p>
                        <p className={visibleCards.cardFive ? "SameTextTagVisible" : "SameTextTag"}>May, 2015 - April, 2018</p>
                    </div>
                    <div>
                        {visibleCards.cardFive ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </div>
                </div>
                {visibleCards.cardFive && (
                    <>
                        <div className="previouscompanyCentertText">
                            <button className="UploadedWorkbooksBtn">Uploaded Workbooks</button>
                            <h2>Uploaded Attendance</h2>
                            <h2>Uploaded Other Documents</h2>
                            <button className="downloadBtn">
                                <img src={Download} className="DownloadPngColor" alt="" />
                                Download All
                            </button>
                        </div>
                        <div className="Table-Container">
                            <table className="custom-table">
                                <thead className="tablehead">
                                    <tr>
                                        <th className="thAlign"><input type="checkbox" className="checkbox" /> Sr. No.</th>
                                        <th>File Name<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>File Status<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Added On<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Action<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Time Period<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th>Reminder<img src={barsFilter} className="barsFilter" alt="" /></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((row, index) => (
                                        <tr key={index}>
                                            <td className="srNo">
                                                <input type="checkbox" className="checkbox" /> {row.srNo}
                                            </td>
                                            <td className="fileNames">
                                                <img src={PdfImg} className="PdfImage" alt="" />{row.fileName}
                                            </td>
                                            <td>
                                                <p className={`status ${row.fileStatus.toLowerCase()}`}>{row.fileStatus}</p>
                                            </td>
                                            <td className="addedOn">{row.addedOn}</td>
                                            <td>
                                                <select
                                                    className={`action ${row.action}`}
                                                    value={row.action}
                                                    style={{
                                                        backgroundColor:
                                                            row.action === "Pending" ? "#F7F5D4" :
                                                                row.action === "Approved" ? "#DFF0D8" :
                                                                    row.action === "Rejected" ? "#FFCECE" : "white",
                                                        border:
                                                            row.action === "Pending" ? "1px solid #FF9900" :
                                                                row.action === "Approved" ? "1px solid #4CAF50" :
                                                                    row.action === "Rejected" ? "1px solid #FF4D4D" : "1px solid #ccc",
                                                        color: "black"
                                                    }}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td
                                                className="timePeriod"
                                                style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }}
                                            >
                                                {row.timePeriod}
                                            </td>
                                            <td className="reminder">{row.reminder}</td>
                                            <td>
                                                {row.submitWorkbook ? (
                                                    <button className="submitworkbook-btn">
                                                        <img src={UploadArrowBlack} className="uploadArrows" alt="" />Submit Workbook
                                                    </button>
                                                ) : (
                                                    <div className="view-download-container">
                                                        <button className="viewBtn">
                                                            <img src={eye} className="eye" alt="" />View
                                                        </button>
                                                        {row.fileStatus === 'Rejected' ? (
                                                            <button className="reuploadBtn">
                                                                <img src={UploadArrow} className="uploadArrows" alt="" />Re-Upload
                                                            </button>
                                                        ) : (
                                                            <button className="downloadBtns">
                                                                <img src={downloadBlack} className="downloadBlack" alt="" />Download
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default PreviousCompany;