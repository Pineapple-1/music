import React from 'react';
import {Link} from 'react-router-dom'
import Styles from './links.module.css'

const Links = ({Token}) =>{
    return (   
        <div className={Styles.center}>
        <label className= {Styles.Label} ><Link style={{color:' rgba(255, 255, 255, 0.774)'}} to="/">Home</Link></label>
         <ul className={Styles.sm}>
             {Token ? <li><Link className={Styles.links} to="/logout">Logout</Link></li> :
             <>
             <li><Link className={Styles.links} to="/signin">SignIn</Link></li>
             <li><Link className={Styles.links} to="/signup">SignUp</Link></li></>}

             
             
         </ul>
         </div>
    )
}
export default Links
