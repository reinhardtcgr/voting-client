import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

// Earlier we discussed how it's generally a good idea 
// to use the pure render mixin across all components. 
// The App component is an exception to this rule
// The reason is that it would cause route changes not to fire, 
// because of an implementation issue between the router and React itself. 
// This situation may well change in the near future
export default React.createClass({
  render: function() {

    // component does nothing except render its child components, 
    // expected to be given in as the children prop
    // This is something that the react-router package (in index.jsx) does for us
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
