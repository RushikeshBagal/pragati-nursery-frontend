import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Home from "../pages/Home/Home";
import DashboardHome from "../pages/Dashboard/dashboardHome/Home"
import DashboardLogin from "../pages/Dashboard/authentication/Login";
import DashboardForgotPassword from "../pages/Dashboard/authentication/ForgotPassword";
import DashboardResetPassword from "../pages/Dashboard/authentication/ResetPassword";
import { InOutInventory } from "../pages/Dashboard/InventoryManagement/InOutInventory";
import { Profile } from "../pages/Profile/Profile";

export const RouterComponent = ({ setShowFooter }) => {
  const location = useLocation();
  const { pathname } = location;

  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem("token", JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"))
      setToken(data)
    }
  },[])

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      setShowFooter(false);
    }
  }, [pathname, setShowFooter]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<DashboardLogin setToken={setToken} />} />
      {token ? 
      <Route path="/dashboard-home" element={<DashboardHome />} />
      : ""  
    }
      {/* // <Route path="/dashboard-home" element={<DashboardHome />} /> */}
      <Route
        path="/dashboard-forgotpassword"
        element={<DashboardForgotPassword />}
      />
      <Route
        path="/dashboard-resetpassword"
        element={<DashboardResetPassword />}
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
      <Route path="/inventory-in-out" element={<InOutInventory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
