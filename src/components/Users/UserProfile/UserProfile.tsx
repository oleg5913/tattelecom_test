import './UserProfile.css'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { userInterface } from '../../../types/types'
import { FC } from 'react'

type propsType = RouteComponentProps & {
    users: Array<userInterface>
    match: any
}

const UserProfile: FC<propsType> = (props) => {
    const id = props.match.params.id
    const profile: any = props.users.find((user: userInterface) => user.id == id)
    return (
        <div className="profileWrap">
            <div className="profile">
                <div className="accountInfo">
                    <p className="profileInfoTitle">Информация об аккаунте</p>
                    <div className="profileInfo">
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Имя</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.name}</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Телефон</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Логин</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.username}</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Эл. почта</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="profileInfoTitle">Информация о профиле</p>
                    <div className="profileInfo">
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Город</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.address.city}</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Улица</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.address.street}</p>
                                </div>
                            </div>
                        </div>
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Место работы</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>{profile.company.name}</p>
                                </div>
                            </div>
                            <div className="profileInfoItem" id="lastItem">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(UserProfile)