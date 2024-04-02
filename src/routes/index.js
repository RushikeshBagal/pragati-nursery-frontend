import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Home from "../pages/home/Home";
import DashboardHome from "../pages/dashboard/dashboardHome/Home";
import DashboardLogin from "../pages/dashboard/authentication/Login";
import DashboardForgotPassword from "../pages/dashboard/authentication/ForgotPassword";
import DashboardResetPassword from "../pages/dashboard/authentication/ResetPassword";
import { Profile } from "../pages/profile/Profile";
import { CheckoutPage } from "../pages/home/cart/checkoutPage/CheckoutPage";

export const RouterComponent = (props) => {
  const {
    isCartOpen,
    setIsCartOpen,
    setShowFooter,
    isLoginDrawerOpen,
    setIsLoginDrawerOpen,
  } = props;
  const location = useLocation();
  const { pathname } = location;

  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      setShowFooter(false);
    }
  }, [pathname, setShowFooter]);
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="home" />} />
      <Route
        path="/home"
        element={
          <Home
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isLoginDrawerOpen={isLoginDrawerOpen}
            setIsLoginDrawerOpen={setIsLoginDrawerOpen}
          />
        }
      />
      <Route
        path="/dashboard"
        element={<DashboardLogin setToken={setToken} />}
      />
      {token ? (
        <Route path="/dashboard-home" element={<DashboardHome />} />
      ) : (
        ""
      )}
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
