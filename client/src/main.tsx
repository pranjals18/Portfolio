import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import Skills from "./components/skills/Skills.tsx";
import Hero from "./components/hero/Hero.tsx";
import FeaturedProjects from "./components/projects/FeaturedProjects.tsx";
import Testimonials from "./components/testimonials/Testimonials.tsx";
import Contact from "./components/contact/Contact.tsx";
import Feedback from "./components/feedback/Feedback.tsx";
import "./index.css";
import { AuthProvider } from "./components/context/AuthContext.tsx";
import AdminLogin from "./components/admin/AdminLogin.tsx";
import ProtectedRoute from "./components/admin/ProtectedRoute.tsx";
import AdminDashboard from "./components/admin/AdminDashboard.tsx";
import AdminMessages from "./components/admin/AdminMessages.tsx";
import AdminTestimonials from "./components/admin/AdminTestimonials.tsx";
import { ThemeProvider } from "./components/context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/feedback" element={<Feedback />} />
            <Route
              path="/"
              element={
                <>
                  <div id="home">
                    <Hero />
                  </div>
                  <div id="skills">
                    <Skills />
                  </div>
                  <div id="projects">
                    <FeaturedProjects />
                  </div>
                  <div id="testimonials">
                    <Testimonials />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </>
              }
            />

            {/* Admin Routes */}
            <Route path="/admin/" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/messages" element={<AdminMessages />} />
              <Route
                path="/admin/testimonials"
                element={<AdminTestimonials />}
              />
            </Route>

            {/* Default Route */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
