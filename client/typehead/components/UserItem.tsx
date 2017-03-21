import * as React from 'react';
import { User } from '../model';
import {
  SELECT_COLOR,
  UNSELECT_COLOR
} from '../../constants/core';
interface UserItemProps {
  user: User;
  writeUserInInput: (text: string) => any;
  clearUsers: ()=> any;
}

class UserItem extends React.Component<UserItemProps, void> {
  constructor(props, context) {
    super(props, context);
  }
  handleSelectUser(e) {
    this.props.writeUserInInput(this.props.user.username);
    this.props.clearUsers();
  }
  handleMouseOver(e) {
    e.preventDefault();
    e.target.closest('li').style.background=SELECT_COLOR;
  }
  handleonMouseOut(e) { 
    e.preventDefault();   
    e.target.closest('li').style.background=UNSELECT_COLOR;
  }
  render() {
    const {user} = this.props;
    let element;
    element = (
      <div className="view">
        <label >
          {user.username}
        </label>
      </div>
    );
    return (
      <li onClick = {this.handleSelectUser.bind(this)} 
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleonMouseOut.bind(this)} >{element}</li>
    );
  }
}

export default UserItem;
