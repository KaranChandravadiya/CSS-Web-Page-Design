import React from 'react';
import "../CSS/PreviousCompany.css"
import Logo from "../Image/logo.png"
import verificationImg from "../Image/verificationImg.png"
import UploadArrowBlack from "../Image/UploadArrowBlack.png"
import downloadBlack from "../Image/downloadBlack.png"
import UploadArrow from "../Image/UploadArrow.png"
import eye from "../Image/eye.png"
import barsFilter from "../Image/bars-filter.png"
import Download from "../Image/Download.png"
import PdfImg from "../Image/PdfImg.png"

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

    const handleSelectChange = (index, value) => {
        const updatedData = [...datas];
        updatedData[index].action = value;
        setData(updatedData);
    };

    return (
        <>
            <div className='AlignSet'>
                <h1 className='PreviousCompanyText'>Previous Company Timeline</h1>
                <a href="" className='linkEdit'>View All Your Previous Company List</a>
            </div>
            <div className='PreviousCompanyMainDiv'>
                <div className='TopDiv'>
                    <img src={Logo} />
                    <h1 className='PreviousCompanyH1'>Trades Solution Pvt. Ltd.</h1>
                    <img src={verificationImg} />
                    <div className='vertical-dotted-border'></div>
                    <div>
                        <h1 className='H1A'>A</h1>
                        <p className='PGrade'>Grade</p>
                    </div>
                    <div className='vertical-dotted-border'></div>
                    <div>
                        <p className='title'>Designation</p>
                        <p className='P-Tag'>E-Commerce Marketplace</p>
                        <p className='P-Tag'>Listing & Management</p>
                    </div>
                    <div className='vertical-dotted-border'></div>
                    <div>
                        <p className='titleP'>Working Period</p>
                        <p className='P-Tag'>June, 2023- September, 2024</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-caret-up"></i>
                    </div>
                </div>
                <div className='previouscompanyCentertText'>
                    <button className='UploadedWorkbooksBtn'>Uploaded Workbooks</button>
                    <h2>Uploaded Attendence</h2>
                    <h2>Uploaded Other Documents</h2>
                    <button className='downloadBtn'><img src={Download} className='DownloadPngColor' />Download All</button>
                </div>
                <div className="Table-Container">
                    <table className="custom-table">
                        <thead className='tablehead'>
                            <tr>
                                <th className='thAlign'><input type="checkbox" className='checkbox' /> Sr. No.</th>
                                <th>File Name<img src={barsFilter} className='barsFilter' /></th>
                                <th>File Status<img src={barsFilter} className='barsFilter' /></th>
                                <th>Added On<img src={barsFilter} className='barsFilter' /></th>
                                <th>Action<img src={barsFilter} className='barsFilter' /></th>
                                <th>Time Period<img src={barsFilter} className='barsFilter' /></th>
                                <th>Reminder<img src={barsFilter} className='barsFilter' /></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} >
                                    <td className='srNo'> <input type="checkbox" className='checkbox' /> {row.srNo}</td>
                                    <td className='fileNames'><img src={PdfImg} className='PdfImage' />{row.fileName}</td>
                                    <td>
                                        <p className={`status ${row.fileStatus.toLowerCase()}`}>
                                            {row.fileStatus}
                                        </p>
                                    </td>
                                    <td className='addedOn'>{row.addedOn}</td>
                                    <td>
                                        <select className={`action ${row.action}`}
                                            value={row.action}
                                            style={{
                                                backgroundColor:
                                                    row.action === "Pending" ? "#F7F5D4" :
                                                        row.action === "Approved" ? "#DFF0D8" :
                                                            row.action === "Rejected" ? "#FFCECE" :
                                                                "white",
                                                border:
                                                    row.action === "Pending" ? "1px solid #FF9900" :
                                                        row.action === "Approved" ? "1px solid #4CAF50" :
                                                            row.action === "Rejected" ? "1px solid #FF4D4D" :
                                                                "1px solid #ccc",
                                                color: "black"
                                            }}
                                            onChange={(e) => handleSelectChange(index, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                    <td className='timePeriod' style={{ color: row.timePeriod === '8H' ? 'green' : row.timePeriod === '...' ? 'black' : '#e54335', }} >{row.timePeriod}</td>
                                    <td className='reminder'>{row.reminder}</td>
                                    <td>
                                        {row.submitWorkbook ? (
                                            <button className="submitworkbook-btn"><img src={UploadArrowBlack} className='uploadArrows' />Submit Workbook</button>
                                        ) : (
                                            <>
                                                <div className="view-download-container">
                                                    <button className="viewBtn"><img src={eye} className='eye' />View</button>
                                                    {row.fileStatus === 'Rejected' ? (
                                                        <button className="reuploadBtn"><img src={UploadArrow} className='uploadArrows' />Re-Upload</button>
                                                    ) : (
                                                        <button className="downloadBtns"><img src={downloadBlack} className='downloadBlack' />Download</button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default PreviousCompany;