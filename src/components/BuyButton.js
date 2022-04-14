import React from 'react'

function BuyButton( text ) {
    const {textButton} = text;
    return (
        <button className="buy-button">
            {textButton}
        </button>
    )
}

export default BuyButton
