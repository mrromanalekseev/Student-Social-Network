import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
<form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                 validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPosts = React.memo (props => {
        console.log("Render Yo")

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText); 
    }  

    /* class MyPosts extends PureComponent {

         shouldComponentUpdate(nextProps, nextState) {
            return nextProps != this.props || nextState != this.state;
        } */

       /*  render () {
            console.log("Render Yo")

        let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    
        let newPostElement = React.createRef();
    
        let onAddPost = (values) => {
            this.props.addPost(values.newPostText); 
        } 
 */
    return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
    )
});



const AddNewPostReduxForm = reduxForm ({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;