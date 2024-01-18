import { useSelector } from 'react-redux';
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
    <div className='flex items-center justify-between' >
    <div className='flex items-center p-16'  >
        <div  className='px-8'>
        <img className='w-24 rounded-full border-amber-400 border-4' src='./logo.jpg'/>
        </div>
        <h2 className='text-amber-400'>REACTFOOD</h2>
    </div>
    <div className='p-16'>
        <button onClick={openModal}>Cart ({cart.length})</button>
    </div>
    </div>
    </>)
}