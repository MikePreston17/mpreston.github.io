import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const SlantedNavbar = () => (

    <div className="container">
        <div className="navigation-wrapper">
            <div className="navigation-button">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navigation-menu">

                <ul>
                    {/* <li><Link to="/">HOME</Link></li>
                    <li><Link to="/projects">GALLERY</Link>{' '}</li>
                    <li><Link to="/contact">CONTACT</Link>{' '}</li>
                    <li><Link to="/aboutme">ABOUT</Link>{' '}</li>
                    <li><Link to="/resume">RESUME</Link>{' '}</li> */}

                    <Link to="/">HOME</Link>
                    <Link to="/projects">GALLERY</Link>{' '}
                    <Link to="/contact">CONTACT</Link>{' '}
                    <Link to="/aboutme">ABOUT</Link>{' '}
                    <Link to="/resume">RESUME</Link>{' '}

                    {/* <ListItem component={Link} to="/" button>HOME</ListItem>
                    <ListItem component={Link} to="/projects" button>GALLERY</ListItem>
                    <ListItem component={Link} to="/contact" button>CONTACT ME</ListItem> */}

                    {/* <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                    <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                    <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                    <ListItem component={Link} to="/contact" button>CONTACT</ListItem> */}

                </ul>
            </div>
        </div>
    </div>
)

export default SlantedNavbar;