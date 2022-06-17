import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const NavBar = observer(() => {

    const {user} = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={SHOP_ROUTE} className={'navbar-brand'}>NewDevice</Link>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            style={{marginRight:8}}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => {
                                user.setIsAuth(false)
                                navigate(LOGIN_ROUTE)
                            }
                        }
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(true)}
                            // onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;