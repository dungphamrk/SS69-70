import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Notification from './components/Notification';
import './styles/bootstrap.min.css';
import './styles/style.css';
import {ProductIf} from '../src/components/types';
import { useDispatch, useSelector } from 'react-redux';
import {addCart,deleteCart} from './redux/actions'
const App: React.FC = () => {
  // const [products, setProducts] = useState<ProductIf[]>([
  //   { id: 1, image: '../public/pizza.jpg', name: 'Pizza', description: 'Lorem ipsum dolor sit amet...', price: 30, quantity: 0 },
  //   { id: 2, image: '../public/hamburger.jpg', name: 'Hamburger', description: 'Lorem ipsum dolor sit amet...', price: 15, quantity: 10 },
  //   { id: 3, image: '../public/bread.jpg', name: 'Bread', description: 'Lorem ipsum dolor sit amet...', price: 20, quantity: 10 },
  //   { id: 4, image: '../public/cake.jpg', name: 'Cake', description: 'Lorem ipsum dolor sit amet...', price: 10, quantity: 10 },
  // ]);
  // //    
  // const [cart,setCart]=useState<ProductIf[]>([
  //   { id: 1, image: '../public/pizza.jpg', name: 'Pizza', description: 'Lorem ipsum dolor sit amet...', price: 30, quantity: 0 },
  //   { id: 2, image: '../public/hamburger.jpg', name: 'Hamburger', description: 'Lorem ipsum dolor sit amet...', price: 15, quantity: 0 },
  //   { id: 3, image: '../public/bread.jpg', name: 'Bread', description: 'Lorem ipsum dolor sit amet...', price: 20, quantity: 0 },
  //   { id: 4, image: '../public/cake.jpg', name: 'Cake', description: 'Lorem ipsum dolor sit amet...', price: 10, quantity: 0 },
  // ]);
  // 
  const products:ProductIf[] =useSelector((state:any)=>state.listProductReducer.listProduct);
  const cart:ProductIf[] =useSelector((state:any)=>state.cartReducer.cart);
  const dispatch=useDispatch();
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  // useEffect(()=>{
  //   let localProduct=localStorage.getItem("products");
  //   let localCart=localStorage.getItem("cart");   
  //   if (localProduct) { 
      
  //     setProducts(JSON.parse(localProduct));
  //   }
  //   if (localCart) { 
  //     setCart(JSON.parse(localCart));
  //   }
  // },[])
  useEffect(() => {
    if (notificationMessage !== "") {
      const timer = setTimeout(() => {
        setNotificationMessage("");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [notificationMessage]);
  useEffect(() => {
    if (errorMessage !== "") {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  const handleAddToCart = (productId: number) => {

    // let newCart=cart.map(product=>
    //   product.id === productId
    //     ? { ...product, quantity: product.quantity + 1 }
    //     : product
    // )
    // setCart(newCart);
    // let newProduct=products.map(product =>
    //   product.id === productId
    //     ? { ...product, quantity: product.quantity - 1 }
    //     : product
    // )
    // setProducts(newProduct);
 
    dispatch(addCart(productId));
    localStorage.setItem("products",JSON.stringify(products));  
    localStorage.setItem("cart",JSON.stringify(cart));
    setNotificationMessage("Add to cart successfully");
    
  };
  const handleDelete=(productId:number)=>{
    // let newCart=cart.map(product=>
    //   product.id === productId
    //     ? { ...product, quantity: 0 } 
    //     : product
    // )
    // setCart(newCart);
    // let newProduct=products.map(product=>
    //   product.id === productId
    //     ? { ...product, quantity: 10 }
    //     : product
    // )
    // setProducts(newProduct)
    dispatch(deleteCart(productId));
    localStorage.setItem("products",JSON.stringify(products));  
    localStorage.setItem("cart",JSON.stringify(cart));
    setErrorMessage("Delete successfully");


  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Cart cart={cart.filter(product => product.quantity > 0)} delete1={handleDelete} />
          {notificationMessage && <Notification message={notificationMessage} />}
          {errorMessage && <Notification message={errorMessage} isError={true} />}

        </div>
      </div>
    </div>
  );
};

export default App;
