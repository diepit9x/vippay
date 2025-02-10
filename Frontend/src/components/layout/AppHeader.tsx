import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faUserPen,
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const AppHeader: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const location = useLocation();
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const toggleNavbar = () => setExpanded((prev) => !prev);

    useEffect(() => {
        setExpanded(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setExpanded(false);
            }
        };
        if (expanded) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    return (
        <Navbar
            ref={navbarRef}
            expand="lg"
            bg="white"
            variant="light"
            className="py-3 navbar sticky-top"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            src="https://vippay.vn/public/img/vippay-logo.png"
                            height="30px"
                            alt="VIPPAY.VN"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={toggleNavbar}
                    className="border-0"
                >
                    <FontAwesomeIcon
                        icon={expanded ? faTimes : faBars}
                        style={expanded ? { color: '#ef314f' } : {}}
                        className={`toggle-icon ${expanded ? 'rotate-icon' : ''}`}
                    />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/card-recharge" className="nav-link">
                            Đổi thẻ cào
                        </NavLink>
                        <NavLink to="/buy-card" className="nav-link">
                            Mua thẻ cào
                        </NavLink>
                        <NavDropdown title="Giao dịch" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Chuyển tiền
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Rút tiền
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="auth-buttons">
                        <Button variant="outline-primary" href="account/register.html">
                            <FontAwesomeIcon icon={faUserPen} /> Đăng ký
                        </Button>
                        <Button variant="primary" href="index.html">
                            <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                style={{ marginRight: '3px' }}
                            />{' '}
                            Đăng nhập
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppHeader;
