import React from 'react';
import 'styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/markdown.scss';
import { MDXProvider } from '@mdx-js/react';
import Table from 'react-bootstrap/Table';
import { InlineMath } from 'react-katex';

const BootstrapTable = ({ children }) => (
  <Table bordered hover responsive size="sm">
    {children}
  </Table>
);

const FormattedMath = ({ math }) => (
  <span className="inline-math">
    <InlineMath math={math} />
  </span>
);

const ResponsiveImage = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img className="img-responsive" alt="" height="100%" {...props} />
  </div>
);

const Anchor = (props) => (
  <a {...props} target="_blank" rel="noopener noreferrer" />
);

const components = {
  table: BootstrapTable,
  InlineMath: FormattedMath,
  img: ResponsiveImage,
  a: Anchor
};

// Used to wrap parsed elements from markdown to the
// components defined above
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
