import Navbar from '../Navbar/Navbar'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home_div}>
      <header className={styles.Home_header}>
        <Navbar />
        <h1 className={styles.Home_title}>Multi Select</h1>
      </header>
    </div>
  );
}

export default Home;