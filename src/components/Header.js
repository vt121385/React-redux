import React from 'react'

function Header(props) {
    console.log('Home props:',props.cardItems)
    return (
        <div>
           <div className='add-to-cart'>
            <span className='cart-count'>{props.cardItems.length}</span>
              <img src='https://w7.pngwing.com/pngs/317/428/png-transparent-shopping-cart-computer-icons-add-to-cart-button-angle-text-service-thumbnail.png' />
           </div>
        </div>
    )
}
export default Header