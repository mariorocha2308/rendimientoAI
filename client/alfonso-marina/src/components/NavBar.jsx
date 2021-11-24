import './styles/NavBar.css'
import { BiHomeCircle } from "react-icons/bi";
import { RiSettings2Line } from "react-icons/ri";
import { MdExitToApp, MdLanguage } from "react-icons/md";
import {IoAnalytics} from 'react-icons/io5'
import { SiPlausibleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className='block_nav'>
                <div className='block_nav__avatar'>
                    <SiPlausibleanalytics className='__avatar__image'/>
                </div>

                <div className='block_nav__navigation'>

                    <NavLink exact to ='/' className='__navigation__icons'>
                        <BiHomeCircle/>
                    </NavLink>

                    <NavLink exact to ='/analytics' className='__navigation__icons'>
                        <IoAnalytics/>
                    </NavLink>

                    <MdLanguage className='__navigation__icons'/>

                    <NavLink exact to ='/setting' className='__navigation__icons'>
                        <RiSettings2Line/>
                    </NavLink>

                    <NavLink exact to ='/logout' className='__navigation__icons'>
                        <MdExitToApp/>
                    </NavLink>
                </div>
        </div> 
    );
}

export default NavBar;