import React from 'react'

const Header = ({ Heading, icon }) => {
    return (
        <header>
            <div className="header">
                <div className="Heading d-flex align-items-center">
                    <span>{icon}</span>
                    <span className='px-2'>{Heading}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
