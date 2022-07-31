import React from 'react'
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useSelector } from 'react-redux';
import Link from 'next/link'

interface Props{
    search:string,
        
}

const Navbar:React.FC<Props> = ({search}) => {

    const cart = useSelector((state:any) => state.cart);

    const getItemsCount = () => {
      return cart.reduce((accumulator:any[], item:any[]) => accumulator + item.quantity, 0);
    };
    

  return (
    <div>




        <div className='w-full  h-[4rem]'>
        <div className='flex  items-center h-full'>
          <Link href='/'>
            <div className='w-4/12 pl-2 lg:pl-[2rem] cursor-pointer '>
        <h1 className='w-max hover:border-b-2 hover:border-[blue]'>Peter&apos;s  Place</h1>
        </div>
        </Link>



        <div className='h-full hidden lg:block w-4/12 flex items-center'>
        <input type="text" placeholder="Search" className='text-black hidden border-b-2 outline-none focus:border-[blue] w-full py-2 lg:flex'  onChange = {(e) => search(e)}></input>
        </div>

        <div className='ml-4 lg:ml-[3rem] cursor-pointer'></div>
        <Link href='/about'><span className='mx-4 lg:mx-12 hover:border-b-2 hover:border-[blue] cursor-pointer'>About</span></Link>
        <Link href='/shop'><span className='mr-8 hover:border-b-2 hover:border-[blue] cursor-pointer'>Shop</span></Link>
        <Link href='/cart'><span className='mr-2 flex lg:mr-0 lg:ml-4 lg:flex hover:border-b-2 hover:border-[blue] cursor-pointer'> <ShoppingCartIcon width={20} height={30}/> <sup className='text-[blue] pt-2 lg:pt-0'> {getItemsCount()}</sup>  </span></Link>



          </div>

          <div className='h-full mx-auto w-9/12 flex items-center'>
        <input type="text" placeholder="Search" className='text-black border-b-2 outline-none focus:border-[blue] w-full py-2 mt-[5rem] lg:hidden'  onChange = {(e) => search(e)}></input>
        </div>

          
        </div>

    </div>
  )
}

export default Navbar