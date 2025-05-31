import { Button } from '../../components/ui/button/button';
import { useState } from 'react';
import { Input } from '../../components/ui/input/input';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '../../components/ui/card/card';
import style from './login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clerk
    console.log('Login:', { email, password });
  };

  return (
    <Card variant='auth'>
      <div className={style.logo}>
        <img src={Logo} alt='Game List' />
      </div>
      <CardHeader>
        <div className={style.cardheader}>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.content}>
            <label htmlFor='email'>Email</label>
            <Input
              id='email'
              variant='squared'
              type='email'
              placeholder='Enter your email'
              value={email}
              style={{ width: 'auto' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.content}>
            <label htmlFor='password'>Password</label>
            <Input
              id='password'
              type='password'
              variant='squared'
              placeholder='Enter your password'
              value={password}
              style={{ width: 'auto' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' variant='turquoise' className={style.btnlogin}>
            LOGIN
          </Button>
        </form>
      </CardContent>
      <CardFooter className={style.footer}>
        <span>
          Don’t have an account? <Link to='/register'>Register now</Link>
        </span>
      </CardFooter>
    </Card>
  );
};
