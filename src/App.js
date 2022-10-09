import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Reddit from "./components/Reddit";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Reddit />
      <Footer />
    </Layout>
  );
}

export default App;
