import React from "react";
import { BrowserRouter, Routes as DOMRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BasicLayout from "../layout/BasicLayout";
import Teams from "../pages/Teams";
import Experience from "../pages/Experience";
import Token from "../pages/Token";
import Blogs from "../pages/Blogs";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Disclaimers from "../pages/Disclaimers";
import CookiePolicy from "../pages/CookiePolicy";
import BlogDetail from "../pages/BlogDetail";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../hooks/firebase";
import AdminAllBlogs from "../pages/Admin/AdminAllBlogs";
import AdminCreateBlog from "../pages/Admin/AdminCreateBlog";
import AdminEditBlog from "../pages/Admin/AdminEditBlog";
import PreSale from "../pages/PreSale";
import BattlePlan from "../pages/BattlePlan";
import Airdrop from "../pages/Airdrop";
const Routes = () => {
  const [adminUser, setAdminUser] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setAdminUser(currentUser);
  });
  return (
    <BrowserRouter>
      <DOMRoutes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="" index element={<Home />} />
          <Route path="token" element={<Token />} />
          <Route path="presale" element={<PreSale />} />
          <Route path="battle" element={<BattlePlan />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="team" element={<Teams />} />
          <Route path="experiences" element={<Experience />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimers" element={<Disclaimers />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
        </Route>
        <Route path="/admin">
          <Route path="" element={<AdminLogin />} />
          <Route path="login" element={<AdminLogin />} />
          <Route
            path="dashboard"
            element={<AdminDashboard adminUser={adminUser} />}
          />
          <Route
            path="blogs"
            element={<AdminAllBlogs adminUser={adminUser} />}
          />
          <Route
            path="blogs/create"
            element={<AdminCreateBlog adminUser={adminUser} />}
          />
          <Route
            path="blogs/:id/edit"
            element={<AdminEditBlog adminUser={adminUser} />}
          />
        </Route>
      </DOMRoutes>
    </BrowserRouter>
  );
};

export default Routes;
