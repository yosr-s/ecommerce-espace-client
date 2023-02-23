import React, { useState } from 'react'
import OrderService from '../../service/OrderService';
import {  Link, useNavigate } from 'react-router-dom';


const Checkout = () => {
  const navigate = useNavigate();


  //add order
  const [Data, setData] = useState({});

 /* const onSubmitHandler = (e) => {
    e.preventDefault();
    Data.qte=qte.toString();
    Data.prix=(sum+7).toString();
    let prod=delete storedObjects.qte;
    console.log("storedObjects",storedObjects);
    console.log("prod",prod);
    Data.products=prod;
    console.log("daaaataaaa",Data);
    OrderService.create(Data)    
    .then((res) => {
      console.log(res)
      //navigate("/category-list")
    })
    .catch((err) => {
      console.log(err);
    });
  };*/
  const onSubmitHandler = (e) => {
    e.preventDefault();
  
    if (!storedObjects) {
      return;
    }
  
    let prod = storedObjects.map((obj) => {
      let newObj = { ...obj };
      delete newObj.qte;
      return newObj;
    });

    let cust=localStorage.getItem("user_id_client");
    Data.customer=cust;
  
    Data.qte = qte.toString();
    Data.prix = (sum + 7).toString();
    Data.products = prod;
  
    OrderService.create(Data)
      .then((res) => {
        console.log(res);
         navigate("/order")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

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
    return (
        <>
         <main className="main checkout">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav">
    <div className="container">
      <ul className="breadcrumb shop-breadcrumb bb-no">
        <li className="passed"><a href="cart.html">Shopping Cart</a></li>
        <li className="active"><a href="checkout.html">Checkout</a></li>
        <li><a href="order.html">Order Complete</a></li>
      </ul>
    </div>
  </nav>
  {/* End of Breadcrumb */}
  {/* Start of PageContent */}
  <div className="page-content">
    <div className="container">
     
      <form className="login-content">
        <p>If you have shopped with us before, please enter your details below. 
          If you are a new customer, please proceed to the Billing section.</p>
        <div className="row">
          <div className="col-xs-6">
            <div className="form-group">
              <label>Username or email *</label>
              <input type="text" className="form-control form-control-md" name="name" required />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Password *</label>
              <input type="text" className="form-control form-control-md" name="password" required />
            </div>
          </div>
        </div>
        <div className="form-group checkbox">
          <input type="checkbox" className="custom-checkbox" id="remember" name="remember" />
          <label htmlFor="remember" className="mb-0 lh-2">Remember me</label>
          <a href="#" className="ml-3">Last your password?</a>
        </div>
        <button className="btn btn-rounded btn-login">Login</button>
      </form>
     
      <div className="coupon-content mb-4">
        <p>If you have a coupon code, please apply it below.</p>
        <div className="input-wrapper-inline">
          <input type="text" name="coupon_code" className="form-control form-control-md mr-1 mb-2" placeholder="Coupon code" id="coupon_code" />
          <button type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">Apply Coupon</button>
        </div>
      </div>
      <form className="form checkout-form" action="#" method="post">
        <div className="row mb-9">
         <center>
          <div className="col-lg-6 mb-4 sticky-sidebar-wrapper">
            <div className="order-summary-wrapper sticky-sidebar">
              <h3 className="title text-uppercase ls-10">Your Order</h3>
              <div className="order-summary">
                <table className="order-table">
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        <b>Product</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {storedObjects?.map((item,index)=>{
             return(
                    <tr className="bb-no">
                      <td className="product-name">{item.name} <i className="fas fa-times" /> <span className="product-quantity">{item.qte.qte}</span></td>
                      <td className="product-total">{item.qte.qte}</td>
                    </tr>
                    )
                  })} 
                    <tr className="cart-subtotal bb-no">
                      <td>
                        <b>Subtotal</b>
                      </td>
                      <td>
                        <b>{sum}</b>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="shipping-methods">
                      <td colSpan={2} className="text-left">
                        <h4 className="title title-simple bb-no mb-1 pb-0 pt-3">Shipping
                        </h4>
                        <ul id="shipping-method" className="mb-4">
                        
                          <li>
                            <div className="custom-radio">
                              <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" checked/>
                              <label htmlFor="local-pickup" className="custom-control-label color-dark">Local
                                Pickup (7 TND) </label>
                            </div>
                          </li>
                         
                        </ul>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>
                        <b>Total</b>
                      </th>
                      <td>
                        <b>{sum+7}</b>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="payment-methods" id="payment_method">
                  <h4 className="title font-weight-bold ls-25 pb-0 mb-1">Payment Methods</h4>
                  <div className="accordion payment-accordion">
                    <div className="card">
                      <div className="card-header">
                        <a href="#cash-on-delivery" className="collapse">Direct Bank Transfor</a>
                      </div>
                      <div id="cash-on-delivery" className="card-body expanded">
                        <p className="mb-0">
                          Make your payment directly into our bank account. 
                          Please use your Order ID as the payment reference. 
                          Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#payment" className="expand">Check Payments</a>
                      </div>
                      <div id="payment" className="card-body collapsed">
                        <p className="mb-0">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a href="#delivery" className="expand">Cash on delivery</a>
                      </div>
                      <div id="delivery" className="card-body collapsed">
                        <p className="mb-0">
                          Pay with cash upon delivery.
                        </p>
                      </div>
                    </div>
                    <div className="card p-relative">
                      <div className="card-header">
                        <a href="#paypal" className="expand">Paypal</a>
                      </div>
                      <a href="https://www.paypal.com/us/webapps/mpp/paypal-popup" className="text-primary paypal-que" onclick="javascript:window.open('https://www.paypal.com/us/webapps/mpp/paypal-popup','WIPaypal',
                                                  'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); 
                                                  return false;">What is PayPal?
                      </a>
                      <div id="paypal" className="card-body collapsed">
                        <p className="mb-0">
                          Pay via PayPal, you can pay with your credit cart if you
                          don't have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group place-order pt-6">
                  <button onClick={onSubmitHandler}  className="btn btn-dark btn-block btn-rounded">Place Order</button>
                </div>
              </div>
            </div>
          </div>
          </center>
        </div>
      </form>
    </div>
  </div>
  {/* End of PageContent */}
</main>
 
        </>
    )
}

export default Checkout
