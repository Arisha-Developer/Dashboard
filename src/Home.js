import React from 'react';
import Main from './main';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      
      <h2>
        Home
        <button className="butn-field" onClick={() => navigate("/main")}>Main</button>
      </h2>
      
    </div>
  );
}

export default Home;
