import React from 'react';
import './global.css';
import {Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/Login/Login";
import NicknameInputScreen from "./screens/Signup/NicknameInput";
import CountrySelectScreen from "./screens/Signup/CountrySelect";

function App() {
  return (
      <Routes>
          <Route path="/" element={<CountrySelectScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register/nickname' element={<NicknameInputScreen />} />
          <Route path='/register/country' element={<CountrySelectScreen />} />
      </Routes>
  );
}

export default App;
