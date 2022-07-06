import React from 'react'
import UserContext from './Usercontext';
import {useContext} from 'react';
import Cartitem from './Cartitem';

function Viewcart() {
  let dataReceive=useContext(UserContext);
  let removeCartitems = (id) =>{
    const removecartId=dataReceive.cartitems.findIndex(obj=>obj.id ===id)
    dataReceive.cartitems.splice(removecartId,1)
    dataReceive.setCartItems([...dataReceive.cartitems])
    dataReceive.setTotal(dataReceive.total-1)
   }
  

  return (

    <>
     {
          dataReceive.cartitems.map((input)=>{
            return <Cartitem data={input} delete={removeCartitems}/>
            
          })}
    
    </>
    // <div className='hover'>
    //   <ul className="list-group">
    //   <li className="list-group-item d-flex justify-content-between align-items-center">
    //      {/* {props.data.title}--{props.data.price}  */}viewcart
    //      {/* <button onClick={()=>props.delete(props.data.id)} className="btn btn-danger ">Remove from Cart</button> 
    //    */}
    //   </li>
    //   {/* <li className="list-group-item d-flex justify-content-between align-items-center">
    //     Dapibus ac facilisis in
    //     <span className="badge badge-primary badge-pill">2</span>
    //   </li>
    //   <li className="list-group-item d-flex justify-content-between align-items-center">
    //     Morbi leo risus
    //     <span className="badge badge-primary badge-pill">1</span>
    //   </li> */}
    // </ul>
    // </div>
  )
}

export default Viewcart;