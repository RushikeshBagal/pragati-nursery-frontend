import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import PageNotFound from "../pages/PageNotFound"
import DashboardHome from "../pages/dashboard/home";
import DashboardLogin from "../pages/dashboard/login";
import DashboardForgotPassword from "../pages/dashboard/forgotPassword";
import DashboardResetPassword from "../pages/dashboard/resetPassword";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
// import StoreLocator from "../pages/storeLocator";
import { AddCategory } from "../pages/dashboard/addCategory";
import { AddProduct } from "../pages/dashboard/addProduct";
import { InventryManagement } from "../pages/dashboard/inventryManagement";
import { InOutInventry } from "../pages/dashboard/inOutInventry";
import { PriceUpdate } from "../pages/dashboard/priceUpdate";

export const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/dashboard-login" element={<DashboardLogin />} />
          <Route path="/dashboard-forgotpassword" element={<DashboardForgotPassword />} />
          <Route path="/dashboard-resetpassword" element={<DashboardResetPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/inventry-management" element={<InventryManagement />} />
          <Route path="/inventry-inOut" element={<InOutInventry />} />
          <Route path="/price-update" element={<PriceUpdate />} />
          {/* <Route path="/storelocator" element={<StoreLocator />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
