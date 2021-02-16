import './User.css'
import { NavLink } from 'react-router-dom'

const User = (props) => {
    return (
        <NavLink to={'/users/'+ props.id}>
        <div className="user">
            <img src="./img/userIcon.png" />
            <div>
                <p className="myCardName">{props.name}</p>
                <p className="myCardSpec">{props.userName}</p>
            </div>
        </div>
        </NavLink>
    )
}

export default User