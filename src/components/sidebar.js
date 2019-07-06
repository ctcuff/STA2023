import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import globals from 'styles/global.scss';

export const SideBarComponent = styled.div`
  height: 100%;
  width: ${globals.sidebarWidth};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ececec;
  overflow-x: hidden;
  padding: 22px 0 8px 12px;

  ul {
    padding-left: 0;
    list-style: none inside;

    &:first-child {
      margin-bottom: 8px;
    }
  }

  .link-active a {
    color: red !important;
  }

  .sidebar-li-inner {
    margin: 8px 0 8px 12px;

    & a {
      color: #1a1a1abf;
    }
  }
`;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.sidebarLinks = React.createRef();
  }

  componentDidMount() {
    const links = this.sidebarLinks.current.children;
    let currentPath = window.location.pathname;

    if (currentPath.length > 1 && currentPath.endsWith('/')) {
      // turns '/ch10/' into '/ch10'
      currentPath = currentPath.slice(0, -1);
    }

    const link = Array.prototype.find.call(
      links,
      (link) => link.firstElementChild.pathname === currentPath
    );

    if (link) {
      link.classList.add('link-active');
    }
  }

  setLinkActive = ({ target }) => {
    const links = this.sidebarLinks.current.children;

    Array.prototype.forEach.call(links, (link) => {
      if (link === target.parentElement) {
        link.classList.add('link-active');
      } else {
        link.classList.remove('link-active');
      }
    });
  };

  clearActiveLinks = () => {
    const links = this.sidebarLinks.current.children;

    Array.prototype.forEach.call(links, (link) => {
      link.classList.remove('link-active');
    });
  };

  render() {
    return (
      <SideBarComponent {...this.props}>
        <ul>
          <Link to="/" style={{ color: '#000' }}>
            <li style={{ marginBottom: 8 }} onClick={this.clearActiveLinks}>
              <b>Home</b>
            </li>
          </Link>
          <li>
            <b>Chapters</b>
          </li>
          <div ref={this.sidebarLinks}>
            {this.props.edges.map(({ node }, index) => (
              <li
                key={index}
                className="sidebar-li-inner"
                onClick={this.setLinkActive}
              >
                <Link to={node.frontmatter.path}>
                  Chapter {node.frontmatter.chapter}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </SideBarComponent>
    );
  }
}
