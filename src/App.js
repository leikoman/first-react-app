import './App.css';
import React from "react";
import SearchBar from './Components/Base/SearchBar/SearchBar';
import Logo from './Components/Base/Logo/Logo';
import Nav from './Components/Base/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Photo from './Components/Profile/Photo/Photo';
import Bio from './Components/Profile/Bio/Bio';


const App = () => {
  return (
    <div className="app-wrapper">
      <Logo />
      <SearchBar />
      <Photo />
      <Bio />
      <Nav />
      <Profile/>
    </div>
  );
}

export default App;
