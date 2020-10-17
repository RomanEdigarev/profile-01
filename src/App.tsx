import React from "react";
import './App.scss';
import ProfileMenu from "./components/Header/ProfileMenu/ProfileMenu";
import Title from "./components/Header/Title/Title";


function App() {
  return (
    <div className="app">
      <div className="app__header">
          <ProfileMenu/>
          <Title/>
      </div>
    </div>
  );
}

export default App;
