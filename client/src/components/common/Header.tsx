import * as React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const Header: React.FC = () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand>LaManicurista</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;