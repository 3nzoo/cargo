import { getBranchPosts } from '@/lib/data';
import styles from './branchPosts.module.css';
import Link from 'next/link';

const BranchPosts = async ({ username }) => {
  const posts = await getBranchPosts(username);

  return (
    <div className={styles.container}>
      <h1>Deliveries</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>Name</th>
            <th>Distance</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Item Category</th>
            <th>Status</th>
            <th>Truck No.</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, index) => {
            return (
              <tr key={post.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.name}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>
                    {post.distance} {post.distance > 0 ? 'km' : ''}
                  </Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.address}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.contact}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>
                    {post.item_category}
                  </Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.status}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>
                    {post.truck_number}
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

export default BranchPosts;
