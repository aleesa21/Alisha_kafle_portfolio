import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import "../css/layout.css"

export default function Layout() {
  return (
    <>
      <div className="main_layout">
        <Header />
        <Outlet/>
      </div>
       <Footer />

    </>
  );
}
