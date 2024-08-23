import { getUserBySlug } from '@/lib/data';
import styles from './adminUsers.module.css';
import Link from 'next/link';

// ! convert into table with click open page[slug] button

const AdminUser = async (user) => {
  return (
    <div className={styles.container}>
      <h1> Truck Details</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>CONTACT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.username.username}</td>
            <td>{user.username.name?.toUpperCase()}</td>
            <td>{user.username.contact}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
