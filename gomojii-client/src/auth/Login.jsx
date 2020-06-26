import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
     const state = useSelector(state => {
          
     })

     return ( 
          <form>
               <div className="email">
                    <input
                         type="email"
                         name="email"
                         placeholder="Email"
                         // value={this.state.email}
                         // onChange={this.handleChange}
                         required
                    />
               </div>
               <div className="password">
                    <input
                         type="password"
                         name="password"
                         placeholder="Password"
                         // value={this.state.password}
                         // onChange={this.handleChange}
                         required
                    />
               </div>
               <button type="submit">Login</button>
          </form>
     );
}

export default Login;