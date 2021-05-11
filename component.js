import React,{useContext, useEffect} from 'react'
import {data} from './context/data'
import {statecontext} from './context/contex'
import './component.css'
import axios from 'axios'
export function sender(dish,img,Rs,id){
  this.dish=dish;
  this.img=img;
  this.Rs=Rs;
  this.id=id;
}
export const cartlist=[];
const Component = () => {
    const [state,dispatch]=useContext(statecontext);
        const adder=(i)=>{
          dispatch({type:'ADD_TO_CART',payload:i});
          const send=new sender(i.dish,i.img,i.Rs,i.id);
          cartlist.push(send);
          console.log(cartlist);
        }

      return (
        <div className="compo">
      {data.map((i)=>{
        return(
          <div key={i.id} className="compo-div">
            <img src={i.img} className="img-compo"></img>
            <h1 className="dish">{i.dish}</h1>
            <h1 className="rs">💲{i.Rs}</h1>
            <button onClick={()=>{adder(i)}} className="btn-compo" >Add to Cart</button>
          </div>
        )
      })}
      
        </div>
    )
}

export default Component
