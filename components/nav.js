import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Nav = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/blog'><a>Blog</a></Link></li>
        <li><Link href='/users'><a>Users</a></Link></li>
        <li><Link href='/docs'><a>Docs</a></Link></li>
      </ul>
    </nav>
  )
}

export default Nav
