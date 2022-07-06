import React from 'react';
import './App.css';
function Cart(props) {
  return (
    <div className="col mb-5">
  <div className="card h-100">
  <div className="badge bg-dark text-white position-absolute sty">{props.data.sale}</div>
    {/* Product image*/}
    <img
      className="card-img-top"
      src="https://dummyimage.com/450x300/dee2e6/6c757d.jp"
      alt="..."
    />
    {/* Product details*/}
    <div className="card-body p-4">
      <div className="text-center">
        {/* Product name*/}
        <h5 className="fw-bolder">{props.data.title}</h5>
       { /*Product reviews*/}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
        {/* Product price*/}
       {props.data.price}
      </div>
    </div>
    {/* Product actions*/}
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        {/* {
          props.cartitems.some(obj=>obj.id ===props.data.id)
        } */}
         <button disabled={props.addcart.some(obj=>obj.id ===props.data.id)} onClick={()=>props.handleAddtoCart(props.data.id)} className="btn btn-dark">
         Add to Cart
        </button> 
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart