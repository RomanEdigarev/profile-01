import React from "react";
import './App.scss';
import ProfileMenu from "./components/Header/ProfileMenu/ProfileMenu";
import Title from "./components/Header/Title/Title";
import MainBlock from "./components/Content/Blocks/MainBlock/MainBlock";
import Header from "./components/Header/Header";
import InfoBlock from "./components/Content/Blocks/InfoBlock/InfoBlock";
import Content from "./components/Content/Content";


function App() {
    return (
        <div className="app">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
