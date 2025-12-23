// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const REGISTERED_USERS_KEY = 'registered_users';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load user from localStorage on initial render
  useEffect(() => {
    const checkAuthStatus = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          // Verify the user is still in registered users
          const registeredUsers = JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
          const isUserRegistered = registeredUsers.some(u => u.email === userData.email);
          
          if (isUserRegistered) {
            return userData;
          } else {
            // If user is not in registered users, log them out
            localStorage.removeItem('user');
          }
        } catch (error) {
          console.error('Failed to parse user data', error);
          localStorage.removeItem('user');
        }
      }
      return null;
    };

    const initializeAuth = () => {
      const user = checkAuthStatus();
      // Use a single state update to avoid multiple renders
      setUser(user);
      setIsLoading(false);
    };

    // Initialize auth state
    initializeAuth();
  }, []);

  // Get all registered users
  const getRegisteredUsers = () => {
    return JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
  };

  // Generate a simple unique ID
  const generateUserId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Register a new user
  const signup = (userData) => {
    try {
      const registeredUsers = getRegisteredUsers();
      
      // Check if user already exists
      const userExists = registeredUsers.some(user => user.email === userData.email);
      if (userExists) {
        setError('User with this email already exists');
        return { success: false, error: 'User with this email already exists' };
      }

      // Add new user to registered users
      const newUser = {
        ...userData,
        id: generateUserId(),
        createdAt: new Date().toISOString()
      };
      
      registeredUsers.push(newUser);
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(registeredUsers));
      
      // Auto-login after signup
      login({ email: userData.email, password: userData.password });
      return { success: true };
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  // Login existing user
  const login = (credentials) => {
    try {
      const registeredUsers = getRegisteredUsers();
      const user = registeredUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        const userData = { email: user.email, name: user.name, id: user.id };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setError('');
        return { success: true };
      } else {
        setError('Invalid email or password');
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout,
      isLoading,
      error,
      setError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};