/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <button data-testid="btn-hamburger-menu" id="btn-hamburger-menu" type="button" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {open && (
        <div data-testid="hamburger-menu-wrapper" className="hamburger-menu-wrapper">
          <ul>
            <li onClick={() => history.push('/')}>
              <span style={window.location.pathname === '/' ? { fontWeight: 'bold' } : null}>HOME</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li onClick={() => history.push('/about')}>
              <span style={window.location.pathname === '/about' ? { fontWeight: 'bold' } : null}>ABOUT</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li onClick={() => history.push('/pricing')}>
              <span style={window.location.pathname === '/pricing' ? { fontWeight: 'bold' } : null}>PRICING</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li onClick={() => history.push('/contacts')}>
              <span style={window.location.pathname === '/contacts' ? { fontWeight: 'bold' } : null}>CONTACTS</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
