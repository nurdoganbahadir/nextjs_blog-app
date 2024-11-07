"use client";
import React, { useEffect } from "react";
import { useApi } from "../../../contexts/ApiContext";

const Dashboard = () => {
  const { dashboard } = useApi();

  useEffect(() => {
    dashboard();
  }, []);

  return <div>page</div>;
};

export default Dashboard;
