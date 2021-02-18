import { FC } from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm, reset } from 'redux-form'
import { newPostThunkCreator } from '../../data/postsReducer'
import { appStateType } from '../../data/rootReducer'
import { myPostInterface, postInterface } from '../../types/types'
import { requiredField } from '../../utils/validator'
import { Input } from '../common/FormsControl'
import MyPost from './MyPost'
import './Wall.css'

interface newPostFormValuesInterface {
    newPost: string
}

const NewPostForm: FC<InjectedFormProps<newPostFormValuesInterface>> = (props) => {
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

const ReduxNewPostForm = reduxForm<newPostFormValuesInterface>({ form: 'NewPostForm' })(NewPostForm)

const Wall: FC<mapStateToPropsInterface & mapDispatchToPropsInterface> = (props) => {
    let addPost = (values: any, dispatch: any) => {
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

interface mapStateToPropsInterface {
    myPosts: Array<myPostInterface>
    posts: Array<postInterface>
}

interface mapDispatchToPropsInterface {
    newPostThunkCreator: (id: number, body: string) => void
}

let mapStateToProps = (state: appStateType) => {
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