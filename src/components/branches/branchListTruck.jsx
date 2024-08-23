import Link from 'next/link';

import styles from './branchListTruck.module.css';

const BranchListTruck = ({ branches }) => {
  const maps = 'http://maps.google.com';
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link className={styles.back} href={`/truck`}>
          Back
        </Link>
        <h1>Store Branches</h1>
      </div>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {branches?.map((user, index) => {
            // const curDate = new Date(user.createdAt);
            return (
              <tr key={user.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/truck/branches/${user.username}`}
                  >
                    {user.username}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/truck/branches/${user.username}`}
                  >
                    {user.city}
                  </Link>
                </td>

                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/truck/branches/${user.username}`}
                  >
                    {user.contact}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.maps}
                    href={`${user.gmaps ? user.gmaps : maps}`}
                    target='_blank'
                  >
                    View Maps
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

export default BranchListTruck;
