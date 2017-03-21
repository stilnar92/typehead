import * as React from 'react';

import { User } from '../model';
import UserItem from './UserItem';
import Footer from './Footer';


interface MainSectionProps {
  users: User[];
  inputUser: (text: string) => any;
  clearUsers: ()=> any;
};
import {
  SHOW_ACTIVE,
  SHOW_ALL
} from '../../constants/UserFilters';

const TODO_FILTERS = {
  [SHOW_ACTIVE]: user => user.active == true,
  [SHOW_ALL]: () => true,
};

interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
     this.state = { filter: SHOW_ALL };
  }
  renderFooter() {
    const { users } = this.props;
    const { filter } = this.state;
    if (users.length) {
      return (
        <Footer filter={filter}
                onShow={this.handleShow.bind(this)} />
      );
    }
  }
  handleShow(filter) {
    this.setState({ filter });
  }
  render() {
    const { users, inputUser, clearUsers} = this.props;
    const { filter } = this.state;
    const filteredUsers = users.filter(TODO_FILTERS[filter]);
    return (
      <section className="main">
        <ul className="todo-list">
          {filteredUsers.map(user =>
            <UserItem
              key={user.id}
              user={user}
              writeUserInInput={inputUser}
              clearUsers={clearUsers}
             />
          )}
        </ul>
        {this.renderFooter()}
      </section>
    );
  }
}

export default MainSection;
