import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const User = lazy(() => import("../pages/User"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="loading">Loading page...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
