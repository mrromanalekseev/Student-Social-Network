import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/spinner/Spinner";


const ProfileInfo = (props) => {
if (!props.profile) {
    return <Spinner />
}

    return <div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>
    </div>    
}

export default ProfileInfo;