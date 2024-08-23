'use client';

import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <h1> Login Account</h1>
      <input
        type='text'
        placeholder='username'
        autoComplete='username'
        name='username'
      />
      <input
        type='password'
        placeholder='password'
        autoComplete='current-password'
        name='password'
      />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
