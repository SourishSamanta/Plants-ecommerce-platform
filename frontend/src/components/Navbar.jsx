import React, { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='nav w-full flex items-center justify-between px-5 py-10'>
       <h1 className=' text-2xl font-black text-green-600'>Plantr.</h1>

        <ul className=' flex gap-5 text-sm'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?'active':''}>Home</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact"?'active':''}>Contact</li>
            <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?'active':''}>About Us</li>
        </ul>

        <div className=' flex gap-5 text-xs'>
          <button>Search</button>
          <button>Cart</button>
          <button>Sign In</button>
        </div>

        
    </div>
  )
}

export default Navbar