import { NavLink } from 'react-router-dom';
import './styles/TopBar.css'

const TopBar = () => {
    return ( 
        <div className='block_topbar'>
            <div className='block_topbar__content'>
                <NavLink to='/signIn' style={{textDecoration: 'none'}}>
                    <button className='__topbar__button'>Sing In</button>
                </NavLink>
                <NavLink to='/register' style={{textDecoration: 'none'}}>
                    <button className='__topbar__button'>Register</button>
                </NavLink>
            </div>
        </div>
     );
}
 
export default TopBar;