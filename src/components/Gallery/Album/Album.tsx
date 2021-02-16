import { FC, useState } from "react"
import { NavLink } from 'react-router-dom'
import { albumInterface } from "../../../types/types"
import './Album.css'

const Album: FC<albumInterface> = (props) => {
    const [isLiked, setLike] = useState<boolean>(false)
    const handleClick = () => {
        setLike(!isLiked)
    }
    return (
        <div className="album">
            <NavLink to={"/gallery/" + props.id}>
                <div className="albumCover">

                </div>
            </NavLink>
            <div className="albumDescription">
                <p>{props.title}</p>
                <img src={isLiked ? './img/likeIconRed.png' : './img/likeIconBlack.png'} onClick={handleClick} />
            </div>
        </div>
    )
}

export default Album