import React from "react";
import './App.scss';
import ProfileMenu from "./components/Header/ProfileMenu/ProfileMenu";
import Title from "./components/Header/Title/Title";
import MainBlock from "./components/Blocks/MainBlock/MainBlock";
import Header from "./components/Header/Header";


function App() {
    return (
        <div className="app">
            <Header/>
            <MainBlock/>
        </div>
    );
}

export default App;
