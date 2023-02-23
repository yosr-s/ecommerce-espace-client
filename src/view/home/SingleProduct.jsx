import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../service/ProductService';

const SingleProduct = () => {
    const navigate = useNavigate();
    const [prodqte, setProdqte] = useState([]);
   // const [qte, setqte] = useState({});




    const AddToCart = (prod) => {
        try {
          console.log("proooooooooood", prod);
          let cart;
          const localStorageCart = localStorage.getItem("cart");
          if (localStorageCart) {
            try {
              cart = JSON.parse(localStorageCart);
            } catch (e) {
              cart = [];
            }
          } else {
            cart = [];
          }
          let qte={qte:counter}
          console.log("qte",qte)
          prod.qte = { qte: counter };
          cart.push(prod);
          localStorage.setItem("cart", JSON.stringify(cart));
          console.log(cart);
          navigate("/cart")
        } catch (error) {
          console.error(error);
        }
      };

        const [counter, setCounter] = useState(0)
        const increment = () => {
            setCounter(counter + 1);
        };
        const decrement = () => {
            setCounter(counter - 1);
        };
    
    const { id } = useParams();
    const [Data, setData] = useState({});
    useEffect(() => {
        return () => {
          ProductService.getOne(id).then((res) => {
            console.log("data of get by id  ", res.data);
            setData(res.data);
            //sleep(1000)
            console.log("dattaaaaaaaaa",Data)
          });
        };
      },[]);

    return (
        <>
  <main className="main mb-10 pb-1">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav container">
    <ul className="breadcrumb bb-no">
      <li><a href="demo1.html">Home</a></li>
      <li>Products</li>
    </ul>
    <ul className="product-nav list-style-none">
      <li className="product-nav-prev">
        <a href="#">
          <i className="w-icon-angle-left" />
        </a>
        <span className="product-nav-popup">
          <img src="assets/images/products/product-nav-prev.jpg" alt="Product" width={110} height={110} />
          <span className="product-name">Soft Sound Maker</span>
        </span>
      </li>
      <li className="product-nav-next">
        <a href="#">
          <i className="w-icon-angle-right" />
        </a>
        <span className="product-nav-popup">
          <img src="assets/images/products/product-nav-next.jpg" alt="Product" width={110} height={110} />
          <span className="product-name">Fabulous Sound Speaker</span>
        </span>
      </li>
    </ul>
  </nav>
  {/* End of Breadcrumb */}
  {/* Start of Page Content */}
  <div className="page-content">
    <div className="container">
      <div className="row gutter-lg">
        <div className="main-content">
          <div className="product product-single row">
            <div className="col-md-6 mb-4 mb-md-8">
              <div className="product-gallery product-gallery-sticky">
                <div className="swiper-container product-single-swiper swiper-theme nav-inner" data-swiper-options="{
                                      'navigation': {
                                          'nextEl': '.swiper-button-next',
                                          'prevEl': '.swiper-button-prev'
                                      }
                                  }">
                  <div className="swiper-wrapper row cols-1 gutter-no">
                    <div className="swiper-slide">
                      <figure className="product-image">
                      {Data && Data.galleries && Data.galleries[0] ? (
                        <img src={"http://localhost:3000/file/"+Data.galleries[0].url_photo} data-zoom-image="assets/images/products/variable/1-800x900.jpg" alt="Electronics Black Wrist Watch" width={800} height={900} />
                        ) : (
                          <p>Loading...</p>
                        )}
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="product-image">
                        <img src="assets/images/products/variable/2-800x900.jpg" data-zoom-image="assets/images/products/variable/2-800x900.jpg" alt="Electronics Black Wrist Watch" width={488} height={549} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="product-image">
                        <img src="assets/images/products/variable/3-800x900.jpg" data-zoom-image="assets/images/products/variable/3-800x900.jpg" alt="Electronics Black Wrist Watch" width={800} height={900} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="product-image">
                        <img src="assets/images/products/variable/4-800x900.jpg" data-zoom-image="assets/images/products/variable/4-800x900.jpg" alt="Electronics Black Wrist Watch" width={800} height={900} />
                      </figure>
                    </div>
                  </div>
                  <button className="swiper-button-next" />
                  <button className="swiper-button-prev" />
                  <a href="#" className="product-gallery-btn product-image-full"><i className="w-icon-zoom" /></a>
                </div>
                <div className="product-thumbs-wrap swiper-container" data-swiper-options="{
                                      'navigation': {
                                          'nextEl': '.swiper-button-next',
                                          'prevEl': '.swiper-button-prev'
                                      }
                                  }">
                  <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                    <div className="product-thumb swiper-slide">
                      <img src="assets/images/products/variable/1-800x900.jpg" alt="Product Thumb" width={800} height={900} />
                    </div>
                    <div className="product-thumb swiper-slide">
                      <img src="assets/images/products/variable/2-800x900.jpg" alt="Product Thumb" width={800} height={900} />
                    </div>
                    <div className="product-thumb swiper-slide">
                      <img src="assets/images/products/variable/3-800x900.jpg" alt="Product Thumb" width={800} height={900} />
                    </div>
                    <div className="product-thumb swiper-slide">
                      <img src="assets/images/products/variable/4-800x900.jpg" alt="Product Thumb" width={800} height={900} />
                    </div>
                  </div>
                  <button className="swiper-button-next" />
                  <button className="swiper-button-prev" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-6 mb-md-8">
              <div className="product-details" data-sticky-options="{'minWidth': 767}">
                <h1 className="product-title">{Data.name}</h1>
                <div className="product-bm-wrapper">
                  <figure className="brand">
                    <img src="assets/images/products/brand/brand-2.jpg" alt="Brand" width={105} height={48} />
                  </figure>
                  <div className="product-meta">
                    <div className="product-categories">
                      Category:
                      <span className="product-category"><a href="#"></a></span>
                    </div>
                    <div className="product-sku">
                      SKU: <span>{Data.ref}</span>
                    </div>
                  </div>
                </div>
                <hr className="product-divider" />
                <div className="product-price">
                  <ins className="new-price">{Data.price} TND</ins>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{width: '80%'}} />
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  <a href="#product-tab-reviews" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-short-desc">
                  <ul className="list-type-check list-style-none">
                    <li>{Data.description}</li>
                   
                  </ul>
                </div>
                <hr className="product-divider" />
                
               
                <div className="product-variation-price">
                  <span />
                </div>
                <div className="fix-bottom product-sticky-content sticky-content">
                  <div className="product-form container">
                    <div className="product-qty-form">
                      <div className="input-group">
                        <input className="quantity form-control" type="number" min={1} max={10000000} value={counter} />
                        <button onClick={increment} className="quantity-plus w-icon-plus" />
                        <button onClick={decrement} className="quantity-minus w-icon-minus" />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-cart" onClick={(e)=> AddToCart(Data)}>
                      <i className="w-icon-cart" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="social-links-wrapper">
                  <div className="social-links">
                    <div className="social-icons social-no-color border-thin">
                      <a href="#" className="social-icon social-facebook w-icon-facebook" />
                      <a href="#" className="social-icon social-twitter w-icon-twitter" />
                      <a href="#" className="social-icon social-pinterest fab fa-pinterest-p" />
                      <a href="#" className="social-icon social-whatsapp fab fa-whatsapp" />
                      <a href="#" className="social-icon social-youtube fab fa-linkedin-in" />
                    </div>
                  </div>
                  <span className="divider d-xs-show" />
                  <div className="product-link-wrapper d-flex">
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"><span /></a>
                    <a href="#" className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <section className="vendor-product-section">
            <div className="title-link-wrapper mb-4">
              <h4 className="title text-left">More Products From This Vendor</h4>
              <a href="#" className="btn btn-dark btn-link btn-slide-right btn-icon-right">More
                Products<i className="w-icon-long-arrow-right" /></a>
            </div>
            <div className="swiper-container swiper-theme" data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }">
              <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/1-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/products/default/1-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat"><a href="shop-banner-sidebar.html">Accessories</a>
                    </div>
                    <h4 className="product-name"><a href="product-default.html">Sticky Pencil</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">$20.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat"><a href="shop-banner-sidebar.html">Electronics</a>
                    </div>
                    <h4 className="product-name"><a href="product-default.html">Mini
                        Multi-Functional Cooker</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">
                        <ins className="new-price">$480.00</ins><del className="old-price">$534.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/3.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat"><a href="shop-banner-sidebar.html">Sports</a></div>
                    <h4 className="product-name"><a href="product-default.html">Skate Pan</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">
                        <ins className="new-price">$278.00</ins><del className="old-price">$310.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/4-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/products/default/4-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat"><a href="shop-banner-sidebar.html">Accessories</a>
                    </div>
                    <h4 className="product-name"><a href="product-default.html">Clip Attachment</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">$40.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="related-product-section">
            <div className="title-link-wrapper mb-4">
              <h4 className="title">Related Products</h4>
              <a href="#" className="btn btn-dark btn-link btn-slide-right btn-icon-right">More
                Products<i className="w-icon-long-arrow-right" /></a>
            </div>
            <div className="swiper-container swiper-theme" data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }">
              <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/5.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Drone</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">$632.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/6.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Official Camera</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">
                        <ins className="new-price">$263.00</ins><del className="old-price">$300.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/7-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/products/default/7-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Phone Charge Pad</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(8 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">$23.00</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/products/default/8.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                        View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Fashionalble
                        Pencil</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(9 reviews)</a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">$50.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* End of Main Content */}
        <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
          <div className="sidebar-overlay" />
          <a className="sidebar-close" href="#"><i className="close-icon" /></a>
          <a href="#" className="sidebar-toggle d-flex d-lg-none"><i className="fas fa-chevron-left" /></a>
          <div className="sidebar-content scrollable">
            <div className="sticky-sidebar">
              <div className="widget widget-icon-box mb-6">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-truck" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
                    <p>For all orders over $99</p>
                  </div>
                </div>
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-bag" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Secure Payment</h4>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-money" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Money Back Guarantee</h4>
                    <p>Any back within 30 days</p>
                  </div>
                </div>
              </div>
              {/* End of Widget Icon Box */}
              <div className="widget widget-banner mb-9">
                <div className="banner banner-fixed br-sm">
                  <figure>
                    <img src="assets/images/shop/banner3.jpg" alt="Banner" width={266} height={220} style={{backgroundColor: '#1D2D44'}} />
                  </figure>
                  <div className="banner-content">
                    <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                      40<sup className="font-weight-bold">%</sup><sub className="font-weight-bold text-uppercase ls-25">Off</sub>
                    </div>
                    <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                      Ultimate Sale</h4>
                  </div>
                </div>
              </div>
              {/* End of Widget Banner */}
              <div className="widget widget-products">
                <div className="title-link-wrapper mb-2">
                  <h4 className="title title-link font-weight-bold">More Products</h4>
                </div>
                <div className="swiper nav-top">
                  <div className="swiper-container swiper-theme nav-top" data-swiper-options="{
                                          'slidesPerView': 1,
                                          'spaceBetween': 20,
                                          'navigation': {
                                              'prevEl': '.swiper-button-prev',
                                              'nextEl': '.swiper-button-next'
                                          }
                                      }">
                    <div className="swiper-wrapper">
                      <div className="widget-col swiper-slide">
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/13.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">Smart Watch</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '100%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$80.00 - $90.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/14.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">Sky Medical Facility</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '80%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$58.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/15.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">Black Stunt Motor</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '60%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$374.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-col swiper-slide">
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/16.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">Skate Pan</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '100%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$278.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/17.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">Modern Cooker</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '80%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$324.00</div>
                          </div>
                        </div>
                        <div className="product product-widget">
                          <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/shop/18.jpg" alt="Product" width={100} height={113} />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="#">CT Machine</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{width: '100%'}} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">$236.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="swiper-button-next" />
                    <button className="swiper-button-prev" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* End of Sidebar */}
      </div>
    </div>
  </div>
  {/* End of Page Content */}
</main>

            
        </>
    )
}

export default SingleProduct
