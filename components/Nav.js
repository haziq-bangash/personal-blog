import Link from "next/link";
import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <nav>
      <Link href="/"><h1 className={styles.navbar} >Haziq Bangash - Personal Blog</h1></Link>
    </nav>
  );
}

export default Nav;