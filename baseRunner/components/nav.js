import React from 'react'
import styles from './nav.module.css'
import Image from 'next/image'
import logo from '../static/logos/baserunner.svg'

import Link from 'next/link'

const links = [,
  // { href: '/player', label: 'Player' },
  { href: '/games/game-tracker', label: 'Start Game' }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav className={styles.nav}>
    <Image src={logo} alt="Logo" width={100} height={100} />
    <ul className={styles.navUl}>
      {links.map(({ key, href, label }) => (
        <Link href={href} key={key}>
          <div>{label}</div>
        </Link>
      ))}
    </ul>
  </nav>
)

export default Nav