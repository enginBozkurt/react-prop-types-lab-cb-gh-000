// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class  Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Producer: {this.props.producer}</p>
        <p>hasWatermark: {this.props.hasWatermark}</p>
        <p>Color:{this.props.color}</p>
      </div>
    )
  }
}

Product.defaultProps = {
   producer: '',
   hasWatermark: false,
}

Product.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let value = props[propName];

    if(typeof(value) !== 'number') {
      console.log(value);
      return new Error('Weight must be a number');
    }

    if (value < 80 || value > 300) {
      return new Error(
        'Weight must be bewteen 80 and 300 (inclusive).'
      );
    }
  }
}

export default Product;
