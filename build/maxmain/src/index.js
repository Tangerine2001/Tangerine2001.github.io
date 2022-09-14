import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import MainPage from "./routes/MainPage/mainPage";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {Routes} from "react-router";
import RLAgents from "./routes/RLAgent/RLAgents";
import PacmanProjects from "./routes/PacmanProjects/PacmanProjects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/RLAgents" element={<RLAgents />} />
                <Route path="/PacmanProjects" element={<PacmanProjects />} />
            </Routes>
        </Router>
    </React.StrictMode>
);