import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
     return (
          <>
               <h1 className="logo-name">
                    <Link to="/emojis">
                         {/* <img src="images/gomojii-logo-3.png" alt="logo"/> */}
                         G<span role="img" aria-label="funny face tongue out emoji" className="logo-emoji-letter">🤪</span>m<span role="img" aria-label="robot emoji" className="logo-emoji-letter">🤖</span>jii
                    </Link>
               </h1>
          </>
     );
}

export default Logo;