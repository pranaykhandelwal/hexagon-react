import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import companyLogo from '../../assets/images/logo.png';
import MyWallet from '../modals/my-wallet'

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <header>
    <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
            <Link to='' className='navbar-brand'>
                <img src={companyLogo} alt="Logo" style={{width:"60px"}} className=""/> Marketplace
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to='/home'  className="nav-link">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/create-item' className="nav-link">
                        Create Item
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/collection' className="nav-link">
                        Collection
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/list-item' className="nav-link">
                        List Item
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/profile' className="nav-link">
                    <i className="far fa-user-circle"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a type="button" className="nav-link btn_wlt" onClick={ handleShow }>
                        <i className="fas fa-wallet"></i>
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
