import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Redirect } from 'react-router-dom'
import PostsContainer from './components/Posts/Posts';
import { getPostsThunkCreator } from './data/postsReducer'
import { getUsersThunkCreator } from './data/usersReducer'
import { getAlbumsThunkCreator, getPhotosThunkCreator } from './data/galleryReducer'
import { connect } from 'react-redux';
import Gallery from './components/Gallery/Gallery';
import Photos from './components/Gallery/Photos/Photos';
import WallContainer from './components/Wall/Wall';
import UsersContainer from './components/Users/Users';
import UserProfileContainer from './components/Users/UserProfile/UserProfile';

class App extends React.Component {
  componentDidMount() {
    this.props.getPostsThunkCreator()
    this.props.getUsersThunkCreator()
    this.props.getAlbumsThunkCreator()
    this.props.getPhotosThunkCreator()
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="appContent">
          <Redirect from='/' to='/profile' />
          <Route exact path='/profile'
            render={() => <Profile />}
          />
          <Route exact path='/news'
            render={() => <PostsContainer />}
          />
          <Route exact path='/gallery'
            render={ () => <Gallery albums={this.props.albums}/>}
          />
          <Route path='/gallery/:id'
            render={ () => <Photos photos={this.props.photos} />}
          />
          <Route exact path='/wall'
            render={ () => <WallContainer />}
          />
          <Route exact path='/users'
            render={ () => <UsersContainer />}
          />
          <Route path='/users/:id'
            render={ () => <UserProfileContainer users={this.props.users} />}
          />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    albums: state.gallery.albums,
    photos: state.gallery.photos,
    users: state.users.users
  }
}

const AppContainer = connect(
  mapStateToProps, {
    getUsersThunkCreator,
    getPostsThunkCreator,
    getAlbumsThunkCreator,
    getPhotosThunkCreator
  }
)(App)

export default AppContainer;
