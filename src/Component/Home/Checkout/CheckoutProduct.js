import React from 'react'
import '../Checkout/CheckoutProduct.css'
import { useStateValue } from '../../StateProvider'



function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                id:id,

            })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating" key={id}>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>*</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
