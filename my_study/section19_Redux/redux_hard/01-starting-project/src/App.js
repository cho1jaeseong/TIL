import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function App() {
  const  isVisible =useSelector(state=> state.ui.isVisibleui)
  const cart = useSelector(state=>state.cart)
  useEffect(()=>{
    fetch("https://react-http-fa025-default-rtdb.asia-southeast1.firebasedatabase.app",
     {
      method: "PUT",
      body :JSON.stringify(cart),
    })
  },[cart])
  return (
    <Layout>
      <AnimatePresence>
      {isVisible && <Cart />}
      </AnimatePresence>
      <Products />
    </Layout>
  );
}

export default App;
