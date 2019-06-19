import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Landing from './components/Landing'
import ChapterOne from "./components/ChapterOne";
import ChapterTwo from "./components/ChapterTwo";
import ChapterThree from "./components/ChapterThree";
import ChapterTen from "./components/ChapterTen";
import NotFound from "./components/NotFound";
import globals from './style/_globals.scss';
import './style/AppRouter.scss';

export default class AppRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < parseInt(globals.screenBreakpoint)
    };
    this.navLinks = React.createRef();
    this.sidebarLinks = React.createRef();
    this.routes = [
      {
        path: '/',
        name: 'Home',
        component: () => <Landing/>
      },
      {
        path: '/ch1',
        name: 'Chapter 1',
        component: () => <ChapterOne/>
      },
      {
        path: '/ch2',
        name: 'Chapter 2',
        component: () => <ChapterTwo/>
      },
      {
        path: '/ch3',
        name: 'Chapter 3',
        component: () => <ChapterThree/>
      },
      {
        path: '/ch10',
        name: 'Chapter 10',
        component: () => <ChapterTen/>
      }
    ];
  }

  componentDidMount() {
    this.setLinkActive(window.location);
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < parseInt(globals.screenBreakpoint)
    });
  };

  setLinkActive = ({ pathname }) => {
    const sidebarLinks = this.sidebarLinks.current;
    if (!sidebarLinks) {
      return;
    }

    const listItems = [...sidebarLinks.children];
    let current = listItems.find(link => link.firstChild.pathname === pathname);

    // This will be null/undefined when there is a 404
    if (!current) {
      return;
    }
    current = current.firstChild;

    // Don't turn the 'Home' link red
    if (current.pathname !== process.env.PUBLIC_URL + '/') {
      current.classList.add('AppRouter-sidebar-active');
    }

    listItems.forEach(item => {
      const child = item.firstChild;
      if (child.classList !== undefined && child !== current) {
        child.classList.remove('AppRouter-sidebar-active');
      }
    });
  };

  render() {
    const currentPath = window.location.pathname;

    // Check for a 404 by checking if the current window path is valid.
    // Note that /ch3 and /ch3/ are both valid but /ch3// is not.
    const is404 = this.routes.find(route => {
      const url = process.env.PUBLIC_URL + route.path;
      return url === currentPath || url + '/' === currentPath;
    }) === undefined;


    const headerStyle = {
      fontWeight: 'bold',
      color: '#000'
    };

    const sideBar = (
        <div className="AppRouter-sidebar" id="navigation" style={{ display: is404 ? 'none' : 'block' }}>
          <ul className="AppRouter-ul" ref={this.sidebarLinks}>
            <li>
              <Link to="" style={headerStyle}>Home</Link>
            </li>
            <li style={headerStyle} id="chapters">Chapters</li>
            {this.routes.filter(route => route.name !== 'Home').map(route => (
                <li key={route.path} className="AppRouter-li-indent">
                  <Link
                      to={route.path}
                      className={
                        process.env.PUBLIC_URL + route.path === currentPath
                            ? 'AppRouter-sidebar-active'
                            : ''
                      }
                  >
                    {route.name}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
    );

    const nav = (
        <Navbar
            bg="light"
            expand="lg"
            id="navigation"
            className="AppRouter-navbar"
            style={{ display: is404 ? 'none' : 'flex' }}
            collapseOnSelect
        >
          <Navbar.Brand>STA 2023</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto AppRouter-nav-link-container" ref={this.navLinks}>
              {this.routes.map(route => (
                  <LinkContainer to={route.path} key={route.path}>
                    <Nav.Link>{route.name}</Nav.Link>
                  </LinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );

    return (
        <Router basename={process.env.PUBLIC_URL}>
          {this.state.isMobile ? nav : sideBar}
          <Switch>
            {this.routes.map((route, index) => (
                <Route
                    path={route.path}
                    sensitive={false}
                    render={() => {
                      this.setLinkActive(window.location);
                      return route.component();
                    }}
                    key={index}
                    exact
                />
            ))}
            <Route component={NotFound}/>
          </Switch>
        </Router>
    );
  }
}