import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '../../../components/ui/button/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card/card';
import { Input } from '../../../components/ui/input/input';
import { logo } from '../../../utils/icons';
import style from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('You must fill in all fields!');
      return;
    }
    // Clerk
    console.log('Login:', { email, password });
    toast.success('Login successful!');
  };

  return (
    <div className={style.login}>
      <ToastContainer position='top-right' autoClose={3000} />
      <Card variant='auth'>
        <div className={style.logo}>
          <img src={logo} alt='Game List' />
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
            <Button
              type='submit'
              variant='turquoise'
              className={style.btnlogin}>
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
    </div>
  );
};

/*  if(!email || password!){
      const notify = () => { toast.error('You must fill in all the spaces!')}
    } */
