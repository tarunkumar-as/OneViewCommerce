import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import Button from "@material-ui/core/Button";

import { AppState } from "../../store/rootStore";
import { AppActions } from "../../store/models/actions";

import { UserPost } from "../../store/userPost/models/UserPost";
import { boundRequestUserPosts } from "../../store/userPost/UserPostAction";

import UserDetailTable from "./UserDetailTable";

interface Props {
  match: {
    params: { id: number };
  };
}

interface LinkStateProps {
  userPosts: UserPost[];
}

interface LinkDispatchProps {
  boundRequestUserPosts: (id: number) => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  userPosts: state.userPostReducer.userPosts,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  boundRequestUserPosts: bindActionCreators(boundRequestUserPosts, dispatch),
});

// const history = useHistory();

class UserDetailPage extends Component<LinkProps> {
  componentDidMount() {
    this.props.boundRequestUserPosts(this.props.match.params.id);
  }

  render() {
    const { userPosts } = this.props;

    return (
      <div>
        <Button
          onClick={() => {
            (this.props as any).history.goBack();
          }}
        >
          Back
        </Button>
        <UserDetailTable userPosts={userPosts} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);
