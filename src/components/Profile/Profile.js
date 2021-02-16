import React from 'react'
import './Profile.css'

const Profile = () => {
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
                                    <p>Олег</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Фамилия</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>Порошин</p>
                                </div>
                            </div>
                        </div>
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Логин</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>@oleg_5913</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Эл. почта</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>olegporoshin1906@gmail.com</p>
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
                                    <p>Казань</p>
                                </div>
                            </div>
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Страна</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>Россия</p>
                                </div>
                            </div>
                        </div>
                        <div className="profileInfoRow">
                            <div className="profileInfoItem">
                                <div className="profileInfoItemName">
                                    <p>Место работы</p>
                                </div>
                                <div className="profileInfoItemValue">
                                    <p>Казань, ПАО "Таттелеком"</p>
                                </div>
                            </div>
                            <div className="profileInfoItem" id="lastItem">
                                <p>Закрытый профиль?</p>
                                <div className="button r" id="button-1">
                                    <input type="checkbox" className="checkbox" />
                                    <div className="knobs"></div>
                                    <div className="layer"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile