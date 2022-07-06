import React from 'react'

function Cartitem(props) {
  return (
    <>
    <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
       {props.data.title}--{props.data.price} 
        <button onClick={()=>props.delete(props.data.id)} className="btn btn-danger ">Remove from Cart</button>  
    </li>
    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
      Dapibus ac facilisis in
      <span className="badge badge-primary badge-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Morbi leo risus
      <span className="badge badge-primary badge-pill">1</span>
    </li> */}
  </ul>
</>

  )
}

export default Cartitem;