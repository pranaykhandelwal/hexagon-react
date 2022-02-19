import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import companyLogo from '../../assets/images/logo.png';
import MyWallet from '../modals/my-wallet'

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
            <Link to='' className='navbar-brand'>
                <img src={companyLogo} alt="Logo" style={{width:"60px"}} class=""/> Marketplace
            </Link>
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
                    <a type="button" class="nav-link btn_wlt" onClick={ handleShow }>
                        <i class="fas fa-wallet"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <MyWallet show={show} setShow={setShow}/>
    </header>
  );
};

export default Header;
