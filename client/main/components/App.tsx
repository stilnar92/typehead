import { Dispatch, bindActionCreators, Action } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  searchUsers,
  inputUser,
  clearUsers,
  MainSection,
  model,
} from '../../typehead';

interface AppProps {
  users: model.User[];
  user: string;
  dispatch: Dispatch<{}>;
  searchUsers: (text: string) => any;
  inputUser: (text: string) => any;
  clearUsers: () => any;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { users, user, dispatch, searchUsers, inputUser, clearUsers } = this.props;

    return (
      <div className="todoapp">
        <Header searchUsers={searchUsers}
          inputUser={inputUser}
          user={user} />
        <MainSection users={users}
          inputUser={inputUser}
          clearUsers={clearUsers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (text: string) => {
      dispatch(searchUsers(text))
    },
    inputUser: (text: string) => {
      dispatch(inputUser(text))
    },
    clearUsers: () => {
      dispatch(clearUsers())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
