// pages/cafes/[slug].js
import { useRouter } from 'next/router';
import cafesData from '../../cafes.json';
import styles from '../../styles/CafeDetail.module.css';

const CafeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const cafe = cafesData.find((cafe) => cafe.id === parseInt(slug));

  if (!cafe) {
    return <div>Cafe not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cafe.name}</h1>
      <img src={cafe.image} alt={cafe.name} className={styles.cafeImage} />
      <p className={styles.description}>{cafe.description}</p>
      <p className={styles.location}>Location: {cafe.location}</p>

      <h2 className={styles.menuTitle}>Menu</h2>
      <ul className={styles.menuList}>
        {cafe.menu.map((item) => (
          <li key={item.name} className={styles.menuItem}>
            <span className={styles.menuItemName}>{item.name}</span>
            <span className={styles.menuItemPrice}>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafeDetail;
