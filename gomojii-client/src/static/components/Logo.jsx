import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
     return (
          <>
               <Link to="/">
                    <img src="images/gomojii-logo-3.png" alt="logo"/>
               </Link>
          </>
     );
}

export default Logo;