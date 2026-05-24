import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className="main_layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
