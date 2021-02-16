import React, { FC, useState } from 'react'
import './Post.css'

interface propsInterface {
    name: string,
    userName: string,
    body: string,
    id: number,
    userId: number
}

const Post: FC<propsInterface> = (props) => {
    const [isLiked, setLike] = useState(false)
    const handleClick = () => {
        setLike(!isLiked)
    }
    return(
        <div className="post">
            <div className="postHead">
                <img src="./img/userIcon.png"/>
                <div className="postAboutUser">
                    <p>{props.name}</p>
                    <p>{props.userName}</p>
                </div>
            </div>
            <div className="postContent">
                <p>{props.body}</p>
            </div>
            <div className="postActions">
                <img src={ isLiked ? './img/likeIconRed.png' : './img/likeIconBlack.png'} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Post