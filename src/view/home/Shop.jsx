import React from 'react'
import { Link, useNavigate , useParams } from 'react-router-dom';
import ProductService from '../../service/ProductService';
import  { useEffect , useState } from 'react'






const Shop = () => {
  const navigate = useNavigate();


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
  
      cart.push(prod);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
      navigate("/cart")
    } catch (error) {
      console.error(error);
    }
  };
  
  

  

  const test=()=>{
    console.log("test")
  }
  
  
  const { categoryName } = useParams();
  const {subcategoryName}=useParams();
  const [Products, setProduct] = useState();
  const getAllP=()=>{
    ProductService.getSubcategoriesByCategoryAndSubcategory(categoryName,subcategoryName) 
    .then((res)=>{
        console.log(res)
        console.log("cat",categoryName)
        console.log("sub",subcategoryName)
        console.log("res",res.data.data)
        setProduct(res.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
};
useEffect(() => {
  getAllP();
}, [categoryName, subcategoryName]);


  return (
    <>
   <main className="main">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav">
    <div className="container">
      <ul className="breadcrumb bb-no">
        <li><a href="demo1.html">Home</a></li>
        <li><a href="shop-banner-sidebar.html">Shop</a></li>
        <li>Fullwidth</li>
      </ul>
    </div>
  </nav>
  {/* End of Breadcrumb */}
  {/* Start of Page Content */}
  <div className="page-content mb-10">
    <div className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6" style={{backgroundImage: 'url(assets/images/shop/banner2.jpg)', backgroundColor: '#FFC74E'}}>
      <div className="container banner-content">
        <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
        <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h3>
        <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Discover
          Now<i className="w-icon-long-arrow-right" /></a>
      </div>
    </div>
    {/* End of Shop Banner */}
    <div className="container-fluid">
      {/* Start of Shop Content */}
      <div className="shop-content">
        {/* Start of Shop Main Content */}
        <div className="main-content">
          <nav className="toolbox sticky-toolbox sticky-content fix-top">
            <div className="toolbox-left">
              <a href="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left"><i className="w-icon-category" /><span>Filters</span></a>
              <div className="toolbox-item toolbox-sort select-box text-dark">
                <label>Sort By :</label>
                <select name="orderby" className="form-control">
                  <option value="default" selected="selected">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price-low">Sort by pric: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>
            <div className="toolbox-right">
              <div className="toolbox-item toolbox-show select-box">
                <select name="count" className="form-control">
                  <option value={9}>Show 9</option>
                  <option value={12} selected="selected">Show 12</option>
                  <option value={24}>Show 24</option>
                  <option value={36}>Show 36</option>
                </select>
              </div>
              <div className="toolbox-item toolbox-layout">
                <a href="shop-fullwidth-banner.html" className="icon-mode-grid btn-layout active">
                  <i className="w-icon-grid" />
                </a>
                <a href="shop-list.html" className="icon-mode-list btn-layout">
                  <i className="w-icon-list" />
                </a>
              </div>
            </div>
          </nav>
          <div className="product-wrapper row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
          {Products?.map((item,index)=>{
             return(
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <Link to={`/prod/${item._id}`}>
                    <img src={"http://localhost:3000/file/"+item.galleries[0].url_photo} alt="Product" width={300} height={338} />
                  </Link>
                  <div className="product-action-horizontal">
                    <a href="#" onClick={(e)=> AddToCart(item)} className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" />
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare" />
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View" />
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-banner-sidebar.html">{item.subcategory.name}</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product-default.html">{item.name}</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '100%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                  </div>
                  <div className="product-pa-wrapper">
                    <div className="product-price">
                     {item.price} TND
                    </div>
                  </div>
                </div>
              </div>
            </div>
           )
          })}
          </div>
          <div className="toolbox toolbox-pagination justify-content-between">
            <p className="showing-info mb-2 mb-sm-0">
              Showing<span>1-12 of 60</span>Products
            </p>
            <ul className="pagination">
              <li className="prev disabled">
                <a href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                  <i className="w-icon-long-arrow-left" />Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="next">
                <a href="#" aria-label="Next">
                  Next<i className="w-icon-long-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Shop Main Content */}
        {/* Start of Sidebar, Shop Sidebar */}
        <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper">
          {/* Start of Sidebar Overlay */}
          <div className="sidebar-overlay" />
          <a className="sidebar-close" href="#"><i className="close-icon" /></a>
          {/* Start of Sidebar Content */}
          <div className="sidebar-content scrollable">
            <div className="filter-actions">
              <label>Filter :</label>
              <a href="#" className="btn btn-dark btn-link filter-clean">Clean All</a>
            </div>
            {/* Start of Collapsible widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title"><span>All Categories</span></h3>
              <ul className="widget-body filter-items search-ul">
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Babies</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Decoration</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Medical</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Watches</a></li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title"><span>Price</span></h3>
              <div className="widget-body">
                <ul className="filter-items search-ul">
                  <li><a href="#">$0.00 - $100.00</a></li>
                  <li><a href="#">$100.00 - $200.00</a></li>
                  <li><a href="#">$200.00 - $300.00</a></li>
                  <li><a href="#">$300.00 - $500.00</a></li>
                  <li><a href="#">$500.00+</a></li>
                </ul>
                <form className="price-range">
                  <input type="number" name="min_price" className="min_price text-center" placeholder="$min" /><span className="delimiter">-</span><input type="number" name="max_price" className="max_price text-center" placeholder="$max" /><a href="#" className="btn btn-primary btn-rounded">Go</a>
                </form>
              </div>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title"><span>Size</span></h3>
              <ul className="widget-body filter-items item-check mt-1">
                <li><a href="#">Extra Large</a></li>
                <li><a href="#">Large</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Small</a></li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title"><span>Brand</span></h3>
              <ul className="widget-body filter-items item-check mt-1">
                <li><a href="#">Elegant Auto Group</a></li>
                <li><a href="#">Green Grass</a></li>
                <li><a href="#">Node Js</a></li>
                <li><a href="#">NS8</a></li>
                <li><a href="#">Red</a></li>
                <li><a href="#">Skysuite Tech</a></li>
                <li><a href="#">Sterling</a></li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title"><span>Color</span></h3>
              <ul className="widget-body filter-items item-check">
                <li><a href="#">Black</a></li>
                <li><a href="#">Blue</a></li>
                <li><a href="#">Brown</a></li>
                <li><a href="#">Green</a></li>
                <li><a href="#">Grey</a></li>
                <li><a href="#">Orange</a></li>
                <li><a href="#">Yellow</a></li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
          </div>
          {/* End of Sidebar Content */}
        </aside>
        {/* End of Shop Sidebar */}
      </div>
      {/* End of Shop Content */}
    </div>
  </div>
  {/* End of Page Content */}
</main>

      
    </>
  )
}

export default Shop
