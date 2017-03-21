import * as React from 'react';
import SearchUsersInput from './searchUsersInput';

interface HeaderProps {
  searchUsers: (text: string) => any;
  inputUser: (text: string) => any;
  user: string
};


class Header extends React.Component<HeaderProps, void> {
  handleInputUser(text: string) {
    this.props.inputUser(text);
    this.props.searchUsers(text);
  }
  render() {
    return (
      <header className="header">
        <h1>Search</h1>
        <SearchUsersInput
            onChange={this.handleInputUser.bind(this)}
            placeholder="Search users" 
            text={this.props.user}/>
      </header> 
    );
  }
}

export default Header;
