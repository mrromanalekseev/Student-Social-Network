import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/spinner/Spinner";
import vikvik from '../../../assets/images/vikvik.png';
import ProfileStatus from './ProfileStatus'



const ProfileInfo = (props) => {
if (!props.profile) {
    return <Spinner />
}

    return <div>
        <div className={s.item}><img src={vikvik} /> </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={'Hello my friends'}/>
        </div>
    </div>    
}

export default ProfileInfo;