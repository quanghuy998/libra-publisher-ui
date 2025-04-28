"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type UserRole = "admin" | "editor" | "author" | "viewer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample user data - in a real app, this would come from a database
const SAMPLE_USERS = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123", // In a real app, passwords would be hashed
    role: "admin" as UserRole,
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: "2",
    name: "Editor User",
    email: "editor@example.com",
    password: "editor123",
    role: "editor" as UserRole,
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: "3",
    name: "Author User",
    email: "author@example.com",
    password: "author123",
    role: "author" as UserRole,
    avatar: "/placeholder.svg?height=64&width=64",
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage on initial load
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find user with matching credentials
    const matchedUser = SAMPLE_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      // Create a user object without the password
      const { password, ...userWithoutPassword } = matchedUser;
      setUser(userWithoutPassword);

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
