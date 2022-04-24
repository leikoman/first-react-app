import './App.css';
import React from "react";
import SearchBar from './Components/Base/SearchBar/SearchBar';
import Logo from './Components/Base/Logo/Logo';
import Nav from './Components/Base/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photo from './Components/Photo/Photo';
import News from './Components/News/News';
import Music from './Components/Music/Music';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Logo />
                <SearchBar />
                <Nav />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile />} />
                        <Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/photo' element={<Photo />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
