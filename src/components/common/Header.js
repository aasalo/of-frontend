import React from "react";
import { Nav, NavItem, Navbar} from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import Search from "./Search";
// app component
export default class Header extends React.Component {
  // render

  handleSearch() {

    alert('search clicked');
  }

  render() {
    return (
        <Navbar>
            <Navbar.Header>
                    <img src="media/logo.jpg" width="50" height="50" />
                    Oddysee's Finest
            </Navbar.Header>
            <Nav pullRight>
                <NavItem>
                    <Search onClick={this.handleSearch} />
                </NavItem>
            </Nav>
        </Navbar>
    );
  }
}
