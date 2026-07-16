// import Navbar from "./components/Navbar";
import Navbarr from "./components/navbar";
import Hero from "./pages/hero"
import { About } from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contacts";
import Skills from "./pages/skills";
import Footer from "./components/footer";
import Admin from "./pages/admin";
import BackgroundSound from "./components/sound";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./context/user.context";

function App() {



  useEffect(() => {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTRmNmFmMzRkZGI0ODg0YmI0YWRiYjAiLCJmdWxsbmFtZSI6Ik11aGFtbWFkIFFhc2ltIiwiZW1haWwiOiJoLnFhc2ltYXNpbUBnbWFpbC5jb20iLCJpYXQiOjE3ODM1ODk2MTksImV4cCI6MTc4MzU4OTYzM30.ZPf4LJCZ4aP7y_1nBSi15VbZkQ8-UD1A0wlBirHX1Fs");

  localStorage.setItem(
    "user",
    JSON.stringify({
      fullname: "Muhammad Qasim",
      email: "h.qasimasim@gmail.com",
      password: "$2b$10$OqzytSTL/Me/.c4uI411beSCSrxfu8ieAVnGzmYwFiCx9JbvkUPKq",
      contact: "03295810323",
      role: "admin",
    })
  );
}, []);

const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbarr />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      { user?.role == "admin"?<Admin />
      :""}
      <BackgroundSound />
      
    </>
  );
}

export default App;
