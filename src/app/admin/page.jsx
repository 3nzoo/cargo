import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminUsers from '@/components/adminUsers/adminUsers';
import { auth } from '@/lib/auth';
import Loading from '../loading';
import Link from 'next/link';

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <h2>
        Hi <strong>{session?.user?.username?.toUpperCase()}</strong>
      </h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminPosts />
          </Suspense>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.colHeader}>
          <Link href={'/admin/truck/new'}>Add Truck</Link>
        </div>

        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminUsers />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
