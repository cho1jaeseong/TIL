import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
import FloatingButton from './components/UI/FloatingButton';
import NavigationBar from './components/UI/Navbar';


let isInitial = true

function App() {
  const dispatch =useDispatch()
  const notification = useSelector(state=>state.ui.notification)
  const  isVisible =useSelector(state=> state.ui.isVisibleui)
  const cart = useSelector(state=>state.cart)
useEffect(()=>{
  dispatch(fetchCartData())
},[dispatch])

  useEffect(()=>{
    if(isInitial){
      isInitial=false
      return
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
    

  },[dispatch,cart])
  return (
    <>
    {notification &&<Notification status={notification.status} title={notification.title} message={notification.message}  />}
    <Layout>
      <FloatingButton/>
      <AnimatePresence>
      {isVisible && <Cart />}
      </AnimatePresence>
      <Products />
    </Layout>
    </>
  );
}

export default App;
