import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        /* alert('samuraijs.com'); */
        props.addPost(); // callback!!!
    } // обработчик событий

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /* console.log(text); */
        props.updateNewPostText(text); // callback!!! 
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                {/* <button onClick={ () => { alert('samuraijs.com') } }>Add post</button> */}
                <button onClick={onAddPost} >Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;