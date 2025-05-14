import React from 'react';
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <Button variant={'destructive'} onClick={() => signOut({ callbackUrl: '/login' })}>
      Log out
    </Button>
  );
};

export default LogoutButton;
