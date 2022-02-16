import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Amplify from '@aws-amplify/core'
import config from './aws-exports'

import App from './App';
import { ManageTeams } from './pages/ManageTeams'
import { FantasyTeamDetails } from './components/FantasyTeams/FantasyTeamDetails';
Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
            <Route path="/manageTeams" element={<ManageTeams />} />
            <Route path="/fantasyTeam/:id" element={<FantasyTeamDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
