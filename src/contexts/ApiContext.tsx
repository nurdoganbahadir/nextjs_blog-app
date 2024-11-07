// ApiContext.js
"use client"
import React, { createContext, useContext, ReactNode } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

interface ApiContextType {
  dashboard: any;
}

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();

  // Axios instance oluşturma
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_apiKey,
  });

  // Her istekte token eklemek için interceptor kullanımı
  api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // API işlemleri burada tanımlanabilir
  const dashboard = async () => {
    try {
      const { data } = await api.get("/blogs/");
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiContext.Provider value={{ dashboard }}>{children}</ApiContext.Provider>
  );
};

// useApi hook'u oluşturma
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error("useApi must be used within ApiProvider");
  return context;
};
