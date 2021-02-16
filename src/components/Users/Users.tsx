import { FC } from 'react'
import { connect } from 'react-redux'
import { appStateType } from '../../data/rootReducer'
import { userInterface } from '../../types/types'
import User from './User/User'
import './Users.css'

interface propsInterface {
    users: Array<userInterface>,
}

const Users: FC<propsInterface> = (props) => {
    return (
        <div className="usersWrap">
            <div className="users">
                {props.users.map((user: userInterface) => {
                    return (
                        <User
                            name={user.name}
                            userName={user.username}
                            id={user.id}
                            key={user.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

let mapStateToProps = (state: appStateType): propsInterface => {
    return {
        users: state.users.users
    }
}

const UsersContainer = connect<propsInterface, null, null, appStateType>(
    mapStateToProps)(Users)


export default UsersContainer