import { connect } from 'react-redux'
import {addToCart, removeToCart}  from '../Services/Actions/action'
import Home from '../components/Home'

const mapStateToProps = state => ({
       cardItems:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),  
    removeToCartHandler:data => dispatch(removeToCart(data))  
    // addToCartHandler is fun which will be call inside react component
    // data is paramenter which will come from component
    // dispatch is param which comes from mapDispatchToProps param
    // addToCart(data) is funtion which we are importing from action
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// connect comes from react-redux lib and its take two param mapStateToProps & mapDispatchToProps along with react component name
//export default Home