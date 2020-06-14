import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
     return ( 
          <header>
               <div className="logo">
                    <Logo />
               </div>
               <div className="nav-items">
                    NavItems
               </div>
          </header>
     );
}

export default Header;