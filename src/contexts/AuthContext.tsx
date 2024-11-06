"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
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
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_apiKey}users/`,
        { username, email, password, firstName, lastName }
      );
      console.log(data);
      setUser(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
