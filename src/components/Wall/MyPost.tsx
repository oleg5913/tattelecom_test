import React, { FC, useState } from 'react'
import './MyPost.css'

interface propsInterface {
    body: string
}

const MyPost: FC<propsInterface> = (props) => {
    const [isLiked, setLike] = useState<boolean>(false)
    const handleClick = () => {
        setLike(!isLiked)
    }
    return(
        <div className="myPost">
            <div className="myPostHead">
                <img src="./img/myAva.png"/>
                <div className="myPostAboutUser">
                    <p>Порошин О.</p>
                    <p>@oleg_5913</p>
                </div>
            </div>
            <div className="myPostContent">
                <p>{props.body}</p>
            </div>
            <div className="myPostActions">
                <img src={ isLiked ? './img/likeIconRed.png' : './img/likeIconBlack.png'} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default MyPost