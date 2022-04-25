import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Banner from '../Banner';
import BuyButton from '../BuyButton';
import Carousel from '../Carousel';
import Contact from '../contact/Contact';
import NotFound from '../error/NotFound';
import Footer from '../Footer';
import HeadingBar from '../HeadingBar';
import NavBar from '../NavBar';
import OrderCompleted from '../ordered/OrderCompleted';
import ProductScreen from '../products/ProductScreen';
import ShippingScreen from '../shipping/ShippingScreen';
import Viewer from '../Viewer';

function DashboardRoute() {
    function PrincipalSection(){
        return(
            <>
            <Carousel/>
            <Viewer/>
            </>
        )
    }

    return (
        <div>
            <HeadingBar/>
            {/* <NavBar/> */}
            {/* <Routes>
                <Route path="/" element={ PrincipalSection() }/>
                <Route path="/*" element={ <NotFound/> }/>
                <Route path="contact" element={ <Contact/> }/>

                <Route path="product" element={ <ProductScreen/>}/>
                <Route path="product/:productId" element={ <ProductScreen/>}/>

                <Route path="shipping" element={ <ShippingScreen/> }/>
                <Route path="orderCompleted" element={ <OrderCompleted/> }/>
                <Route path="banner" element={ <Banner bannerTitle="Shopping"/> }/>
            </Routes> */}
            <Footer/>
        </div>
    )
}

export default DashboardRoute;
