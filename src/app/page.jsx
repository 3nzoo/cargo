import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';
import LoginForm from '@/components/loginForm/loginForm';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
