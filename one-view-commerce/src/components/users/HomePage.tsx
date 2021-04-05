import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import SearchBar from "material-ui-search-bar";

import { AppState } from "../../store/rootStore";
import { AppActions } from "../../store/models/actions";

import { User } from "../../store/user/models/User";
import { boundRequestUsers } from "../../store/user/UserAction";

import UsersTable from "./UsersTable";

interface Props {
  searchText: string;
}

interface LinkStateProps {
  users: User[];
}

interface LinkDispatchProps {
  boundRequestUsers: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  boundRequestUsers: bindActionCreators(boundRequestUsers, dispatch),
});

class HomePage extends Component<LinkProps, Props> {
  constructor(props: LinkProps) {
    super(props);
    this.state = { searchText: "" };
  }

  componentDidMount() {
    this.props.boundRequestUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <SearchBar
          data-testid="users-search"
          value={this.state.searchText}
          onChange={(newValue) => {
            this.setState({ searchText: newValue });
          }}
          onCancelSearch={() => {
            this.setState({ searchText: "" });
          }}
        />
        <UsersTable
          data-testid="users-table"
          users={users}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
