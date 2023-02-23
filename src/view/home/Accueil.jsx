import React from 'react'

const Accueil = () => {
  return (
    <>
     <main className="main">
      <div className="intro-section">
        <div className="swiper-container swiper-theme nav-inner pg-inner animation-slider pg-xxl-hide pg-show nav-xxl-show nav-hide" data-swiper-options="{
              'slidesPerView': 1,
              'autoplay': {
                  'delay': 4000,
                  'disableOnInteraction': false
              }
          }">
          <div className="swiper-wrapper row gutter-no cols-1">
            <div className="swiper-slide banner banner-fixed intro-slide intro-slide1" style={{backgroundImage: 'url(assets/images/demos/demo2/slides/slide-1.jpg)', backgroundColor: '#f1f0f0'}}>
              <div className="container">
                <figure className="slide-image floating-item slide-animate" data-animation-options="{
                              'name': 'fadeInDownShorter', 'duration': '1s'
                          }" data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}" data-child-depth="0.2">
                  <img src="assets/images/demos/demo2/slides/ski.png" alt="Ski" width={729} height={570} />
                </figure>
                <div className="banner-content text-right y-50 ml-auto">
                  <h5 className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animate" data-animation-options="{
                                  'name': 'fadeInUpShorter', 'duration': '1s'
                              }">Deals And Promotions</h5>
                  <h3 className="banner-title ls-25 mb-6 slide-animate" data-animation-options="{
                                  'name': 'fadeInUpShorter', 'duration': '1s'
                              }">Fashion <span className="text-primary">Skiwears</span> for the ardent Sports
                    devotees
                  </h3>
                  <a href="shop-banner-sidebar.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate" data-animation-options="{
                                  'name': 'fadeInUpShorter', 'duration': '1s'
                              }">
                    Shop Now<i className="w-icon-long-arrow-right" /></a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide1 */}
            <div className="swiper-slide banner banner-fixed intro-slide intro-slide2" style={{backgroundImage: 'url(assets/images/demos/demo2/slides/slide-2.jpg)', backgroundColor: '#d9ddd9'}}>
              <div className="container">
                <figure className="slide-image floating-item slide-animate" data-animation-options="{
                              'name': 'fadeInUpShorter', 'duration': '1s'
                          }" data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}" data-child-depth="0.2">
                  <img src="assets/images/demos/demo2/slides/woman.png" alt="Ski" width={865} height={732} />
                </figure>
                <div className="banner-content y-50">
                  <h5 className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.5s'
                              }">News And Inspiration</h5>
                  <h3 className="banner-title ls-25 mb-2 text-uppercase lh-1 slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.7s'
                              }">Natural Sound</h3>
                  <div className="banner-price-info font-weight-bold text-dark ls-25 slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.9s'
                              }">Sale up to
                    <span className="text-primary font-weight-bolder text-uppercase ls-normal">30%
                      Off</span></div>
                  <p className="font-weight-normal text-default ls-25 slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.1s'
                              }">Free returns extended to 30 days after delivery</p>
                  <a href="shop-banner-sidebar.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.3s'
                              }">
                    Shop Now<i className="w-icon-long-arrow-right" /></a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide2 */}
            <div className="swiper-slide banner banner-fixed intro-slide intro-slide3" style={{backgroundImage: 'url(assets/images/demos/demo2/slides/slide-3.jpg)', backgroundColor: '#d0cfcb'}}>
              <div className="container">
                <figure className="slide-image floating-item slide-animate" data-animation-options="{
                              'name': 'fadeInRightShorter', 'duration': '1s'
                          }" data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}" data-child-depth="0.2">
                  <img src="assets/images/demos/demo2/slides/man.png" alt="Ski" width={527} height={481} />
                </figure>
                <div className="banner-content y-50">
                  <h5 className="banner-subtitle text-uppercase font-weight-bold slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s'
                              }">Top Monthly Seller</h5>
                  <h4 className="banner-title ls-25 slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s'
                              }">Sumsung 52 Inches Full HD <span className="text-primary">Smart LED</span> TV</h4>
                  <p className="font-weight-normal text-dark slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s'
                              }">Only until the end of this week.</p>
                  <a href="shop-banner-sidebar.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter', 'duration': '1s'
                              }">Shop Now<i className="w-icon-long-arrow-right" /></a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide3 */}
          </div>
          <div className="swiper-pagination" />
          <button className="swiper-button-next" />
          <button className="swiper-button-prev" />
        </div>
      </div>
      {/* End of .intro-section */}
      <div className="container">
        <div className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm mt-6 mb-10" data-swiper-options="{
              'loop': true,
              'slidesPerView': 1,
              'autoplay': {
                  'delay': 4000,
                  'disableOnInteraction': false
              },
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }">
          <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
            <div className="swiper-slide icon-box icon-box-side text-dark">
              <span className="icon-box-icon icon-shipping">
                <i className="w-icon-truck" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
                <p className="text-default">For all orders over $99</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side text-dark">
              <span className="icon-box-icon icon-payment">
                <i className="w-icon-bag" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">Secure Payment</h4>
                <p className="text-default">We ensure secure payment</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side text-dark icon-box-money">
              <span className="icon-box-icon icon-money">
                <i className="w-icon-money" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">Money Back Guarantee</h4>
                <p className="text-default">Any back within 30 days</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side text-dark icon-box-chat">
              <span className="icon-box-icon icon-chat">
                <i className="w-icon-chat" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">Customer Support</h4>
                <p className="text-default">Call or email us 24/7</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Iocn Box Wrapper */}
        <div className="title-link-wrapper mb-3 appear-animate">
          <h2 className="title title-deals mb-1">Deals Of The Day</h2>
          <div className="product-countdown-container font-size-sm text-dark align-items-center">
            <label>Offer Ends in: </label>
            <div className="product-countdown countdown-compact ml-1 font-weight-bold" data-until="+10d" data-relative="true" data-compact="true">10days,00:00:00</div>
          </div>
          <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">More Products<i className="w-icon-long-arrow-right" /></a>
        </div>
        {/* End of .title-link-wrapper */}
        <div className="swiper-container swiper-theme product-deals-wrapper appear-animate mb-7" data-swiper-options="{
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
                      'slidesPerView': 5
                  }
              }
          }">
          <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-2">
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-1-1.jpg" alt="Product" width={300} height={338} />
                    <img src="assets/images/demos/demo2/products/1-1-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                    <label className="product-label label-discount">-35%</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">White Valise</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$40.00</ins><span className="old-price">$49.89</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-3-1.jpg" alt="Product" width={300} height={338} />
                    <img src="assets/images/demos/demo2/products/1-3-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Brown Leather Shoes</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '80%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$36.26 - $59.75</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-4.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Portable Flashlight</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$10.00</ins><del className="old-price">$11.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-5.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">USB Charger</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$17.00</ins><del className="old-price">$20.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        {/* End of Product Deals Warpper */}
        <div className="row category-wrapper electronics-cosmetics appear-animate mb-7">
          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img src="assets/images/demos/demo2/categories/1-1.jpg" alt="Category Banner" width={640} height={200} style={{backgroundColor: '#25282D'}} />
              </figure>
              <div className="banner-content y-50">
                <h3 className="banner-title text-white ls-25 mb-0">Electronics</h3>
                <div className="banner-price-info text-white font-weight-bold text-uppercase mb-1">Starting
                  At
                  <strong className="text-secondary">$125.00</strong>
                </div>
                <hr className="banner-divider bg-white" />
                <a href="shop-banner-sidebar.html" className="btn btn-white btn-link btn-underline btn-icon-right">
                  Shop Now<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img src="assets/images/demos/demo2/categories/1-2.jpg" alt="Category Banner" width={640} height={200} style={{backgroundColor: '#eeedec'}} />
              </figure>
              <div className="banner-content y-50">
                <h3 className="banner-title ls-25 text-capitalize mb-0">Cosmetics Sets</h3>
                <div className="banner-price-info font-weight-bold text-uppercase mb-1">Sale Up To
                  <strong className="text-secondary">30% Off</strong>
                </div>
                <hr className="banner-divider bg-dark" />
                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                  Shop Now<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* End of Category Wrapper */}
        <h2 className="title mb-5 appear-animate">Top Weekly Vendors</h2>
        <div className="swiper-container swiper-theme vendor-wrapper mb-4 appear-animate" data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 1,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }">
          <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
            <div className="swiper-slide vendor-widget vendor-widget-1">
              <div className="vendor-products grid-type">
                <div className="vendor-product lg-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-1.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-2.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-3.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="vendor-details">
                <figure className="vendor-logo">
                  <a href="vendor-dokan-store.html">
                    <img src="assets/images/demos/demo2/vendor-logo/1.jpg" alt="Vendor Logo" width={70} height={70} />
                  </a>
                </figure>
                <div className="vendor-personal">
                  <h4 className="vendor-name">
                    <a href="vendor-dokan-store.html">Vendor 1</a>
                  </h4>
                  <span className="vendor-product-count">(27 Products)</span>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Vendor Widget */}
            <div className="swiper-slide vendor-widget vendor-widget-1">
              <div className="vendor-products grid-type">
                <div className="vendor-product lg-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-4.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-5.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-6.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="vendor-details">
                <figure className="vendor-logo">
                  <a href="vendor-dokan-store.html">
                    <img src="assets/images/demos/demo2/vendor-logo/2.jpg" alt="Vendor Logo" width={70} height={70} />
                  </a>
                </figure>
                <div className="vendor-personal">
                  <h4 className="vendor-name">
                    <a href="vendor-dokan-store.html">Vendor 2</a>
                  </h4>
                  <span className="vendor-product-count">(20 Products)</span>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Vendor Widget */}
            <div className="swiper-slide vendor-widget vendor-widget-1">
              <div className="vendor-products grid-type">
                <div className="vendor-product lg-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-7.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-8.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-9.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="vendor-details">
                <figure className="vendor-logo">
                  <a href="vendor-dokan-store.html">
                    <img src="assets/images/demos/demo2/vendor-logo/3.jpg" alt="Vendor Logo" width={70} height={70} />
                  </a>
                </figure>
                <div className="vendor-personal">
                  <h4 className="vendor-name">
                    <a href="vendor-dokan-store.html">Vendor 3</a>
                  </h4>
                  <span className="vendor-product-count">(16 Products)</span>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Vendor Widget */}
            <div className="swiper-slide vendor-widget vendor-widget-1">
              <div className="vendor-products grid-type">
                <div className="vendor-product lg-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-10.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-11.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
                <div className="vendor-product sm-item">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/2-12.jpg" alt="Vendor Product" width={300} height={338} />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="vendor-details">
                <figure className="vendor-logo">
                  <a href="vendor-dokan-store.html">
                    <img src="assets/images/demos/demo2/vendor-logo/4.jpg" alt="Vendor Logo" width={70} height={70} />
                  </a>
                </figure>
                <div className="vendor-personal">
                  <h4 className="vendor-name">
                    <a href="vendor-dokan-store.html">Vendor 4</a>
                  </h4>
                  <span className="vendor-product-count">(23 Products)</span>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Vendor Widget */}
          </div>
          <div className="swiper-pagination" />
        </div>
        {/* End of Vendor Wrapper */}
        <div className="tab tab-with-title tab-nav-boxed appear-animate">
          <h2 className="title">Consumer Electronics</h2>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#tab-1">New Arrivals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab-2">Best Seller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab-3">Most Popular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab-4">View All</a>
            </li>
          </ul>
        </div>
        {/* End of Tab Title*/}
        <div className="tab-content appear-animate">
          <div className="tab-pane active" id="tab-1">
            <div className="row grid-type products">
              <div className="product-wrap lg-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-1-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-1-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-label-group">
                      <label className="product-label label-discount">-15%</label>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Magenetic Charge Box</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$79.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-2-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                    <div className="product-label-group">
                      <label className="product-label label-new">New</label>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Gold Watch</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$164.47</ins><del className="old-price">$183.47</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-3-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-3-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '60%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$89.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-4-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-4-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Multi-colorful Music
                        Player</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$24.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-5-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-5-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                        Machine</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$39.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-6-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-6-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Mini Wireless
                        Earphone</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$3.66</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-7-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-7-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Hight Quality Screen
                        Tablet</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$173.84</ins>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row grid-type products">
              <div className="product-wrap lg-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-2-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Gold Watch</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$164.47</ins><del className="old-price">$183.47</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-5-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-5-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                        Machine</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$39.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-1-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-1-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Magenetic Charge Box</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$79.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-4-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-4-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Multi-colorful Music
                        Player</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$24.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-7-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-7-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Hight Quality Screen
                        Tablet</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$173.84</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-6-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-6-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Mini Wireless
                        Earphone</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$3.66</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-3-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-3-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '60%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$89.00</ins>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row grid-type products">
              <div className="product-wrap lg-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-5-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-5-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                        Machine</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$39.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-4-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-4-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Multi-colorful Music
                        Player</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$24.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-1-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-1-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Magenetic Charge Box</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$79.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-3-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-3-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '60%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$89.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-7-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-7-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Hight Quality Screen
                        Tablet</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$173.84</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-6-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-6-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Mini Wireless
                        Earphone</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$3.66</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-2-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Gold Watch</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$164.47</ins><del className="old-price">$183.47</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row grid-type products">
              <div className="product-wrap lg-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-3-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-3-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '60%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$89.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-2-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Gold Watch</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$164.47</ins><del className="old-price">$183.47</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-6-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-6-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Mini Wireless
                        Earphone</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$3.66</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-5-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-5-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                        Machine</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$39.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-4-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-4-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Multi-colorful Music
                        Player</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$24.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-7-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-7-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Hight Quality Screen
                        Tablet</a></h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$173.84</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap sm-item">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/demos/demo2/products/3-1-1.jpg" alt="Product" width={300} height={338} />
                      <img src="assets/images/demos/demo2/products/3-1-2.jpg" alt="Product" width={300} height={338} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                      <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                      <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                      <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name"><a href="product-default.html">Magenetic Charge Box</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$79.00</ins>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Tab Content */}
        <div className="sale-banner banner br-sm appear-animate">
          <div className="banner-content">
            <h4 className="content-left banner-subtitle text-uppercase mb-8 mb-md-0 mr-0 mr-md-4 text-secondary ls-25">
              <span className="text-dark font-weight-bold lh-1 ls-normal">Up
                <br />To</span>70% Sale!</h4>
            <div className="content-right">
              <h3 className="banner-title text-uppercase font-weight-normal mb-4 mb-md-0 ls-25 text-white">
                <span>Pay Only For
                  <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                  Pay Only For
                  <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                  Pay Only For
                  <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                </span>
              </h3>
              <a href="#" className="btn btn-white btn-rounded">Shop Now
                <i className="w-icon-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        {/* End of Sale Banner */}
        <div className="banner-product-wrapper appear-animate row mb-8">
          <div className="col-xl-5col col-md-4 mb-4">
            <div className="categories h-100">
              <h2 className="title text-left">Clothes &amp; Fashion Apparel</h2>
              <ul className="list-style-none mb-4">
                <li><a href="shop-banner-sidebar.html">Accessories</a></li>
                <li><a href="shop-banner-sidebar.html">Bodyclothes</a></li>
                <li><a href="shop-banner-sidebar.html">Dress &amp; Skirts</a></li>
                <li><a href="shop-banner-sidebar.html">Jeans</a></li>
                <li><a href="shop-banner-sidebar.html">Jumpers</a></li>
                <li><a href="shop-banner-sidebar.html">Knitwears</a></li>
                <li><a href="shop-banner-sidebar.html">Lounge &amp; Underwear</a></li>
                <li><a href="shop-banner-sidebar.html">Shoes</a></li>
                <li><a href="shop-banner-sidebar.html">T-shirts</a></li>
              </ul>
              <a href="shop-boxed-banner.html" className="btn btn-dark btn-link btn-underline btn-icon-right font-weight-bolder text-capitalize ls-50">
                Browse All<i className="w-icon-long-arrow-right" /></a>
            </div>
          </div>
          <div className="col-xl-5col4 col-md-8 mb-4">
            <div className="banner br-sm mb-4" style={{backgroundImage: 'url(assets/images/demos/demo2/banners/1.jpg)', backgroundColor: '#EEF0EF'}}>
              <div className="banner-content d-block d-lg-flex align-items-center">
                <div className="content-left mr-auto">
                  <h5 className="banner-subtitle font-weight-normal text-capitalize texyt-dark ls-25 mb-0">
                    Flash Sale <strong className="text-uppercase text-secondary">50% Off</strong>
                  </h5>
                  <h3 className="banner-title text-capitalize ls-25">Fashion Figure Skate Sale</h3>
                  <p className="text-dark">Only until the end of this week.</p>
                </div>
                <a href="shop-banner-sidebar.html" className="content-left btn btn-dark btn btn-outline 
                              btn-rounded btn-icon-right mt-4 mt-lg-0">Shop Now<i className="w-icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* End of Banner */}
            <div className="swiper-container swiper-theme" data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 3
                          },
                          '768': {
                              'slidesPerView': 2
                          },
                          '992': {
                              'slidesPerView': 3
                          },
                          '1200': {
                              'slidesPerView': 4
                          }
                      }
                  }">
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3">
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/4-1-1.jpg" alt="Product" width={300} height={338} />
                        <img src="assets/images/demos/demo2/products/4-1-2.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">White Schoolbag</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '100%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$56.48</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/4-2-1.jpg" alt="Product" width={300} height={338} />
                        <img src="assets/images/demos/demo2/products/4-2-2.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Women's
                          Comforter</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '80%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$35.99</ins><del className="old-price">$37.89</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/4-3.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-new">New</label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Blue Traingin
                          Shoes</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '60%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$58.99</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/4-4.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Beyond OTP Shirt</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '100%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$26.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
            {/* End of Swiper */}
          </div>
        </div>
        {/* End of Banner Product Wrapper */}
        <div className="row category-wrapper sports-fashion mb-8 appear-animate">
          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img src="assets/images/demos/demo2/categories/2-1.jpg" alt="Category Banner" width={640} height={200} style={{backgroundColor: '#EAEAEA'}} />
              </figure>
              <div className="banner-content y-50 text-right">
                <h5 className="banner-subtitle text-uppercase font-weight-bold">New Arrivals</h5>
                <h3 className="banner-title text-capitalize ls-25">Sport Outfits</h3>
                <hr className="banner-divider bg-dark ml-auto mb-3" />
                <div className="banner-price-info text-dark">
                  From <span className="text-secondary font-weight-bolder ls-25">$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img src="assets/images/demos/demo2/categories/2-2.jpg" alt="Category Banner" width={640} height={200} style={{backgroundColor: '#181411'}} />
              </figure>
              <div className="banner-content y-50">
                <h5 className="banner-subtitle text-uppercase font-weight-normal text-white">SmartWatches
                </h5>
                <h3 className="banner-title text-white ls-25">Sale up to 20% Off</h3>
                <hr className="banner-divider bg-white" />
                <div className="banner-price-info text-white">
                  Starting at <span className="text-secondary font-weight-bolder ls-25">$270.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Category Wrapper */}
        <div className="banner-product-wrapper appear-animate row mb-8">
          <div className="col-xl-5col col-md-4 mb-4">
            <div className="categories h-100">
              <h2 className="title text-left">Computers &amp; Technologies</h2>
              <ul className="list-style-none mb-4">
                <li><a href="shop-banner-sidebar.html">Desktop PC</a></li>
                <li><a href="shop-banner-sidebar.html">Headphones</a></li>
                <li><a href="shop-banner-sidebar.html">Laptops</a></li>
                <li><a href="shop-banner-sidebar.html">Monitors</a></li>
                <li><a href="shop-banner-sidebar.html">Smartphones</a></li>
                <li><a href="shop-banner-sidebar.html">Speakers</a></li>
                <li><a href="shop-banner-sidebar.html">Storage &amp; Memory</a></li>
                <li><a href="shop-banner-sidebar.html">Tablets</a></li>
                <li><a href="shop-banner-sidebar.html">Watches</a></li>
              </ul>
              <a href="shop-boxed-banner.html" className="btn btn-dark btn-link btn-underline btn-icon-right font-weight-bolder text-capitalize ls-50">
                Browse All<i className="w-icon-long-arrow-right" /></a>
            </div>
          </div>
          <div className="col-xl-5col4 col-md-8 mb-4">
            <div className="banner br-sm mb-4 pt-9" style={{backgroundImage: 'url(assets/images/demos/demo2/banners/2.jpg)', backgroundColor: '#E0E1E5'}}>
              <div className="banner-content">
                <h5 className="banner-subtitle font-weight-normal text-capitalize texyt-dark ls-25 mb-0">
                  From Onlin Store
                </h5>
                <h3 className="banner-title text-capitalize ls-25 mb-4">
                  Xbox One's <span className="text-primary">Limited</span> Edition
                </h3>
                <a href="shop-boxed-banner.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                  View Detail<i className="w-icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* End of Banner */}
            <div className="swiper-container swiper-theme" data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 3
                          },
                          '768': {
                              'slidesPerView': 2
                          },
                          '992': {
                              'slidesPerView': 3
                          },
                          '1200': {
                              'slidesPerView': 4
                          }
                      }
                  }">
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3">
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/5-1-1.jpg" alt="Product" width={300} height={338} />
                        <img src="assets/images/demos/demo2/products/5-1-2.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Bluetooth Music
                          Recorder</a></h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '100%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$28.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/5-2.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Magenetic Charge
                          Box</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '80%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$79.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/5-3-1.jpg" alt="Product" width={300} height={338} />
                        <img src="assets/images/demos/demo2/products/5-3-2.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-new">New</label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Soft Sound
                          Marker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '100%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$27.00</ins><del className="old-price">$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src="assets/images/demos/demo2/products/5-4.jpg" alt="Product" width={300} height={338} />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name"><a href="product-default.html">Men's Black
                          Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{width: '100%'}} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$50.00</ins><del className="old-price">$65.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
            {/* End of Swiper */}
          </div>
        </div>
        {/* End of Banner Product Wrapper */}
        <div className="banner br-sm banner-electronics appear-animate" style={{backgroundImage: 'url(assets/images/demos/demo2/banners/3.jpg)', backgroundColor: '#333'}}>
          <div className="banner-content mr-10 pr-1">
            <div className="banner-price-info text-white font-weight-normal ls-25">
              Save Big on <span className="font-weight-bolder text-secondary text-uppercase">50% Off</span>
            </div>
            <h3 className="banner-title text-white mb-0 ls-25">Cameras and Leans Sale</h3>
          </div>
          <a href="shop-banner-sidebar.html" className="btn btn-white btn-rounded btn-icon-right mt-1">Shop Now<i className="w-icon-long-arrow-right" /></a>
        </div>
        {/* End of Banner */}
        <div className="title-link-wrapper mb-2 appear-animate">
          <h2 className="title">Top Rated Products</h2>
          <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">More Products<i className="w-icon-long-arrow-right" /></a>
        </div>
        <div className="swiper-container swiper-theme top-products mb-6 appear-animate" data-swiper-options="{
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
                      'slidesPerView': 5
                  }
              }
          }">
          <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-sm-3 cols-2">
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/4-1-1.jpg" alt="Product" width={300} height={338} />
                    <img src="assets/images/demos/demo2/products/4-1-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-discount">-15%</label>
                  </div>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-countdown-container">
                    <div className="product-countdown countdown-compact" data-until="2021, 9, 9" data-format="DHMS" data-compact="false" data-labels-short="Days, Hours, Mins, Secs">
                      00:00:00:00</div>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">White Schoolbag</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$56.48</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-1-1.jpg" alt="Product" width={300} height={338} />
                    <img src="assets/images/demos/demo2/products/1-1-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Product" width={300} height={338} />
                    <img src="assets/images/demos/demo2/products/3-2-2.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Gold Watch</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '80%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$164.47</ins><del className="old-price">$183.47</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/1-4.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Portable Flashlight</a></h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$10.00</ins><del className="old-price">$11.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/demos/demo2/products/6-1.jpg" alt="Product" width={300} height={338} />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name"><a href="product-default.html">Fashionable Original
                      Coat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$54.00 - $59.88</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        {/* End of Swiper Container */}
        <h2 className="title text-left text-capitalize mb-5 appear-animate">Your Recent Views</h2>
        <div className="swiper-container swiper-theme appear-animate viewed-products mb-7" data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 5
                  },
                  '992': {
                      'slidesPerView': 6
                  },
                  '1200': {
                      'slidesPerView': 8
                  }
              }
          }">
          <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/3-5-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Charge &amp; Alarm Machine</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/4-2-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Women's Comforter</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/3-2-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Gold Watch</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/3-6-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Mini Wireless Earphone</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/4-1-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">White Schoolbag</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/3-7-1.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">High Quality Screen Tablet</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/4-4.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Beyond OTP Shirt</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
            <div className="swiper-slide product-wrap">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                    <img src="assets/images/demos/demo2/products/4-3.jpg" alt="Category image" width={300} height={338} style={{backgroundColor: '#fff'}} />
                  </a>
                </figure>
                <h4 className="product-name">
                  <a href="product-default.html">Blue Training Shoes</a>
                </h4>
              </div>
            </div>
            {/* End of Product Wrap */}
          </div>
          <div className="swiper-pagination" />
        </div>
        {/* End of Swiper Container */}
        <h2 className="title text-left mb-5 appear-animate">Our Clients</h2>
        <div className="swiper-container swiper-theme brands-wrapper br-sm mb-10 appear-animate" data-swiper-options="{
              'loop': true,
              'spaceBetween': 20,
              'slidesPerView': 2,
              'autoplay': {
                  'delay': 4000,
                  'disableOnInteraction': false
              },
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 4
                  },
                  '992': {
                      'slidesPerView': 6
                  },
                  '1200': {
                      'slidesPerView': 8
                  }
              }
          }">
          <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/1.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/2.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/3.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/4.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/5.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/6.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/7.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src="assets/images/demos/demo2/brands/8.png" alt="Brand" width={290} height={100} />
              </figure>
            </div>
          </div>
        </div>
        {/* End of Brands Wrapper */}
        <h2 className="title text-left mb-5 pt-1 appear-animate">From Our Blog</h2>
        <div className="swiper-container swiper-theme post-wrapper mb-10 mb-lg-5 appear-animate" data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 1,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '992': {
                      'slidesPerView': 4
                  }
              }
          }">
          <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
            <div className="swiper-slide post">
              <figure className="post-media br-sm">
                <a href="post-single.html">
                  <img src="assets/images/demos/demo2/blog/1.jpg" alt="Post" width={620} height={398} style={{backgroundColor: '#898078'}} />
                </a>
                <div className="post-calendar">
                  <span className="post-day">05</span>
                  <span className="post-month">Mar</span>
                </div>
              </figure>
              <div className="post-details">
                <h4 className="post-title"><a href="post-single.html">We want to be different, and Fashion
                    gives
                    me that outlet to do</a></h4>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet conse ctetur adip.</p>
                </div>
                <a href="post-single.html" className="btn btn-link btn-dark btn-underline">Read More<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
            <div className="swiper-slide post">
              <figure className="post-media br-sm">
                <a href="post-single.html">
                  <img src="assets/images/demos/demo2/blog/2.jpg" alt="Post" width={620} height={398} style={{backgroundColor: '#EDEFEE'}} />
                </a>
                <div className="post-calendar">
                  <span className="post-day">14</span>
                  <span className="post-month">Mar</span>
                </div>
              </figure>
              <div className="post-details">
                <h4 className="post-title"><a href="post-single.html">Explore Fashion For Women In</a></h4>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet conse ctetur adip
                    isic ing elit, sed do eiusmod.</p>
                </div>
                <a href="post-single.html" className="btn btn-link btn-dark btn-underline">Read More<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
            <div className="swiper-slide post">
              <figure className="post-media br-sm">
                <a href="post-single.html">
                  <img src="assets/images/demos/demo2/blog/3.jpg" alt="Post" width={620} height={398} style={{backgroundColor: '#A1A09E'}} />
                </a>
                <div className="post-calendar">
                  <span className="post-day">25</span>
                  <span className="post-month">Mar</span>
                </div>
              </figure>
              <div className="post-details">
                <h4 className="post-title"><a href="post-single.html">Fashion tells about who you are from
                    external point of view</a></h4>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet conse ctetur adip.</p>
                </div>
                <a href="post-single.html" className="btn btn-link btn-dark btn-underline">Read More<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
            <div className="swiper-slide post">
              <figure className="post-media br-sm">
                <a href="post-single.html">
                  <img src="assets/images/demos/demo2/blog/4.jpg" alt="Post" width={620} height={398} style={{backgroundColor: '#EDF1F2'}} />
                </a>
                <div className="post-calendar">
                  <span className="post-day">16</span>
                  <span className="post-month">Mar</span>
                </div>
              </figure>
              <div className="post-details">
                <h4 className="post-title"><a href="post-single.html">Just found the ultimate denim
                    dresses</a>
                </h4>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet conse ctetur adip
                    isic ing elit, sed do eiusmod.</p>
                </div>
                <a href="post-single.html" className="btn btn-link btn-dark btn-underline">Read More<i className="w-icon-long-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
      {/* End of Container */}
    </main>
      
    </>
  )
}

export default Accueil
