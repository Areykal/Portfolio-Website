import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";

// Lazy load main page
const HomePage = lazy(() => import("./pages/HomePage"));

// Lazy load components within HomePage
const LazyHero = lazy(() => import("./components/Hero"));
const LazyAboutMe = lazy(() => import("./components/AboutMe"));
const LazyProjects = lazy(() => import("./components/Projects"));
const LazyContactSection = lazy(() => import("./components/ContactSection"));

const App = () => (
  <HelmetProvider>
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-900">
        <SkipLink />
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyHero />
                    </Suspense>
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyAboutMe />
                    </Suspense>
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyProjects />
                    </Suspense>
                    <Suspense fallback={<LoadingSpinner />}>
                      <LazyContactSection />
                    </Suspense>
                  </>
                }
              />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  </HelmetProvider>
);

export default App;
