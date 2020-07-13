import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from '../../components';

import './Topbar.scss';

const Topbar = () => {
  const user = useSelector(state => state.user);

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <span className="user__name">{user.name}</span>

          <figure className="user__thumb">
            {user.thumb ? <img src={user.thumb} alt={`usuário sem foto de perfil`} /> : <img src="https://i.imgur.com/4Wxi0hV.png" alt={`foto de perfil de ${user.name}`} />}
            
          </figure>
        </div>
      </div>
    </header>
  )
}

export default Topbar;