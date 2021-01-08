import React from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/spinner/Spinner";
import vikvik from '../../../assets/images/vikvik.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
if (!profile) {
    return<div className={s.item}><img src={vikvik}/> </div>
    /* <Spinner /> */
}

const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        savePhoto(e.target.files[0]);
    }
}

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

<div>
    <div>
    <b>Full name</b>: {profile.fullName}
    </div>
    <div>
    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    { profile.lookingForAJob &&
    <div>
        <b>My professional skills</b>: {profile.lookinForAJobDescription}
    </div>
    }
    <div>
    <b>About me</b>: {profile.aboutMe}
    </div>
</div>


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>    
}

export default ProfileInfo;