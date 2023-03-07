import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';


function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header/>
      {!user ?
      (<Login/>)
      :
      (
      <div className='app-body'>
        <Sidebar/>
        <Feed/>
      </div>
      )}
    </div>
  );
}

export default App;
