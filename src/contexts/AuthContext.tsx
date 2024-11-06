"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  console.log(user);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_apiKey}auth/login`,
        { email, password }
      );
      setUser(data);
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
