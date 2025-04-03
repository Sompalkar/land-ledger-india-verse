
import { userService } from './mongodb';

interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  aadhaarNumber?: string;
  phoneNumber?: string;
  role: 'citizen' | 'surveyor' | 'registrar' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

interface AuthResponse {
  success: boolean;
  user?: User;
  message?: string;
  token?: string;
}

// Simulated token generation
const generateToken = (userId: string): string => {
  const payload = {
    userId,
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  };
  return btoa(JSON.stringify(payload));
};

// Simple password hashing (in a real app, use bcrypt)
const hashPassword = (password: string): string => {
  return btoa(`hashed_${password}`);
};

// Verify password
const verifyPassword = (password: string, hashedPassword: string): boolean => {
  return hashedPassword === btoa(`hashed_${password}`);
};

export const AuthService = {
  getCurrentUser: async (): Promise<User | null> => {
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    
    try {
      // Decode token
      const payload = JSON.parse(atob(token));
      
      // Check if token is expired
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        localStorage.removeItem('auth_token');
        return null;
      }
      
      // Get user from database
      const user = await userService.getUserById(payload.userId);
      if (!user) {
        localStorage.removeItem('auth_token');
        return null;
      }
      
      return user as User;
    } catch (error) {
      console.error('Error decoding token:', error);
      localStorage.removeItem('auth_token');
      return null;
    }
  },
  
  register: async (userData: Omit<User, '_id' | 'createdAt' | 'updatedAt' | 'role'>): Promise<AuthResponse> => {
    try {
      // Check if user already exists
      const existingUser = await userService.getUserByEmail(userData.email);
      
      if (existingUser) {
        return {
          success: false,
          message: 'User with this email already exists'
        };
      }
      
      // Create new user
      const hashedPassword = hashPassword(userData.password);
      const newUser: User = {
        ...userData,
        password: hashedPassword,
        role: 'citizen', // Default role
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const userId = await userService.createUser(newUser);
      const user = await userService.getUserById(userId);
      
      if (!user) {
        return {
          success: false,
          message: 'Failed to create user'
        };
      }
      
      // Generate token
      const token = generateToken(userId);
      localStorage.setItem('auth_token', token);
      
      return {
        success: true,
        user: user as User,
        token
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        message: 'Registration failed. Please try again.'
      };
    }
  },
  
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const user = await userService.getUserByEmail(email);
      
      if (!user) {
        return {
          success: false,
          message: 'Invalid email or password'
        };
      }
      
      const isPasswordValid = verifyPassword(password, user.password);
      
      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Invalid email or password'
        };
      }
      
      // Generate token
      const token = generateToken(user._id as string);
      localStorage.setItem('auth_token', token);
      
      return {
        success: true,
        user: user as User,
        token
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'Login failed. Please try again.'
      };
    }
  },
  
  logout: (): void => {
    localStorage.removeItem('auth_token');
  },
  
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('auth_token');
    if (!token) return false;
    
    try {
      // Decode token
      const payload = JSON.parse(atob(token));
      
      // Check if token is expired
      return payload.exp >= Math.floor(Date.now() / 1000);
    } catch (error) {
      return false;
    }
  },
  
  updateUserProfile: async (userId: string, userData: Partial<User>): Promise<AuthResponse> => {
    try {
      // Remove sensitive fields
      const { password, role, ...updateData } = userData;
      
      const updated = await userService.updateUser(userId, {
        ...updateData,
        updatedAt: new Date()
      });
      
      if (!updated) {
        return {
          success: false,
          message: 'Failed to update profile'
        };
      }
      
      const user = await userService.getUserById(userId);
      
      return {
        success: true,
        user: user as User,
        message: 'Profile updated successfully'
      };
    } catch (error) {
      console.error('Update profile error:', error);
      return {
        success: false,
        message: 'Failed to update profile. Please try again.'
      };
    }
  },
  
  changePassword: async (userId: string, currentPassword: string, newPassword: string): Promise<AuthResponse> => {
    try {
      const user = await userService.getUserById(userId);
      
      if (!user) {
        return {
          success: false,
          message: 'User not found'
        };
      }
      
      const isPasswordValid = verifyPassword(currentPassword, user.password);
      
      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Current password is incorrect'
        };
      }
      
      const hashedPassword = hashPassword(newPassword);
      
      const updated = await userService.updateUser(userId, {
        password: hashedPassword,
        updatedAt: new Date()
      });
      
      if (!updated) {
        return {
          success: false,
          message: 'Failed to change password'
        };
      }
      
      return {
        success: true,
        message: 'Password changed successfully'
      };
    } catch (error) {
      console.error('Change password error:', error);
      return {
        success: false,
        message: 'Failed to change password. Please try again.'
      };
    }
  }
};

export default AuthService;
