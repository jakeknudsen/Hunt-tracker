import React from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
import logo from '../assets/logos/baserunner.svg';

import Link from 'next/link';

const links = [
  ,
  { href: '/', label: 'settings' },
  { href: '/', label: 'help' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = () => (
  <nav className={styles.nav}>
    <Link href={'/'} className={styles.logoLink}>
      <Image src={logo} alt="Logo" width={100} height={100} />
    </Link>
    <ul className={styles.navUl}>
      {links.map(({ key, href, label }) => (
        <div className={styles.navItem}>
          <Link href={href} key={key}>
            <div>{label}</div>
          </Link>
        </div>
      ))}
    </ul>
  </nav>
);

export default Nav;
