import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import companyLogo from '../../assets/images/logo.png';

const MainNavigation = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={companyLogo} alt="Logo" style={{width:"60px"}} class=""/> Marketplace
            </a>
            <ul class="navbar-nav">
                <li class="nav-item">
                <NavLink to='/home'  className="nav-link">
                    Home
                </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/create-item' className="nav-link">
                        Create Item
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/collection' className="nav-link">
                        Collection
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/list-item' className="nav-link">
                        List Item
                    </NavLink>    
                </li>
                <li class="nav-item">
                    <NavLink to='/profile' className="nav-link">
                    <i class="far fa-user-circle"></i>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <a type="button" class="nav-link btn_wlt" data-bs-toggle="modal" data-bs-target="#wallet_model">
                        <i class="fas fa-wallet"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </header>
  );
};

export default MainNavigation;
