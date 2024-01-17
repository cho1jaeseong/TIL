import { useSelector } from 'react-redux';
import classes from './Header.module.css';
import { useState } from 'react';
import Modal from './modal';
export default function Header(){
    const [isModalOpen,setisModalOpen] =useState(false)
    const cart = useSelector(state=>state.cart.cart)
    // setcartCount(cart.len)
    console.log(cart.len)
    const openModal = ()=>{
        if (isModalOpen){
            setisModalOpen(false)
        }
        else {setisModalOpen(true)}
    }
    return (<>
    {isModalOpen ? <Modal openModal={openModal} /> : null}
    <div className={classes.boss}>
    <div className={classes.logobox}  >
        <div className= {classes.logo} >
        <img src='./logo.jpg'/>
        </div>
        <h2>REACTFOOD</h2>
    </div>
    <div>
        <button onClick={openModal}>Cart ({cart.length})</button>
    </div>
    </div>
    </>)
}