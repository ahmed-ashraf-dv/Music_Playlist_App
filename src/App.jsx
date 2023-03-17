import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Playlists from "./pages/Playlists";

// styles
import "./styles/index.scss";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Layouts
import Layout from "./layouts/MainLayout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/playLists" element={<Playlists />} />
          <Route path="/playList/:id" element={<Playlist />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
