
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthService } from "@/services/auth";

interface User {
  _id?: string;
  name: string;
  email: string;
  role: 'citizen' | 'surveyor' | 'registrar' | 'admin';
  aadhaarNumber?: string;
  phoneNumber?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (userData: any) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  logout: () => {},
  updateProfile: async () => ({ success: false }),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Initial authentication check
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      
      if (response.success && response.user) {
        setUser(response.user);
      }
      
      return {
        success: response.success,
        message: response.message
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: "An unexpected error occurred"
      };
    }
  };
  
  const register = async (userData: any) => {
    try {
      const response = await AuthService.register(userData);
      
      if (response.success && response.user) {
        setUser(response.user);
      }
      
      return {
        success: response.success,
        message: response.message
      };
    } catch (error) {
      console.error("Register error:", error);
      return {
        success: false,
        message: "An unexpected error occurred"
      };
    }
  };
  
  const logout = () => {
    AuthService.logout();
    setUser(null);
  };
  
  const updateProfile = async (userData: Partial<User>) => {
    if (!user || !user._id) {
      return {
        success: false,
        message: "You must be logged in to update your profile"
      };
    }
    
    try {
      const response = await AuthService.updateUserProfile(user._id, userData);
      
      if (response.success && response.user) {
        setUser(response.user);
      }
      
      return {
        success: response.success,
        message: response.message
      };
    } catch (error) {
      console.error("Update profile error:", error);
      return {
        success: false,
        message: "An unexpected error occurred"
      };
    }
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
