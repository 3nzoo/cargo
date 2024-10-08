import { getUsers } from '@/lib/data';
import styles from './adminUsers.module.css';
import Link from 'next/link';

// ! convert into table with click open page[slug] button

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Trucks</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>username</th>
            <th>name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            // const curDate = new Date(user.createdAt);
            return (
              <tr key={user.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/truck/${user.username}`}
                  >
                    {user.username}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/truck/${user.username}`}
                  >
                    {user.name}
                  </Link>
                </td>

                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/truck/${user.username}`}
                  >
                    {user.contact}{' '}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
