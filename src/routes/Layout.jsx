// import Footer from "components/Footer";
import Header from "components/index";
// import SidebarMain from "components/Sidebars/SidebarMain";
// import SidebarSecondary from "components/Sidebars/SidebarSecondary";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React, { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [mainOpen, setMainOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMainOpen = () => setMainOpen(true);
  const handleMainClose = () => setMainOpen(false);
  return (
    <main className="flex">
      <div className="w-full flex-grow min-w-0">
        <Header handleOpen={handleMainOpen} />
        <div className="pt-10 pb-20">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </main>
  );
}
