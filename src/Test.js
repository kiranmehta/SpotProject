
import 'rc-checkbox/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';

function onChange(e) {
  console.log('checkbox checked:', (e.target.checked));

}

var Test = React.createClass({
  render(props) {
    return (
        <nav>
            <input
              name="my-checkbox"
              type="checkbox"
              onChange={onChange}
            />
           {this.props.name}
        </nav>
      );
  },
});

export default Test;