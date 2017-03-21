import * as React from 'react';
import * as classNames from 'classnames';


interface SearchUsersInputProps {
  onChange: (text:string)=>void;
  text?: string;
  placeholder?: string,
}

class SearchUsersInput extends React.Component<SearchUsersInputProps, void> {
  constructor(props, context) {
    super(props, context);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input 
        className='new-todo'
        type="text" 
        value={this.props.text}
        placeholder={this.props.placeholder}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}


export default SearchUsersInput;
