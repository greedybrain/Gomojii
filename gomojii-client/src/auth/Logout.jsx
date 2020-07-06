import React from 'react'
import { useDispatch } from 'react-redux';
import { endUsersSession } from '../store/middleware/serverAuth';

const Logout = () => {
     const dispatch = useDispatch()
     
     const logout = () => {
          dispatch(endUsersSession())
     }
     return ( 
          <a href='/login' onClick={logout}>Logout</a>
     );
}

export default Logout;