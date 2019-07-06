import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import globals from 'styles/global.scss';
import styled from 'styled-components';

const screenBreakpoint = parseInt(globals.screenBreakpoint);

const ChapterContainer = styled.div`
  @media screen and (min-width: ${screenBreakpoint}px) {
    padding: 24px 32px 0px calc(${globals.sidebarWidth} + 32px) !important;
  }

  @media screen and (max-width: ${screenBreakpoint - 1}px) {
    padding: 24px !important;
  }
`;

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usingNav: false
    };
  }

  componentDidMount() {
    this.setState({
      usingNav: window.innerWidth < screenBreakpoint
    });
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      usingNav: window.innerWidth < screenBreakpoint
    });
  };

  render() {
    const mdx = this.props.data.mdx;
    const className = this.state.usingNav ? 'container' : 'container-fluid';

    return (
      <ChapterContainer className={className}>
        <h1>{mdx.frontmatter.title}</h1>
        <hr />
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </ChapterContainer>
    );
  }
}

export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
      }
      frontmatter {
        title
        path
        chapter
      }
    }
  }
`;
