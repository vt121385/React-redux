import React from 'react'

function Home(props) {
    console.log('Home props:', props.cardItems)
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://w7.pngwing.com/pngs/343/207/png-transparent-iphone-x-iphone-8-plus-iphone-7-apple-iphone-gadget-electronics-mobile-phone.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandler({ price: 1000, name: 'i phone' })}
                    >Add To Cart</button>

                    <button className='remove-cart-btn'
                        onClick={() => props.removeToCartHandler()}
                    >Remove To Cart</button>

                </div>
            </div>
        </div>
    )
}
export default Home