import React from 'react';
import DropdownInput from 'react-dropdown-input2';

class ChooseName extends React.Component {

    static propTypes = {
      lookupText: React.PropTypes.string,
      options: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
    }

    state = {
      nameText: null
    }

    handleSelect = (choice) => {
      // returns choice.value and choice.index
      if (choice.index>=0) {
        this.setState({nameText: choice.value + ' is a nice choice'});
      } else {
        this.setState({nameText: choice.value + ' isn\'t on the list!'});
      }
    }

    render() {
      return (
        <div>
          <DropdownInput
            menuClassName='dropdown-input'
            onSelect={this.handleSelect}
            defaultValue={this.props.lookupText}
            placeholder='Search...'
            options={this.props.options}
            max={12}
          />
          </div>
      );
    }
}

export default ChooseName;
