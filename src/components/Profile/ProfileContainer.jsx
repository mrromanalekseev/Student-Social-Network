import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

componentDidMount () {
    /* debugger;  */
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 1059;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
        this.props.setUserProfile(response.data);
    });
}

    render() {
        /* debugger  */
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);