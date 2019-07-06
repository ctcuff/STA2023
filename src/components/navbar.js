import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > .navbar {
    background-color: #ececec !important;
  }

  #home > a {
    color: #000;
  }

  .navbar-link {
    padding: 8px 0 8px 0;

    &:not(#home) > a {
      color: #00000080;
    }
  }

  .link-active a {
    color: red !important;
  }
`;

export default class CustomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.navbarLinks = React.createRef();
  }

  componentDidMount() {
    const links = this.navbarLinks.current.children;
    const currentPath = window.location.pathname;
    const link = Array.prototype.find.call(
      links,
      (link) =>
        link.firstElementChild.firstElementChild.pathname === currentPath
    );

    if (link) {
      link.firstElementChild.classList.add('link-active');
    }
  }

  onNavLinkClick = ({ target }) => {
    const links = this.navbarLinks.current.children;

    Array.prototype.forEach.call(links, (link) => {
      const child = link.firstElementChild;

      if (child === target.parentElement) {
        child.classList.add('link-active');
      } else {
        child.classList.remove('link-active');
      }
    });
  };

  removeActive = () => {
    const links = this.navbarLinks.current.children;

    Array.prototype.forEach.call(links, (link) => {
      link.firstElementChild.classList.remove('link-active');
    });
  };

  toggleCollapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <Wrapper {...this.props}>
        <Navbar
          bg="light"
          expand="lg"
          onToggle={this.toggleCollapse}
          expanded={this.state.expanded}
        >
          <Navbar.Brand>{this.props.title}</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.toggleCollapse}
          />
          <Navbar.Collapse id="basic-navbar-nav" onClick={this.toggleCollapse}>
            <Nav className="mr-auto">
              <li>
                <Nav.Item
                  className="navbar-link"
                  id="home"
                  onClick={this.removeActive}
                >
                  <Link to="/">Home</Link>
                </Nav.Item>
              </li>
              <div ref={this.navbarLinks} style={{ width: 'fit-content' }}>
                {this.props.edges.map(({ node }, index) => (
                  <li key={index}>
                    <Nav.Item
                      className="navbar-link"
                      onClick={this.onNavLinkClick}
                    >
                      <Link to={node.frontmatter.path}>
                        Chapter {node.frontmatter.chapter}
                      </Link>
                    </Nav.Item>
                  </li>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    );
  }
}
