import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile';
import Users from './pages/Users/Users';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Notifications from './pages/Notifications/Notifications';
import Advances from './pages/Advances/Advances';
import AdvanceDetails from './pages/Advances/AdvanceDetails';
import WaitingPage from './components/WaitingPage';

import { ApolloProvider } from '@apollo/client';
import client from './client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/editProfile" element={<Profile/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/projectDetails" element={<ProjectDetails/>}/>
          <Route exact path="/notifications" element={<Notifications/>}/>
          <Route exact path="/advances" element={<Advances/>}/>
          <Route exact path="/advanceDetails" element={<AdvanceDetails/>}/>
          <Route exact path="/waitingPage" element={<WaitingPage/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

