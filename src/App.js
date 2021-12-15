import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link classname="link" to="login">Log In</Link>
          <Link classname="link" to="friends">Friends List</Link>
          <Link classname="link" to="friends/add">Add Friend</Link>
          <Link classname="link" to="friends">Log Out</Link>
        </header>
        <Route exact path="/" >
          <Login/>
        </Route>
        <Route exact path="/login" >
          <Redirect to="/"/>
        </Route>
        <Route exact path="/friends" >
          <FriendsList/>
        </Route>
        <Route exact path="/friends/add" >
          <AddFriend/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
