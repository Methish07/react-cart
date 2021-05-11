import React, { useContext, useState } from 'react'
import {statecontext} from './context/contex'
import './component.css';
import {cartlist} from './component'
const Cart = () => {
    const [state,dispatch]=useContext(statecontext);
    const remover=(i)=>{
        dispatch({type:'REMOVE_FROM_CART',payload:i});
        cartlist.splice(i,1);
        console.log(cartlist);
        console.log(state);

    }

    return (
        <div className="compo">
            <h1 className="cart-head">Cart</h1>
            {state.cart.map((i)=>{
                return(
                    <div key={i.id} className="compo-div">
                       
                        <img src={i.img} className="img-compo"></img>
                        <h1 className="dish">{i.dish}</h1>
                        <h1 className="rs">💲{i.Rs}</h1>
                        <button className="btn-cart" onClick={()=>remover(i)}>Remove from Cart</button>
                        </div>
                )
            })}
        </div>
    )
}

export default Cart
