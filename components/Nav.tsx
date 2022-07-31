import React from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";


const Nav:React.FC = () => {
    const router = useRouter();
    const cart = useSelector((state) => state.cart);


    const getItemsCount = () => {
      return cart.reduce((accumulator:any[], item:any[]) => accumulator + item.quantity, 0);
    };

  return (
      <div className='w-[100%]'>

    <div className="inline-flex flex-row w-full cursor-pointer">
            <div className="w-full px-2 lg:w-5/12 flex flex-row h-[auto] lg:px-12 py-8 gap-5 h-[auto]">
                <Link  href="/"><span className='hover:border-b border-[blue]'>Home</span></Link>
                <Link  href='/shop'><span className={`hover:border-b border-[blue] ${router.pathname == "/shop" ? "border-b-2 border-[blue]" : ""}`}>Store</span></Link>
                <Link href='/about'><span className={`hover:border-b border-[blue] ${router.pathname == "/about" ? "border-b-2 border-[blue]" : ""}`}>About</span></Link>
                <Link href='/contact'><span className={`hover:border-b border-[blue] ${router.pathname == "/contact" ? "border-b-2 border-[blue]" : ""}`}>Contact</span></Link>
              </div>
    
              <div className="flex flex-row items-center w-5/12 ] ">
                <p className="text-center text-2xl hidden lg:block">E commerce</p>
              </div>
    
          
              <div className="flex items-center ">
              <Link href='/cart'><span className="hover:border-b-2 hover:border-[blue]"><ShoppingCartIcon width={20} height={30}/><p>Cart ({getItemsCount()})</p></span></Link>
                  
              </div>
    
              
    
    
    
       
            </div>
            <p className="text-center text-2xl lg:hidden">E commerce</p>
    
        </div>
  )
}

export default Nav