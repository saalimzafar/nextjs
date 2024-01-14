// pages/index.js
import Link from 'next/link';
import cafesData from '../cafes.json';
import styles from '../styles/Cafes.module.css';

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>Cafe Directory</h1>
      <ul className={styles.cafeList}>
        {cafesData.map(cafe => (
          <li key={cafe.id} className={styles.cafeListItem}>
            <Link href={`/cafes/${cafe.id}`} legacyBehavior>
              <a>
                <img src={cafe.image} alt={cafe.name} className={styles.cafeImage} />
                <div className={styles.cafeDetails}>
                  <h2 className={styles.cafeName}>{cafe.name}</h2>
                  <p className={styles.cafeDescription}>{cafe.description}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
