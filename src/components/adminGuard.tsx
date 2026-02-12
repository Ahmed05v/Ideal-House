'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (!user.isAdmin) {
      router.push('/');
    }
  }, [user, router]);

  if (!user || !user.isAdmin) return null;

  return <>{children}</>;
}
