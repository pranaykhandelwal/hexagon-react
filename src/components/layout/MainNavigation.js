import { NavLink } from 'react-router-dom';

import './MainNavigation.module.css';
import companyLogo from '../../assets/images/logo.png';

const MainNavigation = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={companyLogo} alt="Logo" style="width:60px;" class=""/> Marketplace
            </a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="create-item.html">Create Item</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="collection.html">Collection</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="list-item.html">List Item</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="profile.html"><i class="far fa-user-circle"></i></a>
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
