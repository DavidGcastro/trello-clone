import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="wrapper notFound">
      <div style={{ height: 150 }}>
        <span className="text--large--bold" style={{ letterSpacing: 5 }}>
          Lost? <Link className="underlinedLink" to="/">Take me home.</Link>
        </span>
      </div>

      <img style={{ maxWidth: 300 }} src="/assets/images/lost.png" />
    </div>
  );
};

export default PageNotFound;
