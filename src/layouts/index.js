import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import globals from 'styles/global.scss';
import SideBar from 'components/sidebar';
import CustomNav from 'components/navbar';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { useNavbar: false };
    this.screenBreakpoint = parseInt(globals.screenBreakpoint);
  }

  componentDidMount() {
    this.setState({
      useNavbar: window.innerWidth < this.screenBreakpoint
    });
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      useNavbar: window.innerWidth < this.screenBreakpoint
    });
  };

  render() {
    // Browser globals aren't defined during gatsby build so we
    // need to make sure window is only run in the browser
    if (typeof window === 'undefined') {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <StaticQuery
          query={graphql`
            {
              allMdx(sort: { order: ASC, fields: [frontmatter___chapter] }) {
                edges {
                  node {
                    frontmatter {
                      path
                      chapter
                    }
                  }
                }
              }

              allSitePage {
                edges {
                  node {
                    path
                  }
                }
              }

              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={(data) => {
            let hidden = false;
            const { allSitePage, allMdx, site } = data;
            const title = site.siteMetadata.title;

            // Check if the current route is valid.
            // If it's not, hide the sidebar/navbar
            const currentRoute = allSitePage.edges
              .map(({ node }) => node.path)
              .filter((path) => !path.includes('404')) // '/404' is a valid route so ignore it
              .find((path) => {
                // Grab the very last part of the url
                let currentPath = window.location.pathname;
                currentPath = currentPath.substring(
                  currentPath.lastIndexOf('/')
                );

                if (currentPath.length > 1 && currentPath.endsWith('/')) {
                  currentPath = currentPath.slice(0, -1);
                }
                return currentPath === path;
              });

            hidden = currentRoute === undefined;

            return (
              <div>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                {this.state.useNavbar ? (
                  <CustomNav
                    edges={allMdx.edges}
                    hidden={hidden}
                    title={title}
                  />
                ) : (
                  <SideBar edges={allMdx.edges} hidden={hidden} />
                )}
              </div>
            );
          }}
        />
        {this.props.children}
      </div>
    );
  }
}
