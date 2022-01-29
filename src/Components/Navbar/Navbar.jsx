import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/v1"><span>v1</span></Link>
        <Link to="/"><span>Home</span></Link>
        <Link to="/v2"><span>v2</span></Link>
      </nav>
    </div>
  )
}

export default Navbar;