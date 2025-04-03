
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "citizen" | "surveyor" | "registrar" | "admin";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate("/login");
    } else if (!isLoading && isAuthenticated && requiredRole && user?.role !== requiredRole) {
      // Redirect to dashboard if user doesn't have the required role
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate, requiredRole, user]);
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 text-land-600 animate-spin" />
          <p className="text-land-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect to login in useEffect
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return null; // Will redirect to dashboard in useEffect
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
