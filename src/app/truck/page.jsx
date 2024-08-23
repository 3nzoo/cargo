import Link from 'next/link';
import styles from './truckPage.module.css';

const TrucksPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Link className={styles.choice} href={`/truck/branches`}>
          Branches
        </Link>

        <Link className={styles.choiceB} href={`/truck/deliveries`}>
          My Deliveries
        </Link>
      </div>
    </div>
  );
};

export default TrucksPage;
