import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { newPostThunkCreator } from '../../data/postsReducer'
import { requiredField } from '../../utils/validator'
import { Input } from '../common/FormsControl'
import MyPost from './MyPost'
import './Wall.css'

const NewPostForm = (props) => {
    return (
        <form className='newPostForm' onSubmit={props.handleSubmit}>
            <div>
                <div className="formHead">
                    <img src="./img/myAva.png" />
                    <div>
                        <p className="myCardName">Порошин О.</p>
                        <p className="myCardSpec">Web Dev.</p>
                    </div>
                </div>
            </div>
            <div className="newPostFormInput">
            <Field
                className="newPostInput"
                name="newPost"
                component={Input}
                placeholder="Что нового?"
                validate={requiredField}
                type="text"
            />
             <button className="sendPostButton">Отправить сообщение</button>
            </div>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'NewPostForm' })(NewPostForm)

const Wall = (props) => {
    let addPost = (values, dispatch) => {
        props.newPostThunkCreator(props.posts.length + 1, values.newPost)
        dispatch(reset('NewPostForm'))
    }
    return (
        <div className="wallWrap">
            <div className="wall">
                <ReduxNewPostForm onSubmit={addPost} />
                <div className="myPosts">
                    {props.myPosts.map(post => {
                        return (
                            <MyPost 
                                body={post.text}
                                key={post.id}
                            />
                        )
                    }).reverse()}
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myPosts: state.posts.myPosts,
        posts: state.posts.posts
    }
}

const WallContainer = connect(
    mapStateToProps, {
    newPostThunkCreator
})(Wall)

export default WallContainer