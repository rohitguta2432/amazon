import React from 'react'
import '../Checkout/Checkout.css'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {
                    basket ?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is Empty</h2>
                            <p> You have no item in the basket. To buy one or more items,click "Add to Basket" next to the item.</p>
                        </div>
                    ) :
                        (
                            <div className="checkout__title">
                                <h2> Your Shopping Basket</h2>
                                {
                                    basket.map(item => (
                                        <CheckoutProduct id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating} />
                                    ))
                                }
                            </div>
                        )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>Subtotal</h1>
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
