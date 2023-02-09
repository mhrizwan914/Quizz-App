import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import Signup from '../Screens/Signup/Signup';
import NavBar from '../Components/NavBar/NavBar';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <header id="page--header">
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                        <Route path="signup" element={<Signup />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default Router;