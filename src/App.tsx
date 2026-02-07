import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./assets/pages/NotFoundPage";
import MainLayout from "./assets/components/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/page/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
