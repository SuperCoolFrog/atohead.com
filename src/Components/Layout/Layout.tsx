import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './layout.module.scss';
import { LinkContainer } from 'react-router-bootstrap'
import classNames from 'classnames';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (<>
        <div className={styles.layoutNavBarContainer}>
            <Navbar bg={"dark"} variant="dark" className={styles.layoutNavBar}>
                <LinkContainer to="/home">
                    <Navbar.Brand>ATO Head</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/collection">
                            <Nav.Link>Collection</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Deck Builder Tool" id="basic-nav-dropdown">
                            <LinkContainer to="/deck-builder/warrior">
                                <NavDropdown.Item>Warrior</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/deck-builder/scout">
                                <NavDropdown.Item>Scout</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/deck-builder/mage">
                                <NavDropdown.Item>Mage</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/deck-builder/healer">
                                <NavDropdown.Item>Healer</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <main role="main">
            {children}
        </main>
        <footer className={classNames("container fixed-bottom", styles.footer)}>
            <hr />
            <p>I do not own <a href="https://acrosstheobelisk.com/"><i>Across the Obelisk</i></a> ... I just like playing the game.</p>
        </footer>
    </>);
};

export default Layout;