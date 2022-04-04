import './App.css';
import React from "react";
import SearchBar from './Components/Base/SearchBar/SearchBar';
import Logo from './Components/Base/Logo/Logo';
import Nav from './Components/Base/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className="app-wrapper">
      <Logo />
      <SearchBar />
      <Nav />
      <div className='app-wrapper-content'>
        <Profile />
      </div>
    </div>
  );
}

export default App;
