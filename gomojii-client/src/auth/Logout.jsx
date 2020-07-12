import React from 'react'
import { useDispatch } from 'react-redux';
import { endUsersSession } from '../Store/Middleware/serverAuth';

const Logout = () => {
     const dispatch = useDispatch()
     
     //todo: getting endUsersSession action from store
     const logout = () => {
          dispatch(endUsersSession())
     }
     return ( 
          <a href='/login' onClick={logout}>Logout</a>
     );
}

export default Logout;