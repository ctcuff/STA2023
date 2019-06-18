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
import './style/AppRouter.scss';

export default class AppRouter extends Component {

  constructor(props) {
    super(props);
    this.state = { useNav: window.innerWidth < 620 };
    this.navLinks = React.createRef();
    this.sidebarLinks = React.createRef();
    this.routes = [
      {
        path: '/',
        exact: true,
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
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({ useNav: window.innerWidth < 620 });
  };

  onNavItemSelected = (route, event) => {
    // Makes sure only one nav link is active at a time
    const navLinks = this.navLinks.current.listNode;
    [...navLinks.children].forEach(child => {
      if (child !== event.target) {
        child.classList.remove('active');
      }
    })
  };

  render() {
    const headerStyle = {
      fontWeight: 'bold',
      color: '#000'
    };

    const sideBar = (
        <div className="AppRouter-sidenav" id="navigation">
          <ul className="AppRouter-ul" ref={this.sidebarLinks}>
            <li>
              <Link to="" style={headerStyle}>Home</Link>
            </li>
            <li style={headerStyle}>Chapters</li>
            {this.routes.map(route => (
                <li key={route.path} className="AppRouter-li-indent">
                  <Link to={route.path}>{route.name}</Link>
                </li>
            ))}
          </ul>
        </div>
    );

    const nav = (
        <Navbar bg="light" expand="lg" collapseOnSelect id="navigation" className="AppRouter-navbar">
          <Navbar.Brand>Chapters</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" ref={this.navLinks} onSelect={this.onNavItemSelected}>
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
          {this.state.useNav ? nav : sideBar}
          <Switch>
            {this.routes.map((route, index) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    sensitive={false}
                    component={route.component}
                    key={index}
                />
            ))}
            <Route component={NotFound}/>
          </Switch>
        </Router>
    )
  }
}