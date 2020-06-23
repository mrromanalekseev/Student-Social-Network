import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    console.log(props.message);

    return <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://img.freepik.com/free-vector/viking-man-with-red-moon_3042-155.jpg?size=338&ext=jpg' />  
                    {props.message}
                    <div>
                    <span>like</span> { props.likesCount }
                    </div>
                </div>
            </div> 
}

export default Post;