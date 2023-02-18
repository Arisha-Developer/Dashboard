import React, { useState } from "react";
import Messages from "./NavDashboard/Dashlayout";
import News from "./NavDashboard/Rootlayout";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const location =useLocation()

    return (
        <>
            <p>Main</p>
            <div className="Login-page">
                <div className="login-btn">
                    <button className="butn-field" onClick={() => navigate("/message")}>Messages</button>
                    <button className="butn-field" onClick={() => navigate("/news")}>News</button>
                </div>
                {location.pathname === "/message" ? <Messages /> : location.pathname==="news"? <News/> : <Main/>}
            </div>

        </>
    )
}
export default Main;


