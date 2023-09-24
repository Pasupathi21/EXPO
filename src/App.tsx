import "./styles/App.scss";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Component
import AppLayout from "./app-layout/AppLayout";
import PageComponents from "./components/MUI/AppContent/PageComponents/PageComponents";

// ******************* Util
import { RANDOM_UNIQUE } from "./utils/getUnique";

// ************************* Pages
// import TestComponent from './pages/Test/TestPage'
const TestCom = lazy(() => import("./pages/Test/TestPage"));

// ******************* App Data
import { APP_ROUTES } from "./data/AppRoutes";


function App() {
  console.log('PageComponents', PageComponents())
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} key={RANDOM_UNIQUE()}>
        {/* {...TestArray} */}
        { ...PageComponents() }
      </Route>
    </Routes>
  );
}

export default App;
