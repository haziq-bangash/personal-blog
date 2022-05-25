
import React from 'react'
import Link from "next/link";
import styles from '../styles/Nav.module.css';

const Footer = () => {
  return (
    <footer>
      <Link href="https://haziqbangash.com/"><h2 className={styles.footer} >Copyrights Ⓒ Haziq Bangash<br />2022</h2></Link>
    </footer>
  )
}

export default Footer