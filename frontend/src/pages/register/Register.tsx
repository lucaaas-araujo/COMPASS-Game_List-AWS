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
import style from './Register.module.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clerk
    console.log('Register:', { name, email, password, confirmPassword });
  };

  return (
    <div className={style.register}>
      <Card variant='auth'>
        <div className={style.logo}>
          <img src={Logo} alt='Game List' />
        </div>
        <CardHeader>
          <div className={style.cardheader}>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Register yourself to access the system
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.content}>
              <label htmlFor='name'>Full Name</label>
              <Input
                id='name'
                variant='squared'
                type='text'
                placeholder='Enter your name'
                value={name}
                style={{ width: 'auto' }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className={style.content}>
              <label htmlFor='password'>Confirm Password</label>
              <Input
                id='confirmPassword'
                type='password'
                variant='squared'
                placeholder='Confirm your password'
                value={confirmPassword}
                style={{ width: 'auto' }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type='submit' variant='turquoise' className={style.btnsign}>
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className={style.footer}>
          <span>
            Already have an account? <Link to='/login'>Login now</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};
