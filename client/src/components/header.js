import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (

        <div>
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                 <div class="container">
                 <Link to="/" class="navbar-brand" > Streamer </Link>

                 <Link to="/streams/show" class="navbar-brand" > Stream Show </Link>

                 <Link to="/" class="navbar-brand" > Login </Link>
                 <GoogleAuth />
             
            
         
                </div>
             </nav>
        </div>
       
    
    );
}

export default Header;