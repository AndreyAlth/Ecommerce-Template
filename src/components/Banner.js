import React from 'react'

function Banner( bannerTitle ) {
    const {title} = bannerTitle;
    return (
        <div className="banner-color">
            <div className='container'>
                <div className="row row-title">
                    <h2 className='banner-title'>{title}</h2>
                </div>
                <div className="row justify-content-center">
                    <ul className='banner-list'>
                        <li className='banner-list-item'>Home</li>
                        <li className='banner-list-item'>Pages</li>
                        <li className='banner-list-item color-active'>{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
