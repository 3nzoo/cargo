'use client';

import { addUser } from '@/lib/action';
import styles from './adminUserForm.module.css';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const router = useRouter();

  if (state?.success) {
    setTimeout(() => {
      router.replace('/');
    }, 1500);
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <form action={formAction} className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back} onClick={handleBack}>
          BACK
        </button>
      </div>
      <h1>Add New Truck</h1>
      <input type='text' name='username' placeholder='Username' />
      <input type='text' name='name' placeholder='Contact Person' />
      <input type='password' name='password' placeholder='Password' />
      <input type='text' name='contact' placeholder='Contact Number' />
      <button className={styles.add}>Add Truck </button>
      <button className={styles.close} onClick={handleBack}>
        Cancel
      </button>
      {state?.success && <h2>Branch Added</h2>}
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
