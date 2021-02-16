import { connect } from 'react-redux'
import React, { FC } from 'react'
import Post from './Post/Post'
import './Posts.css'
import { postInterface, userInterface } from '../../types/types'
import { appStateType } from '../../data/rootReducer'

interface propsInterface {
    posts: Array<postInterface>, 
    users: Array<userInterface>
}

const Posts: FC<propsInterface> = (props) => {
        return (
            <div className="postsWrap">
                <div className="posts">
                    {props.posts.map((post: any) => {
                        let userData: any = props.users.find((user: any): boolean => user.id == post.userId)
                        let filteredUserData = {
                            name: userData.name,
                            userName: userData.username
                        }
                        return (
                            <Post
                                id={post.id}
                                key={post.id}
                                name={filteredUserData.name}
                                userName={filteredUserData.userName}
                                userId={post.userId}
                                body={post.body}
                            />
                        )
                    })}
                </div>
            </div>
        )
}

let mapStateToProps = (state: appStateType): propsInterface => {
    return {
        posts: state.posts.posts,
        users: state.users.users
    }
}

const PostsContainer = connect<propsInterface, null, null, appStateType>(
    mapStateToProps)(Posts)

export default PostsContainer
