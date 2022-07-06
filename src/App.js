//import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home.js';

import React from 'react'
import Cartitem from './Cartitem.js';
import Viewcart from './viewcart.js';
import { UserProvider } from './Usercontext.js';

function App() {
  return (
    <BrowserRouter>
     <UserProvider>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Viewcart/>}/>

     </Routes>

     </UserProvider>
    </BrowserRouter>
  
  )
}

export default App






























// import React from 'react';
// import Cart from './Cart';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Cartitem from './Cartitem';
// import {useState} from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import {Link}from 'react-router-dom';
// import Viewcart from './viewcart';


// function App() {
//   const[cartitems,setCartItems]=useState([]);
//   const [total,setTotal]=useState(0);

//   const carts=[{id:1,title:"Fancy Product",price:" $40.00 - $80.00",btn:" View Options"},
//   {id:2,title:"Special Item ",price:" $20.00 $18.00",btn:" Add to Cart",sale:"Sale"},
//   {id:3,title:"Sale Item",price:" $50.00 $25.00",btn:" Add to Cart",sale:"Sale"},
//   {id:4,title:"Popular Item",price:" $40.00",btn:" Add to Cart"},
//   {id:5,title:"Sale Item",price:" $50.00 $25.00",btn:" Add to Cart",sale:"Sale"},
//   {id:6,title:"Fancy Product ",price:" $40.00 - $80.00",btn:" View Options"},
//   {id:7,title:"Special Item",price:" $20.00 $18.00",btn:" Add to Cart",sale:"Sale"},
//   {id:8,title:"Popular Item",price:" $40.00",btn:" Add to Cart"}]

//  let handleAddtoCart = (id) =>{
//   //alert(id)
//   //console.log("hello")
//   const cartId=carts.findIndex(obj=>obj.id ===id)
//   const newcart=carts[cartId]
//   // newcart.incart=true;

//   setCartItems([...cartitems,newcart])
//   setTotal(total+1)
//  }

//  let removeCartitems = (id) =>{
//   const removecartId=cartitems.findIndex(obj=>obj.id ===id)
//   cartitems.splice(removecartId,1)
//   setCartItems([...cartitems])
//   setTotal(total-1)
//  }

//  let removeAllCart = (cartitems) =>{
//   // const removeallcartId=cartitems
  
//   // cartitems.splice(removeallcartId,1)
//   setCartItems([]);
//   setTotal(total*0);
//   //setTotal(total-1)
//  }


//   return (
    
//     <div className='row'>
//       <div>
//       <>
//   {/* Navigation*/}
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container px-4 px-lg-5">
//       <a className="navbar-brand" href="#!">
//         Start Bootstrap
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#!">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#!">
//               About
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//              <a
//               className="nav-link dropdown-toggle"
//               id="navbarDropdown"
//               // href="#"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Shop
//             </a> 
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li>
//                 <a className="dropdown-item" href="#!">
//                   All Products
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#!">
//                   Popular Items
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#!">
//                   New Arrivals
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <div className="d-flex">
//            <button onClick={()=>removeAllCart(cartitems)} className="btn btn-outline-dark">
//             <i className="bi-cart-fill me-1" />
//             Cart
           
//               <a className="badge bg-dark text-white ms-1 rounded-pill" href="">
//               {total}
//             </a>
//           </button> 
//           {/* <Link className="badge bg-dark text-white ms-1 rounded-pill" to={"/cart"}>
//               {total}
//             </Link> */}
//             {/* <Link  className="btn btn-outline-dark" to={"/cart"}>
//             <i className="bi-cart-fill me-1" />
//             Cart
//              <a className="badge bg-dark text-white ms-1 rounded-pill" >
//               {total}
//             </a>
//             </Link> */}
         
//         </div>
       
//       </div>
//     </div>
//   </nav>

//   <>
//   {/* Header*/}
//   <header className="bg-dark py-5">
//     <div className="container px-4 px-lg-5 my-5">
//       <div className="text-center text-white">
//         <h1 className="display-4 fw-bolder">Shop in style</h1>
//         <p className="lead fw-normal text-white-50 mb-0">
//           With this shop hompeage template
//         </p>
//       </div>
//     </div>
//   </header>
// </>

// <section className="py-5">
//   <div className="container px-4 px-lg-5 mt-5">
//     <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//       {/* <div className="col mb-5">
//         <div className="card h-100"> */}
           

        
//   {/* Product image*/}
//      {
//       carts.map((input)=>{
//         return <Cart cartitems={cartitems} data={input} handleAddtoCart={handleAddtoCart} />
//       })
//      }
     
//      {/* <Routes>
//       <Route path="/cart" element={<Viewcart/>}/>
//     </Routes> 
//       */}



//         {/* </div>
//       </div> */}
//     </div>
//   </div>
// </section>


// <>
//   <footer className="py-5 bg-dark">
//     <div className="container">
//       <p className="m-0 text-center text-white">
//         Copyright © Your Website 2022
//       </p>
//     </div>
//     <div>
      

//       {
//           cartitems.map((input)=>{
//             return <Cartitem  data={input} delete={removeCartitems}/>
            
//           })
// }
//       {/* <Router>
//       <Route path="/cart" element={<Viewcart/>}/>
//     </Router> 
//       */}
     
//     </div>
//   </footer>
//   {/* Bootstrap core JS*/}
//   {/* Core theme JS*/}
// </>
  
// </>
     
//      </div>
    
//      {/* <Routes>
//       <Route path="/cart" element={<Viewcart/>}/>
//     </Routes>  */}
     
//      </div>
    
 
    
//   )
// }

// export default App;