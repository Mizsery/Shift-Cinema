import { Link } from '@tanstack/react-router';

import { Container } from '../Container/Container';

import styles from './Header.module.scss';

import Logo from '@/assets/icons/logo.svg?react';
import SignIn from '@/assets/icons/SignIn.svg?react';
import Ticket from '@/assets/icons/Ticket.svg?react';
import User from '@/assets/icons/User.svg?react';

export const Header = () => {
  return (
    <>
      <Container component='header' className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navSection}>
            <Link to='/' className={styles.logoContainer}>
              <div>
                <p>Шифт</p>
                <p>Cinema</p>
              </div>
              <Logo className={styles.logo} />
            </Link>
            <Link to='/profile'>
              <User />
              <p>Профиль</p>
            </Link>
            <Link to='/tickets'>
              <Ticket />
              <p>Билеты</p>
            </Link>
          </div>

          <div className={styles.navSection}>
            <Link to='/auth'>
              <SignIn fill='#712d9c' />
              <p>Вход</p>
            </Link>
          </div>
        </nav>
      </Container>
      <hr />
    </>
  );
};
