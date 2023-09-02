import { useAuth } from '@/context/auth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { sessionId } = useAuth();
  if (!sessionId) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
}
