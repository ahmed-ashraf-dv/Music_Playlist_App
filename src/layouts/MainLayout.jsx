import React from "react";
import SideNav from "../components/SideNav";

const MainLayout = ({ children }) => {
  return (
    <article className="d-flex justify-content-center text-white">
      <div className="col-md-2">
        <SideNav />
      </div>

      <div className="col-md-10">
        <article style={{ background: "#191919", minHeight: "100vh" }}>
          {children}
        </article>
      </div>
    </article>
  );
};

export default MainLayout;
