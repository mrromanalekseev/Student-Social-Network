import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Spinner from "../../common/spinner/Spinner";
import vikvik from '../../../assets/images/vikvik.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
         //return <Spinner /> 
         return <div className={s.item}><img src={vikvik}/> </div>   
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

        <ProfileData profile={profile}/>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>    
}


const ProfileData = ({profile}) => {

return <div>
    <div>
    <b>Full name</b>: {profile.fullName}
    </div>
    <div>
    <b>Looking for a job</b>: {profile.lookingForAJob ? "no" : "yes"}
    </div>
    { profile.lookingForAJob &&
    <div>
        <b>My professional skills</b>: {profile.lookinForAJobDescription}
    </div>
    }

    <div>
    <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
    <b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
        return<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
</div>
}  


const Contact = ({contactTitle, contactValue}) => {
return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;