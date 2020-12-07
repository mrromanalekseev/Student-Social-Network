import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/spinner/Spinner";
import vikvik from '../../../assets/images/vikvik.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileStatus from './ProfileStatus'



const ProfileInfo = ({profile, status, updateStatus}) => {
if (!profile) {
    return <Spinner />
}

    return <div>
        <div className={s.item}><img src={vikvik} /> </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>    
}

export default ProfileInfo;