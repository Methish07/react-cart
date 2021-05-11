import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.css';
import {Link} from 'react-router-dom'
import {statecontext} from './context/contex'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
const Header = () => {
    const [state]=useContext(statecontext);
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="head">
           <Link to='/'> <HomeIcon fontSize='large' color="inherit" className="col"/></Link>
         <div className="space">
         <div className="about-icon">
          <Link to='/login'><AccountCircleIcon fontSize="large"></AccountCircleIcon></Link>
           </div>
           <div className="contact-icon">
          <a href="#contact"><ContactSupportIcon fontSize="large"></ContactSupportIcon></a>
           </div>
           <div className="cart-icon">
           <Link to='/cart'><ShoppingCartIcon fontSize="large" color="inherit" className="col-1"> </ShoppingCartIcon><span>{state.cart.length}</span></Link>
          
           </div>
         </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header
