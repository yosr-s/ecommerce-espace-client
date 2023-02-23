import logo from './logo.svg';
import './App.css';
import Home from './view/home/Home';
import { BrowserRouter, Routes,Route ,useNavigate,Navigate} from 'react-router-dom';
import Accueil from './view/home/Accueil';
import Product from './view/home/Product';
import Shop from './view/home/Shop';
import Login from './view/home/Login';
import Cart from './view/home/Cart';
import About from './view/home/About';
import Checkout from './view/home/Checkout';
import Order from './view/home/Order';
import SingleProduct from './view/home/SingleProduct';



function App() {
  const PrivateRoutes = ({ children }) => {
    if (!localStorage.getItem("user_client")) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} >
                <Route path="/" element={<Accueil />} />
                <Route path="/shop/category/:categoryName/subcategory/:subcategoryName" element={<Shop />} />
                <Route path="/product" element={<Product />} />
                <Route path="/prod/:id" element={<SingleProduct />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/about" element={<About />} />

              </Route>
              <Route path="/" element={<Home />} >
                <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
                <Route path="/checkout" element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
                <Route path="/order" element={<PrivateRoutes><Order /></PrivateRoutes>} />


              </Route>
            </Routes>
          </BrowserRouter>      
    </>
  );
}

export default App;
