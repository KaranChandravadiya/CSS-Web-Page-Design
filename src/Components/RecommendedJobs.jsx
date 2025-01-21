import React from 'react';
import CardRightImg from "../Image/CardRightImg.png"
import LocationImg from "../Image/LocationImg.png"
import ProfileImg from "../Image/ProfileImg.png"
import "../CSS/RecommendedJobs.css"

const RecommendedJobs = () => {

    const cardData = [
        { title: "UI Designer", organisation: "10.11 Design", location: "Makarba, Ahmedabad", vacancy: "05 Vacancy" },
        { title: "Frontend Developer", organisation: "Tata Consultancy services", location: "Satellite, Ahmedabad", vacancy: "01 Vacancy", isApplied: true },
        { title: "Product Designer", organisation: "Think Design", location: "Bopal, Ahmedabad", vacancy: "03 Vacancy" },
        { title: "UI Designer", organisation: "10.11 Design", location: "Makarba, Ahmedabad", vacancy: "05 Vacancy" },
    ]

    const colors = ["#E0F7FA", "#F7F5D4", "#DFF0D8", "#FFCECE"];
    const borderColors = ["#007BB6", "#FF9900", "#4CAF50", "#FF4D4D"];

    return (
        <>
            <h1 className='RecommendedJobs'>Recommended Jobs</h1>
            <div className="RecommendedMainDiv">
                <div className='JobsCard'>
                    {cardData.map(({ title, organisation, location, vacancy, isApplied }, index) => (
                        <div className={`jobs-card ${isApplied ? "applied" : ""}`} key={index} >
                            <div className='card-header-title'>
                                <div className="card-type"
                                    style={{
                                        backgroundColor: colors[index % colors.length],
                                        border: `1px solid ${borderColors[index % borderColors.length]}`,
                                    }}
                                >
                                    <span>{title}</span>
                                </div>
                                <div>
                                    <span className='dotIcon'><i className="fa-solid fa-ellipsis-vertical"></i></span>
                                </div>
                            </div>
                            <div>
                                <h3 className="card-title">
                                    {organisation} <span className="CardRightImg"><img src={CardRightImg} alt='' /></span>
                                </h3>
                                <div className='Line'></div>
                                <div className="location">
                                    <img src={LocationImg} className="locationImg" alt='' />{location}
                                </div>
                                <div className="vacancy">
                                    <img src={ProfileImg} className="vacancyImg" alt='' /> {vacancy}
                                </div>
                            </div>
                            <div className='Line2'></div>
                            <div>
                                {isApplied ? (
                                    <button className="AppliedBtn">Applied</button>
                                ) : (
                                    <button className="ApplyNowBtn">Apply Now</button>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RecommendedJobs;