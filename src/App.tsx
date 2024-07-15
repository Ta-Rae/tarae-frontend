import React from 'react';
import './global.css';
import {Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/Login/Login";
import NicknameInputScreen from "./screens/Signup/NicknameInput";

function App() {
  return (
      <Routes>
        <Route path="/" element={<NicknameInputScreen />} />
      </Routes>
  );
}

export default App;
