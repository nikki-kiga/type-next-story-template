import * as React from 'react';
import NavBar from './NavBar';
import Toggle from './Toggle';
import { useTheme } from '../providers/ThemeProvider';

import styles from '../styles/2-components/header.module.scss';

const Header = (): JSX.Element => {
  const { theme, toggle } = useTheme();
  const darkOn = theme === 'dark' ? false : true;
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <div className={styles.logo}>
          <div className={styles.titleMain}>
            <span>N</span>
            <span>|</span>
            <span>K</span>
          </div>
          <span className={styles.titleSub}></span>
        </div>
        <div className={styles.controls}>
          <Toggle
            onChange={() => toggle()}
            style="toggle"
            label="Dark Mode"
            checked={darkOn}
          />
          <NavBar
            links={[
              { pathName: 'Home', path: '/' },
              { pathName: 'About', path: '/about' },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
