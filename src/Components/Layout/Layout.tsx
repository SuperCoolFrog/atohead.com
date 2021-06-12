import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (<>
        <div className={styles.layoutNavBarContainer}>
            <Navbar bg={"dark"} variant="dark" className={styles.layoutNavBar}>
                <Navbar.Brand href="/home">ATO Head</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <NavDropdown title="Deck Builder Tool" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/deck-builder/warrior">Warrior</NavDropdown.Item>
                            <NavDropdown.Item href="/deck-builder/scout">Scout</NavDropdown.Item>
                            <NavDropdown.Item href="/deck-builder/mage">Mage</NavDropdown.Item>
                            <NavDropdown.Item href="/deck-builder/healer">Healer</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <main role="main">
            {children}
        </main>
        <hr />
        <footer className="container">
            <p>I do not own <a href="https://acrosstheobelisk.com/"><i>Across the Obelisk</i></a> ... just like the game.</p>
        </footer>
    </>);
};

export default Layout;