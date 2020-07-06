import React from 'react';

const Logo = () => {
     return (
          <>
               <h1 className="logo-name">
                    <a href="/emojis">
                         {/* <img src="images/gomojii-logo-3.png" alt="logo"/> */}
                         G<span role="img" aria-label="funny face tongue out emoji" className="logo-emoji-letter">🤪</span>m<span role="img" aria-label="robot emoji" className="logo-emoji-letter">🤖</span>jii
                    </a>
               </h1>
          </>
     );
}

export default Logo;