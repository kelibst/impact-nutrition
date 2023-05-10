'use client'
import Link from "next/link";
import Image from "next/image";
import logo from '../Image/INC_Logo-removebg-preview (3).png'
import { BiMenuAltRight} from "react-icons/bi";
import { BiX} from "react-icons/bi";
import { useState } from "react";

const Header = () => {
   const[showNar,setShowNar]=useState(false)

  return (
     <div>
      <nav className=" nav">
          <Link href='/'>
            <Image src="assets/logo.svg" alt="logo" height={66} width={212} />
          </Link>
    
          <div className={`Nav-link ${showNar?'showNav' : 'hideNar'}`}
            onClick={() => setShowNar(false)}>
              <ul className="" >
                <Link className="links" href='/'>Home</Link>
                <Link className="links"  href="/about">About Us</Link>
                <Link className="links"  href="/services">Services</Link>
                <Link className="links" href="/blog">Blog</Link>
                <Link className="links" href="/contact_us">Contact us</Link>
                 <button><Link className="text-xl px-4 py-2 bg-colorPrimary text-white rounded" href='/Login'> Login/Signup</Link></button>
              </ul>
           

          </div>

                <button className="toggle-btn" onClick={()=>setShowNar(!showNar)}>
                      { showNar ? <BiX/> : <BiMenuAltRight/>}
                </button>
      </nav>
   </div>
  );
};

export default Header;
