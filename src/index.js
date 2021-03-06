import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';

var projects = require('./data/projects.json');
// console.log('projects:', projects)

/** Pinging my projects by url so they are ready */
function pingAll(urls) {
    if (!urls || urls.length === 0 || urls.some(url => !url)) {
        console.log('Could not find urls or some loaded as null!')
        return;
    }

    // console.log('finding urls: ', urls);
    axios.all([
        urls.map(url => axios.get(url))
    ])
        // .then(function (response) {
            // console.log(response);
        // })
        .catch(function (error) {
            console.log(error);
        });
}

pingAll(projects.map(p => p.liveLink));

/** Main Render */
ReactDOM.render(
    <Router>
        <App projects={projects} />
    </Router>,
    document.getElementById('root')
);

/**  Slider Animations */
var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;

function openMenu(event) {
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
        //TODO: (optional) Hide Nav Menu, unhide when transition is away.
    }
}

navButton.addEventListener('click', openMenu, false);
//TODO: Add a button the the navbar for closing, instead of just anywhere in the window!
win.addEventListener('click', closeMenu, false);