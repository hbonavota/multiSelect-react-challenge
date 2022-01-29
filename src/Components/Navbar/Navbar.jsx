import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/v1"><span>DEMO</span></Link>
        <Link to="/"><span>Home</span></Link>
      </nav>
    </div>
  )
}

export default Navbar;