import React from 'react'
import orderCompleted from '../../images/order-completed.png'
import Banner from '../Banner'
import BuyButton from '../BuyButton'

function OrderCompleted() {
    return (
        <>
        <Banner title="Orden Completa"/>
        <div className='container mt-5 mb-5'>
            <img className='order-checked my-2 px-2 py-2' src={orderCompleted} alt="orden completa" />
            <div className='order-message my-2'>Tu orden se ha completado</div>
            <p className='paragraph-inf my-3'>Gracias por tu orden, tu orden está siendo procesada y estará completa dentro de 24 horas.
                <br/>
                Recibirás un email de confirmación cuando esté lista.
            </p>
            <BuyButton textButton = "Continuar"/>
        </div>
        </>
    )
}

export default OrderCompleted
