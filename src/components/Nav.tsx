import {Link} from 'react-router-dom'
import logo from '/man-artist.svg'
import { FC } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Nav:FC = () => {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <header>
        <nav className="text-[#E9F6FF] text-xl flex justify-between items-center px-20 py-3 bg-[#3652AD] max-sm:px-10">
            <div className="flex gap-1 items-center">
              <img src={logo}/>
              <h2 className="font-bold">#DIY</h2>
            </div>
            <ul className="font-semibold flex gap-4 items-center justify-center max-sm:text-sm">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/shop" className="hover:underline">Shop</Link></li>
                <li><Link to="/cart" className="hover:underline">Cart</Link></li>

                {
                  isAuthenticated ? (
                    <button 
                    className="bg-[#FE7A36] text-[#E9F6FF] font-medium rounded-lg text-base px-5 py-2 hover:bg-[#ff945f] hover:text-[#FFFFFF] transition-colors duration-300"
                    onClick={() => logout()}
                    >
                      LogOut
                    </button>
                  ) : (
                    <button 
                      className="bg-[#FE7A36] text-[#E9F6FF] font-medium rounded-lg text-base px-5 py-2 hover:bg-[#ff945f] hover:text-[#FFFFFF] transition-colors duration-300"
                      onClick={() => loginWithRedirect()}
                    >
                      LogIn
                    </button>
                  )
                }

                
            </ul>
        </nav>
    </header>
  )
}

export default Nav