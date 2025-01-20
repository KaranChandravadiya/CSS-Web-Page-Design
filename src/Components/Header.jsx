import React from 'react'
import "../CSS/Header.css"

function Header() {
    return (
        <>
            <div className="maindiv">
                <div>
                    <h1 className='Placement'>Placement </h1>
                    <p className="text">Placement / HomePage</p>
                </div>
                <div>
                    <button className="button-1">Apply for Self Placement</button>
                    <button className="button-2">My Warning Latter</button>
                </div>
            </div>
        </>
    )
}

export default Header