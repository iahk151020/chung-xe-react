import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import './Navbar.css';

import {
    Navbar,
    Nav,
    Container,
    NavDropdown
}from 'react-bootstrap';


export const Heading = () => {
    const history = useHistory();

    const user = JSON.parse(localStorage.getItem('user-info'));

    function logout() {
        localStorage.clear();
        history.push('/');
    }
    return(
            <header className="header">
                <Link href to='/'>
                    <img className="logo" src="https://chungxe.vn/assets/images/logo.svg" alt="logo" />
                </Link>
                <nav>   
                        {
                            localStorage.getItem('user-info') ?
                            <>
                            <ul className="nav__links">
                                <li><Link className="nav__items" href to="/">Trang chủ</Link></li>
                                <li><Link className="nav__items" href to="/">Về chúng tôi</Link></li>
                                 <li><Link className="nav__items" href to="/book">Đặt xe</Link></li>
                                <li>
                                    <NavDropdown title={user.username}>
                                        <NavDropdown.Item onClick={logout} >
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                            </ul>
                            </>
                            :
                            <>
                            <ul className="nav__links">
                                <li><Link className="nav__items" href to="/">Trang chủ</Link></li>
                                <li><Link className="nav__items" href to="/">Về chúng tôi</Link></li>
                                <Link href to ="/login" className="cta"><button>Đăng nhập</button></Link>
                            </ul>
                            </>
                           
                        }
                </nav>
            </header>
    )
}