import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to='/'>
          <Icon name='bell'/>
        </Link>
        <Search />
        <nav>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
          <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
        </nav>
      </div>
    </Container>

  </header>
);

export default Header;