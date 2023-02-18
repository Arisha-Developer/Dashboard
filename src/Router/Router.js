import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Dashlayout from '../NavDashboard/Dashlayout';
import News from '../NavDashboard/Rootlayout';
import Message from '../Screen/Dashboard/Message';
import Notification from '../Screen/Dashboard/Notification';
import Home from '../Screen/Home';
import Signup from '../Screen/Signup';


const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<News/>}>
<Route index element={<Signup/>}/>
<Route path='home' element={<Home/>}/>
<Route path='dashboard' element={Dashlayout}>
    <Route path='message' element={<Message/>}/>
    <Route path='notification' element={<Notification/>}/>
    <Route />
</Route>
        </Route>
        
    )
)
function Router() {
  return (
    <div>
      
    </div>
  );
}

export default Router;
