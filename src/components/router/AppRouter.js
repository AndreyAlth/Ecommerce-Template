import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../login/Login';
import DashboardRoute from './DashboardRoute';

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={ <Login/>}/>
                <Route path="/*" element={<DashboardRoute/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;
