import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

import './navbar.css'



class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className='navbar' color="faded"  light expand="md">
                    <NavbarBrand className ='navheader' href="/"><h1><strong>Welcome To Indy V Ballers</strong></h1></NavbarBrand>
                    <NavbarToggler onClick={this.props.loggout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                    {/* registration */}
                                <Button><Link to={this.props.loggedIn ? "/home": '/'}>Home</Link></Button> 
                            </NavItem>
                            <NavItem>
                                <Button><Link to={this.props.loggedIn ? "/events": "/"}>Upcoming Events</Link></Button>
                            </NavItem>
                            <NavItem>
                                <Button ><Link to={this.props.loggedIn ? "/message": "/"}> Message Board </Link></Button>
                            </NavItem>
                            <NavItem>
                                <Button  onClick={() => this.props.clickLogout()}><Link to="/"> {this.props.loggedIn ? "Logout": "Login"} </Link> </Button>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;