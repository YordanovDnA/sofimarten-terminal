import React from 'react';
import { useHistory } from 'react-router-dom';
import './Style/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../HamburgerMenu';
import useDisplay from '../../utils/useDisplay/index';
import Logo from '../../assets/imgs/wizard.png';

const Navigation = () => {
  const display = useDisplay();
  const history = useHistory();

  return (
    <div data-testid="nav-desktop" className="nav-desktop">
      {display === 's' && <HamburgerMenu /> }
      {display === 'm' && <HamburgerMenu /> }
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt="Jaguar logo" />
      </div>
      <nav>
        {display === 'l' && (
        <ul className="nav-elements-left">
          <li>
            <button style={window.location.pathname === '/' ? { fontWeight: 'bold' } : null} onClick={() => history.push('/')} type="button">HOME</button>
          </li>
          <li>
            <button style={window.location.pathname === '/about' ? { fontWeight: 'bold' } : null} onClick={() => history.push('/about')} type="button">ABOUT</button>
          </li>
          <li>
            <button style={window.location.pathname === '/pricing' ? { fontWeight: 'bold' } : null} onClick={() => history.push('/pricing')} type="button">PRICING</button>
          </li>
          <li>
            <button style={window.location.pathname === '/contacts' ? { fontWeight: 'bold' } : null} onClick={() => history.push('/contacts')} type="button">CONTACTS</button>
          </li>
        </ul>
        )}
        <ul className="nav-elements-right">
          <li><FontAwesomeIcon data-testingid="btn-search" icon={faSearch} /></li>
          <li><FontAwesomeIcon data-testingid="btn-location" icon={faMapMarkerAlt} /></li>
          <li><FontAwesomeIcon data-testingid="btn-user-profile" icon={faUser} /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
