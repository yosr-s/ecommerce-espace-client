import React from 'react'
import  { useState, useEffect } from 'react'
import {  Link, useNavigate } from 'react-router-dom';



const Cart = (e) => {
  const navigate = useNavigate();

 

    //reset cart
  const resetCart=() => {
    localStorage.setItem("cart", JSON.stringify([]))
    window.location.reload();

  }

  //get items from local storage
  let storedObjects;
const storedObjectsString = localStorage.getItem("cart");
if (storedObjectsString) {
  storedObjects = JSON.parse(storedObjectsString);
} else {
  storedObjects = [];
}
console.log("stored obj",storedObjects);

//somme de la carte
let sum = 0;
for (let i = 0; i < storedObjects.length; i++) {
  const item = storedObjects[i];
  sum += parseInt(item.qte.qte*parseInt(item.price) );
}

//qte totale de produit dans la carte
let qte = 0;
for (let i = 0; i < storedObjects.length; i++) {
  const item = storedObjects[i];
  qte += item.qte.qte;
}
console.log("qte",qte);

  return (
    <>
     <main className="main cart">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav">
    <div className="container">
      <ul className="breadcrumb shop-breadcrumb bb-no">
        <li className="active"><a href="cart.html">Shopping Cart</a></li>
        <li><a href="checkout.html">Checkout</a></li>
        <li><a href="order.html">Order Complete</a></li>
      </ul>
    </div>
  </nav>
  {/* End of Breadcrumb */}
  {/* Start of PageContent */}
  <div className="page-content">
    <div className="container">
      <div className="row gutter-lg mb-10">
        <div className="col-lg-8 pr-lg-4 mb-6">
          <table className="shop-table cart-table">
            <thead>
              <tr>
                <th className="product-name"><span>Product</span></th>
                <th />
                <th className="product-price"><span>Price</span></th>
                <th className="product-quantity"><span>Quantity</span></th>
                <th className="product-subtotal"><span>Subtotal</span></th>
              </tr>
            </thead>
            <tbody>
            {storedObjects?.map((item,index)=>{
             return(
              <tr>
                <td className="product-thumbnail">
                  <div className="p-relative">
                    <a href="product-default.html">
                      <figure>
                        <img src={"http://localhost:3000/file/"+item.galleries[0].url_photo} alt="product" width={300} height={338} />
                      </figure>
                    </a>
                    <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                  </div>
                </td>
                <td className="product-name">
                  <a href="product-default.html">
                    {item.name}
                  </a>
                </td>
                <td className="product-price"><span className="amount">{item.price} TND</span></td>
                <td className="product-quantity">
                  <div className="input-group">
                   
                  <input
                    className="quantity form-control"
                    type="number"
                    min={1}
                    max={100000}
                    value={item.qte.qte}
                                  />
                   
                  </div>
                </td>
                <td className="product-subtotal">
                  <span className="amount">{ parseInt(item.price) * item.qte.qte}</span>
                </td>
              </tr>
               )
              })} 
             
            </tbody>
          </table>
          <div className="cart-action mb-6">
            <Link to="" onClick={() => navigate(-2)} className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i className="w-icon-long-arrow-left" />Continue Shopping</Link>
            <button onClick={resetCart} type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">Clear Cart</button> 
            <button type="submit" className="btn btn-rounded btn-update disabled" name="update_cart" value="Update Cart">Update Cart</button>
          </div>
        
        </div>
        <div className="col-lg-4 sticky-sidebar-wrapper">
          <div className="sticky-sidebar">
            <div className="cart-summary mb-4">
              <h3 className="cart-title text-uppercase">Cart Totals</h3>
              <div className="cart-subtotal d-flex align-items-center justify-content-between">
                <label className="ls-25">Subtotal</label>
                <span>{sum}</span>
              </div>
              <hr className="divider" />
              <div className="cart-subtotal d-flex align-items-center justify-content-between">
                <label className="ls-25">Total quantity of products</label>
                <span>{qte}</span>
              </div>
              <hr className="divider" />

              
              
            
            
              <Link to="/checkout" className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                Proceed to checkout<i className="w-icon-long-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End of PageContent */}
</main>

      
    </>
  )
}

export default Cart
