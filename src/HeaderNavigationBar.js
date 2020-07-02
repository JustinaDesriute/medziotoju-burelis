import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ApieMus from './pages/ApieMus';
import Dokumentai from './pages/Dokumentai';
import Kontaktai from './pages/Kontaktai';
import Galerija from './pages/Galerija';
import Nariai from './pages/Nariai';
import logo from './logo.jpg';

class HeaderNavigationBar extends Component {

    componentDidMount(){
    }

  render() {

    return (
      <div className="content-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="nav-container">
            <div className="navigation-link-container">
                <Link
                    to='/apiemus'
                    className='nav-link'>APIE MUS
                </Link>
            </div>
                <div className="navigation-link-container">
                    <Link
                        to='/nariai'
                        className='nav-link'>NARIAI
                </Link>
                </div>
            <div className="navigation-link-container">
                <Link
                    to='/dokumentai'
                    className='nav-link'>DOKUMENTAI
                </Link>
            </div>
            <div className="navigation-link-container">
                <Link
                    to='/galerija'
                    className='nav-link'>GALERIJA
                </Link>
            </div>
            <div className="navigation-link-container">
                <Link
                    to='/kontaktai'
                    className='nav-link'>KONTAKTAI
                </Link>
            </div>
        </div>
            <Route exact path='/' render={() => (
                <ApieMus/>
            )} />
            <Route exact path='/nariai' render={() => (
                <Nariai />
            )} />
              <Route exact path='/apiemus' render={() => (
                <ApieMus/>
            )} />
            <Route exact path='/dokumentai' render={() => (
                <Dokumentai/>
            )} />
            <Route exact path='/galerija' render={() => (
                <Galerija/>
            )} />
            <Route exact path='/kontaktai' render={() => (
                <Kontaktai/>
            )} />
      </div>
    //   </div>
    )
  }
}

export default HeaderNavigationBar