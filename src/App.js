import { React}  from 'react';
import './App.css';
import Header from './components/header/Header';
//import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets'


function App() {

  return (
    <div className="app">
      <Header/>
      {/*{!user ?
      (<Login/>)
      :
      (*/}
      <div className='app-body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      {/*)}*/}
    </div>
  );
}

export default App;
