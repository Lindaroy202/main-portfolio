import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container" id={ props.id || ''}>
            <Header />
            <Profile />
            <Footer /> 
            <div className='icon'>
            <a href='https://www.facebook.com/lindy.roy.9' className='facebook'><i className='fa fa-facebook-f'></i> Facebook </a>
            <a href='https://www.instagram.com/lindyroy/' className='instagram'> <i className='fa fa-instagram'></i>Instagram</a>
             <a href='https://twitter.com/LindaRo99893626' className='twitter'> <i className='fa fa-twitter'></i> twitter </a>
            
          </div>
        </div>
    )
}

export default Home;