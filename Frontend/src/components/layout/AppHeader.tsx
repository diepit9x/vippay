import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faUserPen,
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TAuthAction } from '@/models/auth/auth.action';
import AuthUserModal from '@/components/auth/AuthUserModal';

const AppHeader: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const toggleNavbar = () => setExpanded((prev) => !prev);
    const [modalAuthOpen, setModalAuthOpen] = useState<boolean>(false);
    const [actionAuthModal, setActionAuthModal] = useState<TAuthAction | null>(null);

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

    const handleAuthModal = (method: TAuthAction) => {
        setActionAuthModal(method);
        setExpanded(false);
        setModalAuthOpen(true);
    };

    const handleDropdownNavigate = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        navigate(target.pathname);
    };

    return (
        <>
            <Navbar
                ref={navbarRef}
                expand="lg"
                bg="white"
                variant="light"
                className="py-3 navbar sticky-top"
                // className="py-3 navbar sticky-top"
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
                            <NavLink to="/card-purchase" className="nav-link">
                                Mua thẻ cào
                            </NavLink>
                            <NavDropdown title="Giao dịch" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    href="/transaction/withdraw"
                                    onClick={(e) => handleDropdownNavigate(e)}
                                >
                                    Rút tiền
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/transaction/transfer"
                                    onClick={(e) => handleDropdownNavigate(e)}
                                >
                                    Chuyển tiền
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/transaction/history"
                                    onClick={(e) => handleDropdownNavigate(e)}
                                >
                                    Lịch sử
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="auth-buttons">
                            <Button
                                variant="outline-primary"
                                onClick={() => handleAuthModal('Register')}
                            >
                                <FontAwesomeIcon icon={faUserPen} /> Đăng ký
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => handleAuthModal('Login')}
                            >
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
            <AuthUserModal
                modalAuthOpen={modalAuthOpen}
                setModalAuthOpen={setModalAuthOpen}
                actionAuthModal={actionAuthModal}
                setActionAuthModal={setActionAuthModal}
            />
        </>
    );
};

export default AppHeader;
