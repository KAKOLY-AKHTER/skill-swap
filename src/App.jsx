// src/App.jsx
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./routes/router"; 

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}
