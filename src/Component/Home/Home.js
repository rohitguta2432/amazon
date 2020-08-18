import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product id={123465} title="The Lean Startup" price={11.56} rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />
            
                <Product id={123465} title="The Lean Startup" price={11.56} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

                <Product id={123466} title="The Lean Startup" price={11.56} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

                <Product id={123467} title="The Lean Startup" price={11.56} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

                <Product id={123465} title="The Lean Startup" price={11.56} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

            </div>
        </div>
    )
}

export default Home
