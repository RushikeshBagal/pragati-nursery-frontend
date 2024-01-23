import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Home from "../pages/home/Home";
import DashboardHome from "../pages/Dashboard/Home";
import DashboardLogin from "../pages/Dashboard/authentication/Login";
import DashboardForgotPassword from "../pages/Dashboard/authentication/ForgotPassword";
import DashboardResetPassword from "../pages/Dashboard/authentication/ResetPassword";
import { InOutInventory } from "../pages/Dashboard/InOutInventory";

export const RouterComponent = ({ setShowFooter }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      setShowFooter(false);
    }
  }, [pathname, setShowFooter]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/dashboard-login" element={<DashboardLogin />} />
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
